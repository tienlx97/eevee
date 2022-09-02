import * as React from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { useAuthContext } from '@context/AuthContext';

import { TextLink } from '@eevee/react-link';
import { useToast } from '@eevee/react-toast';
import { Heading, TextArea } from '@components/medium/index';

import { InputGroup } from '../input-group/index';
import { updateDescription, updateName, updateNickname } from '../../services/updateName';
import { validateNickname } from '../../services/validateNickname';
import { spaceOrSepecialCharacter } from '@utilities/regex';

import { useStyles } from './styles';

export const ProfileList = () => {
  const { user, refetch } = useAuthContext();
  const toastify = useToast();
  const styles = useStyles();
  const { cache } = useSWRConfig();
  const [saveName, setOnSaveName] = React.useState(false);
  const [saveNickname, setOnSaveNickname] = React.useState(false);
  const [saveDescription, setOnDescription] = React.useState(false);

  const [nickNameError, setNickNameError] =
    React.useState<{
      type: 'error' | 'success' | 'query';
      message: string;
    } | null>(null);

  const nameRef = React.useRef<HTMLInputElement>(null);
  const nicknameRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null);

  const { data: nameResData } = useSWR(
    saveName && nameRef.current ? [nameRef.current.value, user?.id] : null,
    updateName,
  );

  const { data: descriptionResData } = useSWR(
    saveDescription && descriptionRef.current ? [descriptionRef.current.value, user?.id] : null,
    updateDescription,
  );

  const { data: nickNameResData } = useSWR(
    saveNickname && nicknameRef.current ? [nicknameRef.current.value, user?.id] : null,
    updateNickname,
  );

  const { data: availableNickName } = useSWR(
    nickNameError && nickNameError.type === 'query' && nicknameRef.current ? nicknameRef.current?.value : null,
    validateNickname,
  );

  React.useEffect(() => {
    if (nameResData) {
      cache.delete(nameResData.nick_name);
      refetch();
      setOnSaveName(false);
      toastify('info', 'Update name success');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameResData]);

  React.useEffect(() => {
    if (descriptionResData) {
      cache.delete(descriptionResData.nick_name);
      refetch();
      setOnDescription(false);
      toastify('info', 'Update description success');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [descriptionResData]);

  React.useEffect(() => {
    if (nickNameResData) {
      refetch();
      setOnSaveNickname(false);
      toastify('info', 'Update nickname success');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nickNameResData]);

  React.useEffect(() => {
    if (availableNickName) {
      setNickNameError({
        type: 'success',
        message: 'Nickname available',
      });
    }
  }, [availableNickName]);

  const onNameEdit = (edit: boolean) => {
    if (!nameRef.current) {
      return;
    }
    nameRef.current.disabled = !edit;
    if (edit) {
      nameRef.current.focus();
    } else {
      nameRef.current.value = user?.name!;
    }
  };

  const onNameSave = () => {
    if (!nameRef.current) {
      return;
    }
    nameRef.current.disabled = true;
    setOnSaveName(true);
  };
  // ===

  const onNicknamEdit = (edit: boolean) => {
    if (!nicknameRef.current) {
      return;
    }
    nicknameRef.current.disabled = !edit;
    if (edit) {
      nicknameRef.current.focus();
    } else {
      setNickNameError(null);
      nicknameRef.current.value = user?.nick_name!;
    }
  };

  const onNicknameKeyup = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const val = (e.target as HTMLInputElement).value;
    if (val === user?.nick_name) {
      setNickNameError({
        type: 'error',
        message: `cannot create nickname resource that's already in use`,
      });
    } else if (spaceOrSepecialCharacter(val)) {
      setNickNameError({
        type: 'error',
        message: `Nickname may only use letters, numbers, and “-”`,
      });
    } else {
      setNickNameError({
        type: 'query',
        message: '',
      });
    }
  };

  const onNicknameSave = () => {
    if (!nicknameRef.current) {
      return;
    }

    nicknameRef.current.disabled = true;

    if (nicknameRef.current.value === user?.nick_name) {
      toastify('error', `Nickname isn't changed`);
      setNickNameError(null);
    } else if (nickNameError?.type === 'success') {
      setOnSaveNickname(true);
    }
  };

  // ===

  const onDescriptionEdit = (edit: boolean) => {
    if (!descriptionRef.current) {
      return;
    }
    descriptionRef.current.disabled = !edit;
    if (edit) {
      descriptionRef.current.focus();
    } else {
      descriptionRef.current.value = user?.description!;
    }
  };

  const onDescriptionSave = () => {
    if (!descriptionRef.current) {
      return;
    }
    descriptionRef.current.disabled = true;
    setOnDescription(true);
  };

  return (
    <>
      <Heading>Profile</Heading>
      <InputGroup
        onEdit={onNameEdit}
        onSave={onNameSave}
        title="Name"
        description={
          <div>
            Your name appears on your <TextLink href={`/@${user?.nick_name}`}>Profile</TextLink> page, as your byline,
            and in your responses. It is a required field.
          </div>
        }
      >
        <input
          autoComplete="off"
          spellCheck={false}
          ref={nameRef}
          disabled={true}
          maxLength={50}
          defaultValue={user?.name}
        />
      </InputGroup>

      <InputGroup
        onEdit={onNicknamEdit}
        onSave={onNicknameSave}
        title="Nickname"
        description={
          <div>
            Your nickname appears on each blog. It's unique and used to connect to your{' '}
            <TextLink href={`/@${user?.nick_name}`}>Profile</TextLink> page.
          </div>
        }
      >
        <input
          ref={nicknameRef}
          spellCheck={false}
          autoComplete="off"
          disabled
          onKeyUp={onNicknameKeyup}
          maxLength={50}
          defaultValue={user?.nick_name}
        />
        {nickNameError && nickNameError.type === 'error' && <p className={styles.error}>{nickNameError.message}</p>}
        {nickNameError && nickNameError.type === 'success' && <p className={styles.success}>{nickNameError.message}</p>}
      </InputGroup>

      <InputGroup
        onEdit={onDescriptionEdit}
        onSave={onDescriptionSave}
        title="Short bio"
        description={
          <div>
            Your short bio appears on your <TextLink href={`/@${user?.nick_name}`}>Profile</TextLink> and next to your
            stories. Max 160 characters.
          </div>
        }
      >
        <TextArea
          rows={3}
          ref={descriptionRef}
          maxLength={160}
          disabled
          spellCheck={false}
          defaultValue={user?.description}
        />
      </InputGroup>
    </>
  );
};
