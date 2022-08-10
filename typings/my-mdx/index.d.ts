
export type Author = {
  id: number;
  uid: string,
  email: string,
  photoURL: string;
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

export type MorePost = {
  postTitle: string;
  authorImg: string;
  authorName: string;
  publishDate: string;
  postUrl: string;
}

export type GitHubFile = { path: string; content: string }


//

export type FrontMatterI69n = {
  // require
  tags: Array<string>;
  title: string;
};


export type PostI69n = {
  postId?: string;
  authorID: string;
  compileCode: string;
  mdxCode: string;
  readTime: ReadTime;
  toc: Toc[];
  frontmatter: FrontMatterI69n;
  slugify: string;
  date: string;
}
