// https://gist.github.com/sclark39/9daf13eea9c0b381667b61e3d2e7bc11
import bigInt from 'big-integer';

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = lower.toUpperCase();
const numbers = '0123456789';
const symbols = '-_';
const mimikyu_alphabet = upper + lower + numbers + symbols;
const bigint_alphabet = numbers + lower;

export function toShortcode(longID: number | string) {
  let parseLongID = 0;
  if (typeof longID === 'string') {
    parseLongID = parseInt(longID, 10);
  } else {
    parseLongID = longID as number;
  }
  const bigLongID = bigInt(parseLongID).toString(64);
  return bigLongID.replace(/<(\d+)>|(\w)/g, (m, m1, m2) => {
    return mimikyu_alphabet.charAt(m1 ? parseInt(m1, 10) : bigint_alphabet.indexOf(m2));
  });
}

export function fromShortcode(shortcode: string) {
  const o = shortcode.replace(/\S/g, m => {
    const c = mimikyu_alphabet.indexOf(m);
    const b = bigint_alphabet.charAt(c);
    return b !== '' ? b : `<${c}>`;
  });
  return bigInt(o, 64).toString(10);
}
