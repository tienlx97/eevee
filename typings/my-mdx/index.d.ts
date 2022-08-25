

export type PostType = "story" | "diary";

export type FrontMatter = {
  // require
  author: UserSchema;
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

type Status = 'published' | 'draft'

export type BlogSchema = {
  id?: string;
  user_id: string;
  compile_code: string;
  mdx_code: string;
  status: Status;
  publish_date: number;
  toc: Toc[];
  read_time: ReadTime;
  title: string;
  subtitle: string;
  slugify: string;
  tags: string[];
}

export type UserSchema = {
  id: string;
  mimikyu_id: string,
  email: string,
  name: string;
  nick_name: string;
  photo_url: string;
  description: string;
}

export type Blog = BlogSchema & {
  author: UserSchema,
}
