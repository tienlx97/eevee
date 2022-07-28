
export type Author = {
  id: number;
  name: string;
  nickName: string;
  url: string;
}

export type FrontMatter = {
  author: Author[],
  tags: Array<string>
  description: string,
  id: string,
  slugify: string,
  title: string

  // optional
  archived?: boolean
  date: string
  draft?: boolean
  bannerCloudinaryId?: string
  bannerCredit?: string
  bannerAlt?: string
  bannerTitle?: string
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

export type GitHubFile = { path: string; content: string }


