import * as React from 'react';
import useSWR, { useSWRConfig } from 'swr';
import useSWRImmutable from 'swr/immutable';

import { ErrorBoundary } from 'react-error-boundary';
import { mergeClasses } from '@griffel/react';

import type { BlogSchema1 } from 'typings/my-mdx/index';

import { useAuthContext } from '@context/AuthContext';

import { slugify, usePrevious } from '@eevee/react-utilities';
import { TextLink } from '@eevee/react-link';
import { H1, InlineCode, Paragraph } from '@eevee/react-mdx-comp';

import { MiddleLayout } from '@layout/index';

import { InputGroup } from '@components/input-group/index';
import { BlurSystem } from '@components/blur-system/index';
import { MDXRemote } from '@components/Mdx/remote';
import { serialize } from '@components/Mdx/serialize';

import {
  Action,
  ActionSkeleton,
  EditBlog,
  Editor,
  ImgUpload,
  Publishdialog,
  publishStory,
  setDefaultDate,
  setDefaultMaxDate,
  setDefaultMinDate,
} from '@feature/new-story/index';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { generateHash } from '@utilities/index';
import { getDate } from '@feature/new-story/index';
import { useToast } from '@eevee/react-toast';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditorView } from '@codemirror/view';
import { useActionStyles, useEditorPreviewStyles, useInputGroupStyles, useSkeletonStyles, useStyles } from './styles';

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

const text = 'View [ui](/ui) page to see markdown component\n\n\n\n\n\n\n\n\n';

type NewStoryProps = {
  type?: 'edit' | 'new';
};

type CustomLocationState = {
  fromEdit2New?: boolean;
};

export const NewStory = ({ type = 'new' }: NewStoryProps) => {
  // style hook
  const styles = useStyles();
  const inputGroupStyles = useInputGroupStyles();
  const editorPreviewStyles = useEditorPreviewStyles();
  const actionStyles = useActionStyles();
  const skeletonStyles = useSkeletonStyles();

  // hooks
  const navigate = useNavigate();
  const loc = useLocation();
  const { blogID } = useParams();
  const toastify = useToast();
  const { user: author } = useAuthContext();

  const titleRef = React.useRef<HTMLInputElement>(null);
  const subtitleRef = React.useRef<HTMLTextAreaElement>(null);
  const datePickerRef = React.useRef<HTMLInputElement>(null);

  const preType = usePrevious(type);

  const [selectedImageList, setSelectedImageList] = React.useState<string[]>([]);

  const [tags, setTags] = React.useState<any>();
  const [editorSource, setEditorSource] = React.useState(type === 'edit' ? '' : text);
  const [compiledSource, setCompiledSource] = React.useState('');
  const [editorView, setEditorView] = React.useState<EditorView | undefined>(undefined);
  const [publishValue, setPublishValue] = React.useState<BlogSchema1 | null>(null);

  const [loading, setLoading] = React.useState(true);
  const [isOpenPreview, setOpenPreview] = React.useState(false);
  const [openPublishDialog, setOpenPublishDialog] = React.useState(false);
  const [isScheduleBlog, setScheduleBlog] = React.useState(true);

  const { data, error } = useSWRImmutable(!publishValue ? null : publishValue, publishStory);
  const { data: blogData, error: editBlogError } = useSWRImmutable(
    type === 'edit' ? [blogID, author?.id] : null,
    EditBlog,
  );
  const { cache } = useSWRConfig();

  React.useEffect(() => {
    if (data) {
      cache.delete(data.authorID);
      toastify('success', 'Publishing story success');
      navigate(`/blog/${data.slugify}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  React.useEffect(() => {
    if (editBlogError) {
      navigate('/404', {
        replace: true,
        state: {
          errorStatusCode: 404,
          from: loc.pathname,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editBlogError]);

  React.useEffect(() => {
    if (type === 'new') {
      if (!preType || preType !== 'edit') {
        setLoading(false);
        return;
      }

      if (!editorView || !titleRef.current || !subtitleRef.current) {
        return;
      }

      titleRef.current.value = '';
      subtitleRef.current.value = '';
      editorView.dispatch({
        changes: {
          from: 0,
          to: editorSource.length,
          insert: text,
        },
      });

      if (datePickerRef.current) {
        datePickerRef.current.defaultValue = setDefaultDate();
        datePickerRef.current.min = setDefaultMinDate();
        datePickerRef.current.max = setDefaultMaxDate();
      }

      setTags([]);
      setSelectedImageList([]);

      setScheduleBlog(true);
    } else if (type === 'edit') {
      setLoading(true);

      if (!editorView) {
        return;
      }

      if (blogData && titleRef.current && subtitleRef.current) {
        titleRef.current.value = blogData.title;
        subtitleRef.current.value = blogData.subtitle;
        // setEditorSource(blogData.mdx_code);
        editorView.dispatch({
          changes: {
            from: 0,
            to: editorSource.length,
            insert: blogData.mdx_code,
          },
        });
        setCompiledSource(blogData.compile_code);
        setTags(blogData.tags);
        setSelectedImageList(blogData.imagesSrc ?? []);
        setLoading(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogData, type, editorView, loc]);

  const getEditorView = (e?: EditorView) => {
    if (e) {
      setEditorView(e);
    }
  };

  // action
  const setTagChange = React.useCallback((e: string[]) => {
    setTags(e);
  }, []);

  const onEditorChange = React.useCallback(newDoc => {
    setEditorSource(newDoc);
  }, []);

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

  const onPublishToggle = () => {
    setOpenPublishDialog(true);
  };

  const onPublishClick = () => {
    setOpenPublishDialog(false);

    if (!titleRef.current || !datePickerRef.current || !subtitleRef.current) {
      return;
    }

    const titleVal = titleRef.current.value.trim();
    const subtitleVal = subtitleRef.current.value.trim();
    const dateInput = datePickerRef.current;
    let errorCounter = 0;

    if (titleVal === '') {
      errorCounter++;
      toastify('error', 'Title is empty', false);
    }

    if (subtitleVal === '') {
      errorCounter++;
      toastify('error', 'Subtitle is empty', false);
    }

    if (!tags || tags.length === 0) {
      errorCounter++;
      toastify('error', 'Tags is empty', false);
    }

    if (editorSource.trim() === '') {
      errorCounter++;
      toastify('error', 'Editor source is empty', false);
    }

    if (errorCounter === 0) {
      serialize(editorSource, { imagesSrc: selectedImageList }).then(({ compiledSource: cSource, readTime, toc }) => {
        setLoading(true);
        const publishDate = isScheduleBlog ? getDate(dateInput) ?? new Date().getTime() : new Date().getTime();
        const hash = type === 'edit' ? blogData?.hash : generateHash();
        setPublishValue({
          compile_code: cSource,
          mdx_code: editorSource,
          publish_date: publishDate,
          toc,
          read_time: readTime,
          slugify: `${slugify(titleVal)}-${hash}`,
          user_id: author?.id!,
          tags,
          hash,
          title: titleVal,
          subtitle: subtitleVal,
          status: 'published',
          id: type === 'edit' ? blogData?.id : undefined,
          imagesSrc: selectedImageList,
        });
      });
    }
  };

  return (
    <article className={styles.root}>
      <BlurSystem
        style={{
          display: loading && !data ? 'block' : 'none',
          opacity: loading && !data ? 1 : 0,
        }}
      />
      <MiddleLayout>
        <div style={{ display: loading ? 'none' : 'block' }}>
          <InputGroup
            ref={titleRef}
            className={inputGroupStyles.title}
            labelChildren={<>Title</>}
            placeholder="Write a preview title ..."
          />
          <InputGroup
            ref={subtitleRef}
            className={inputGroupStyles.tag}
            labelChildren={<>Subtitle</>}
            type="text-area"
            placeholder="Write a preview subtitle ..."
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

        {type === 'edit' && loading && !blogData && (
          <>
            <div className={mergeClasses('tweet-text', skeletonStyles.wrapper)}>
              <div
                className={mergeClasses('skeleton-line', 'heading', skeletonStyles.title)}
                style={{ width: '100%' }}
              />
              <div
                className={mergeClasses('skeleton-line', 'heading', skeletonStyles.subtitle)}
                style={{ width: '100%' }}
              />
              <div
                className={mergeClasses('skeleton-line', 'heading', skeletonStyles.editor)}
                style={{ width: '100%' }}
              />
            </div>
            <ActionSkeleton className={skeletonStyles.action} />
          </>
        )}

        <Action
          style={{ display: loading ? 'none' : 'block' }}
          className={actionStyles.root}
          publish={{ onClick: onPublishToggle }}
          onEditPreviewChange={onEditPreviewChange}
        />
      </MiddleLayout>
      <Publishdialog
        onPublishClick={onPublishClick}
        datePickerRef={datePickerRef}
        isSchedule={isScheduleBlog}
        setSchedule={setScheduleBlog}
        tags={tags}
        setTagChange={setTagChange}
        open={openPublishDialog}
        setOpen={setOpenPublishDialog}
      />
    </article>
  );
};
