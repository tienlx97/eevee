// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import type { MorePost } from 'typings/my-mdx/index';

function randomDate(start: Date, end: Date) {
  const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [day, month, year].join('/');
}
export const MockMorePostList: MorePost[] = [
  {
    authorImg: faker.image.avatar(),
    authorName: faker.name.findName(),
    postTitle: faker.random.words(12),
    postUrl: '',
    publishDate: randomDate(new Date(2015, 10, 25), new Date(2022, 7, 30)),
  },
  {
    authorImg: faker.image.avatar(),
    authorName: faker.name.findName(),
    postTitle: faker.random.words(10),
    postUrl: '',
    publishDate: randomDate(new Date(2015, 10, 25), new Date(2022, 7, 30)),
  },
  {
    authorImg: faker.image.avatar(),
    authorName: faker.name.findName(),
    postTitle: faker.random.words(12),
    postUrl: '',
    publishDate: randomDate(new Date(2015, 10, 25), new Date(2022, 7, 30)),
  },
  {
    authorImg: faker.image.avatar(),
    authorName: faker.name.findName(),
    postTitle: faker.random.words(10),
    postUrl: '',
    publishDate: randomDate(new Date(2015, 10, 25), new Date(2022, 7, 30)),
  },
];
