export type FileDropdownState = {
  activePath: string;
  setActiveFile: (path: string) => void;
  openPaths: string[];
  getFileName: (filePath: string) => string;
  //
  fileWrapClasses?: string;
  iconWrapClasses?: string;
  optionWrapClasses?: string;
  optionItemClasses?: string;
};
