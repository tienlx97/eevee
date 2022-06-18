// https://stackoverflow.com/questions/50661510/why-doesnt-fs-work-when-imported-as-an-es6-module
import * as fs from 'fs';

//reads the file
export const getSourceOfFile = (path: string) => {
  return fs.readFileSync(path, 'utf-8');
};
