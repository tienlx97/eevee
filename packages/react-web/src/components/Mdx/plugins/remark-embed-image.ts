import { visit } from 'unist-util-visit';
import { Parent, Root } from 'mdast';
import { isNumeric } from '@utilities/index';
const urlPattern = /^(https?:)?\//;
const blobPattern = /^blob:/;

const _404 =
  'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1662134472~exp=1662135072~hmac=c85826f1600add809cf8f88afedc2a291bd7f9d50ec654762efb074bc98ac214';

export const remarkEmbedImage = (option: { imagesSrc?: string[] }) => {
  return (tree: Root) => {
    visit(tree, 'mdxJsxFlowElement', (node: any) => {
      if (node.name === 'PostImage') {
        const item = node.attributes.filter((f: any) => f.name === 'src');
        if (item.length === 1) {
          if (!urlPattern.test(item[0].value)) {
            if (isNumeric(item[0].value)) {
              if (option.imagesSrc) {
                const index = parseInt(item[0].value, 10);
                if (index < option.imagesSrc.length) {
                  try {
                    item[0].value = option.imagesSrc[index];
                  } catch (error) {
                    item[0].value = _404;
                  }
                } else {
                  item[0].value = _404;
                }
              }
            } else {
              item[0].value = _404;
            }
          }
        }
      }
    });
  };
};
