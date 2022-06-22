export const changeTypes = {
  M: 'modified',
  A: 'added',
  D: 'deleted',
  R: 'moved',
};

export type ChangedFile = {
  changeType: 'modified' | 'added' | 'deleted' | 'moved';
  filename: string;
};
