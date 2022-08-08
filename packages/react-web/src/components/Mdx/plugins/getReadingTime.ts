import calculateReadingTime from 'reading-time';

export const getReadingTime = (readingArr: any) => {
  const readingText = readingArr.reduce((str: string, curr: any) => (str += `${curr} `), '');
  const readTime = calculateReadingTime(readingText);
  return readTime;
};
