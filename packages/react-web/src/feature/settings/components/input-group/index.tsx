import * as React from 'react';
import { useStyles } from './styles';

import { mergeClasses } from '@griffel/react';

import { Button } from '@eevee/react-button';

type InputGroupProps = {
  title: string;
  description?: React.ReactNode;
  onEdit: (e: boolean) => void;
  onSave: () => void;
};

export const InputGroup: React.FC<InputGroupProps> = ({ title, description, children, onEdit, onSave }) => {
  const styles = useStyles();

  const [edit, setEdit] = React.useState(false);

  const onEditClick = () => {
    onEdit(!edit);
    setEdit(!edit);
  };

  const onSaveClick = () => {
    onSave();
    setEdit(false);
  };

  return (
    <li className={styles.item}>
      {/* data */}
      <div className={styles.dataWrapper}>
        <div className={styles['u-flex1']}>
          <div className={mergeClasses(styles['ui-h3'], styles['max-width450'])}>{title}</div>
          <div>
            <div className={styles['ui-body']}>
              {children}
              <div className={styles.mb} />
              {description}
            </div>
          </div>
        </div>
      </div>
      {/* edit button */}
      <div>
        {edit && (
          <Button
            onClick={onSaveClick}
            appearance="unstyled"
            shape="circular"
            style={{
              fontSize: '14px',
              color: '#1a8917',
              borderColor: '#1a8917',
              marginRight: '8px',
              padding: '4px 16px',
            }}
          >
            Save
          </Button>
        )}
        <Button
          onClick={onEditClick}
          appearance="unstyled"
          shape="circular"
          style={{ fontSize: '14px', padding: '4px 16px' }}
        >
          {edit ? 'Cancel' : 'Edit'}
        </Button>
      </div>
    </li>
  );
};
