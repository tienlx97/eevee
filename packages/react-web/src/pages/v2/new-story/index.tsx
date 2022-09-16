/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { mergeClasses } from '@griffel/react';

import { useAuthContext } from '@context/AuthContext';

import { slugify, usePrevious } from '@eevee/react-utilities';
import { TextLink } from '@eevee/react-link';
import { H1, InlineCode, Paragraph } from '@eevee/react-mdx-comp';

import { MiddleLayout } from '@layout/index';

import { InputGroup } from '@components/input-group/index';
import { BlurSystem } from '@components/blur-system/index';
import { MDXRemote } from '@components/Mdx/remote';
import { serialize } from '@components/Mdx/serialize';

import { Action, Editor, ImgUpload, PublishContent, PublishSystem, usePublishBlog } from '@feature/new-story/index';

import { useAsyncValue, useLocation, useNavigate } from 'react-router-dom';
import { getDate } from '@feature/new-story/index';
import { useToast } from '@eevee/react-toast';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditorView } from '@codemirror/view';
import { useActionStyles, useEditorPreviewStyles, useInputGroupStyles, useSkeletonStyles, useStyles } from './styles';
import { Button } from '@eevee/react-button';

import { debounce, initial } from 'lodash';
import type { BlogSchema } from 'typings/schema/index';

const OurFallbackComponent = ({ error, componentStack, resetErrorBoundary }: any) => {
  const matches = error.message.match(/\`(.*?)\`/);
  return (
    <div>
      <H1>w0w</H1>
      <Paragraph>
        You get error at: <InlineCode>{matches ? `<${matches[1]} />` : error.message}</InlineCode>
      </Paragraph>

      <Paragraph>
        <TextLink href="#">Back to the editor plz!</TextLink>
      </Paragraph>
    </div>
  );
};
// View [ui](/ui) page to see markdown component\n\n\n\n\n\n\n\n\n
const text = '';

export const NewStory = ({ type = 'new' }: { type: 'new' | 'edit' }) => {
  // style hook
  const styles = useStyles();
  const inputGroupStyles = useInputGroupStyles();
  const editorPreviewStyles = useEditorPreviewStyles();
  const actionStyles = useActionStyles();

  // ref
  const slugifyRef = React.useRef<HTMLInputElement>(null);
  const titleRef = React.useRef<HTMLInputElement>(null);
  const subtitleRef = React.useRef<HTMLTextAreaElement>(null);
  const datePickerRef = React.useRef<HTMLInputElement>(null);

  // hooks
  const toastify = useToast();
  const publishBlog = usePublishBlog();
  const { user: author } = useAuthContext();
  const navigate = useNavigate();
  const loc = useLocation();
  const initialBlog = useAsyncValue() as BlogSchema;

  // state
  const [loading, setLoading] = React.useState(true);
  const [isScheduleBlog, setScheduleBlog] = React.useState(true);
  const [tags, setTags] = React.useState<any>();
  const [editorSource, setEditorSource] = React.useState(text);
  const [compiledSource, setCompiledSource] = React.useState('');
  const [editorView, setEditorView] = React.useState<EditorView | undefined>(undefined);
  const [slugifyVal, setSlugifyVal] = React.useState('');
  const [titleVal, setTitleVal] = React.useState('');
  const [subtitleVal, setSubtitleVal] = React.useState('');
  const [blogId, setBlogId] = React.useState<string | undefined>(undefined);
  const [draftValue, setDraftValue] = React.useState('Draft');
  const [showPublish, setShowPublish] = React.useState(false);
  const [disableDraftBtn, setDisableDraftBtn] = React.useState(false);
  const [selectedImageList, setSelectedImageList] = React.useState<string[]>([]);
  const [isOpenPreview, setOpenPreview] = React.useState(false);

  // action

  const onEditPreviewChange = React.useCallback(
    (val: boolean) => {
      if (!val) {
        serialize(editorSource, { parseFrontmatter: true, imagesSrc: selectedImageList }).then(p => {
          setCompiledSource(p.compiledSource);
          setOpenPreview(true);
        });
      } else {
        setOpenPreview(false);
      }
    },
    [editorSource, selectedImageList],
  );

  const onPublishClick = () => {
    setShowPublish(false);

    if (!datePickerRef.current) {
      return;
    }

    const dateInput = datePickerRef.current;

    if (slugifyVal === '') {
      toastify('error', 'Slugify is empty');
      return;
    }

    if (titleVal === '') {
      toastify('error', 'Title is empty', false);
      return;
    }

    if (subtitleVal === '') {
      toastify('error', 'Subtitle is empty', false);
      return;
    }

    if (!tags || tags.length === 0) {
      toastify('error', 'Tags is empty', false);
      return;
    }

    if (editorSource.trim() === '') {
      toastify('error', 'Editor source is empty', false);
      return;
    }

    serialize(editorSource, { imagesSrc: selectedImageList }).then(({ readTime, toc }) => {
      //
      const publishDate = isScheduleBlog ? getDate(dateInput) ?? new Date().getTime() : new Date().getTime();

      publishBlog
        .mutateAsync({
          mdx_code: editorSource,
          publish_date: publishDate,
          toc,
          read_time: readTime,
          slugify: `${slugify(slugifyVal)}`,
          user_id: author?.id!,
          tags,
          title: titleVal,
          subtitle: subtitleVal,
          status: 'published',
          imagesSrc: selectedImageList,
          id: blogId,
        })
        .then(options => {
          navigate(`/b/${options.slugify}`);
        });
    });
  };

  const setTagChange = React.useCallback((e: string[]) => {
    setTags(e);
  }, []);

  const onEditorChange = React.useCallback(newDoc => {
    setEditorSource(newDoc);
  }, []);

  const onSlugifyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSlugifyVal(e.target.value);
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitleVal(e.target.value);
  };

  const onSubtitleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSubtitleVal(e.target.value);
  };

  const getEditorView = (e?: EditorView) => {
    if (e) {
      setEditorView(e);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedAutoSave = React.useCallback(
    debounce(async (options: { editorSource: string; slugifyVal: string; titleVal: string; subtitleVal: string }) => {
      setDraftValue('Saving');
      serialize(editorSource, { imagesSrc: selectedImageList }).then(({ readTime, toc }) => {
        publishBlog
          .mutateAsync({
            mdx_code: options.editorSource,
            toc,
            read_time: readTime,
            slugify: `${slugify(options.slugifyVal)}`,
            user_id: author?.id!,
            title: options.titleVal,
            subtitle: options.subtitleVal,
            status: initialBlog ? initialBlog.status : 'draft',
            imagesSrc: selectedImageList,
            id: initialBlog ? initialBlog.id : blogId,
          })
          .then(opts => {
            setDraftValue('Saved');
            if (!initialBlog && !blogId) {
              navigate(`/p/${opts.short_id}/edit`, {
                replace: true,
                state: {
                  id: opts.id,
                },
              });
            }
          });
      });
    }, 2500),
    [selectedImageList, blogId],
  );

  React.useEffect(() => {
    if (loc.state?.id) {
      setBlogId(loc.state.id);
    }
  }, [loc]);

  React.useEffect(() => {
    if (initialBlog && type === 'edit') {
      setBlogId(initialBlog.id);
      setSlugifyVal(initialBlog.slugify.replace(`-${initialBlog.short_id!}`, ''));
      setTitleVal(initialBlog.title);
      setSubtitleVal(initialBlog.subtitle);
      // setEditorSource(blogData.mdx_code);
      editorView?.dispatch({
        changes: {
          from: 0,
          to: editorSource.length,
          insert: initialBlog.mdx_code,
        },
      });
      setDraftValue(initialBlog.status);
      setTags(initialBlog.tags);
      setSelectedImageList(initialBlog.imagesSrc ?? []);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [editorView, initialBlog, type]);

  React.useEffect(() => {
    if (editorSource.trim() !== '' && slugifyVal !== '' && titleVal !== '' && subtitleVal !== '') {
      debouncedAutoSave({
        editorSource,
        slugifyVal,
        titleVal,
        subtitleVal,
      });
    }
  }, [editorSource, slugifyVal, titleVal, subtitleVal, debouncedAutoSave]);

  return (
    <article className={styles.root}>
      <MiddleLayout style={{ display: loading ? 'none' : 'block' }}>
        <PublishSystem onClose={() => setShowPublish!(false)} show={showPublish ?? false}>
          <PublishContent
            onPublishClick={onPublishClick}
            datePickerRef={datePickerRef}
            isSchedule={isScheduleBlog}
            setSchedule={setScheduleBlog}
            tags={tags}
            setTagChange={setTagChange}
          />
        </PublishSystem>
        <div>
          <InputGroup
            inputValue={slugifyVal}
            ref={slugifyRef}
            className={inputGroupStyles.title}
            labelChildren={<>Slugify</>}
            placeholder="Write a url slug ..."
            onInputChange={onSlugifyChange}
          >
            <Button
              disabled={disableDraftBtn}
              appearance="unstyled"
              shape="circular"
              className={mergeClasses(styles.draft, !disableDraftBtn && styles.draftWithoutDisable)}
            >
              {draftValue}
            </Button>
          </InputGroup>

          <InputGroup
            ref={titleRef}
            inputValue={titleVal}
            className={inputGroupStyles.title}
            labelChildren={<>Title</>}
            placeholder="Write a preview title ..."
            onInputChange={onTitleChange}
          />
          <InputGroup
            ref={subtitleRef}
            inputValue={subtitleVal}
            className={inputGroupStyles.tag}
            labelChildren={<>Subtitle</>}
            type="text-area"
            placeholder="Tell your blog ..."
            onInputChange={onSubtitleChange}
          />
          <ImgUpload selectedImageList={selectedImageList} setSelectedImageList={setSelectedImageList} />

          <div style={{ height: '16px' }} />

          {/* wrapper */}
          <div className={editorPreviewStyles.root}>
            <Editor
              style={{ display: !isOpenPreview ? 'block' : 'none' }}
              initialDoc={editorSource}
              onChange={onEditorChange}
              getEditorView={getEditorView}
            />
            {isOpenPreview && (
              <div className={editorPreviewStyles.previewWrapper}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <ErrorBoundary FallbackComponent={OurFallbackComponent}>
                  <MDXRemote lazy compiledSource={compiledSource} />
                </ErrorBoundary>
              </div>
            )}
          </div>
        </div>
        <Action
          className={actionStyles.root}
          publish={{ onClick: () => setShowPublish(true) }}
          onEditPreviewChange={onEditPreviewChange}
        />
      </MiddleLayout>
    </article>
  );
};
