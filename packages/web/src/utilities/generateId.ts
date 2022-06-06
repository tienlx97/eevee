export const sampleOne = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const sample = (arr: string[], len = 1) => {
  const output = [];

  for (let i = 0; i < len; i++) {
    output.push(sampleOne(arr));
  }

  return output;
};

export const generateId = (len = 4) => {
  const characters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  return sample(characters, len).join('');
};
