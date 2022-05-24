import { FrontMatter } from '../types';

export function getMdxContent(): FrontMatter {
  const fm = {
    abstract:
      "As front-end developers, we often learn CSS by focusing on individual properties. Instead, we should focus on how the language uses those properties to calculate layouts. In this blog post, we'll pop the hood on CSS and see how the language is structured, and how to learn it effectively.",
    categorySlug: 'css',
    humanReadableDate: 'March 28th, 2022',
    isPublished: true,
    layout: 'Article',
    pathname: '/css/understanding-layout-algorithms/',
    publishedOn: '2022-03-28T07:00:00-0400',
    shortDate: 'Mar 2022',
    slug: 'understanding-layout-algorithms',
    subtitle: 'The mental model shift that makes CSS more intuitive',
    title: 'Understanding Layout Algorithms',
  } as FrontMatter;

  return fm;
}
