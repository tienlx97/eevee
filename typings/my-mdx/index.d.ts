
export type Author = {
  id: number;
  name: string;
  nickName: string;
  url: string;
  description: string;
}

export type PostType = "story" | "diary";

export type FrontMatter = {
  // require
  author: Author;
  tags: Array<string>;
  description: string;
  postId: string;
  slugify: string;
  title: string;
  post: PostType;
  language: string;
  date: string;

  // optional
  archived?: boolean;
  draft?: boolean;
};

export type ReadTime = {
  minutes: number;
  text: string;
  time: number;
  words: number;
};

export type Toc = {
  depth: number;
  url: string;
  value: string;
};

export type Post = {
  code: string;
  frontmatter: FrontMatter;
  readTime: ReadTime;
  toc: Toc[];
}

export type PostI18n = {
  slugify: string;
  en?: Post;
  vi?: Post;
  ja?: Post;
};


export type MorePost = {
  postTitle: string;
  authorImg: string;
  authorName: string;
  publishDate: string;
  postUrl: string;
}

export type GitHubFile = { path: string; content: string }


