import { visit } from 'unist-util-visit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Parent, Root } from 'mdast';

const urlPattern = /^(https?:)?\//;
const blobPattern = /^blob:/;

export const remarkEmbedImage = () => {
  return (tree: any) => {
    visit(tree, 'mdxJsxFlowElement', (node, index: number | null, parent: Parent | null) => {
      if (node.name === 'PostImage') {
        node.attributes[0].value = '1';
      }
    });
  };
};
