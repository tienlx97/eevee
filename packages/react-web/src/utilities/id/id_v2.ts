const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

export function toId(segment: string) {
  let char;
  let id = 0;
  for (let i = 0; i < segment.length; i++) {
    char = segment[i];
    id = id * 64 + alphabet.indexOf(char);
  }
  return id;
}

export function toSegment(ID: string) {
  let id = parseInt(ID, 10);
  const base = alphabet.length;
  let short = '';
  while (id) {
    const index = id % base;
    id = (id - index) / base;
    short = alphabet[index] + short;
  }

  return short;
}
