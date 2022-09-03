

export type PostType = "story" | "diary";

// export type FrontMatter = {
//   // require
//   author: UserSchema;
//   tags: Array<string>;
//   description: string;
//   postId: string;
//   slugify: string;
//   title: string;
//   post: PostType;
//   language: string;
//   date: string;

//   // optional
//   archived?: boolean;
//   draft?: boolean;
// };

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

// export type Post = {
//   code: string;
//   frontmatter: FrontMatter;
//   readTime: ReadTime;
//   toc: Toc[];
// }

export type MorePost = {
  postTitle: string;
  authorImg: string;
  authorName: string;
  publishDate: string;
  postUrl: string;
}

export type GitHubFile = { path: string; content: string }

//
type Status = 'published' | 'draft'

export type SBBlog = {
  id?: string;
  user_id: string;
  status: Status;
  publish_date: number;
  title: string;
  slugify: string;
  tags: string[];
  sha?: string;
  hash?: string
}

export type GithubBlog = {
  id: string;
  user_id: string;
  toc: Toc[],
  read_time: ReadTime,
  mdx_code: string;
  compile_code: string;
  subtitle: string;
  imagesSrc: string[]
}

export type BlogSchema = SBBlog & Pick<GithubBlog, 'toc' | 'read_time' | 'mdx_code' | 'compile_code' | 'subtitle' | 'imagesSrc'>

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
