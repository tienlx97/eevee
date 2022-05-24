export type IHeading = {
  text: string;
  level: 1 | 2 | 3;
};

export type IHeadingProps = {
  headings: IHeading[];
};

export type IHeadingWithId = IHeading & {
  id: string;
};
