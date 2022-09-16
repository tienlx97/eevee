type ReadTime = {
  minutes: number;
  text: string;
  time: number;
  words: number;
};

type Toc = {
  depth: number;
  url: string;
  value: string;
};

type Status = 'published' | 'draft'

export type S_BlogSchema = {
  id?: string;
  user_id: string;
  status: Status;
  publish_date?: number;
  edit_date?: number;
  title: string;
  slugify: string;
  tags?: string[];
  short_id?: string;
}

export type G_BlogSchema = {
  id: string;
  short_id?: string;
  user_id: string;
  toc: Toc[],
  read_time: ReadTime,
  mdx_code: string;
  subtitle: string;
  imagesSrc: string[];
}

export type BlogSchema = S_BlogSchema &
  Pick<G_BlogSchema,
    'toc' |
    'read_time' |
    'mdx_code' |
    'subtitle' |
    'imagesSrc'>

export type UserSchema = {
  id: string;
  mimikyu_id: string,
  email: string,
  name: string;
  nick_name: string;
  photo_url: string;
  description: string;
}

export type BlogQuery = BlogSchema & {
  author: UserSchema,
}
