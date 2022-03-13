import { visit } from 'unist-util-visit'

/**
 * AST Unified Plugin Entry
 *
 * @description Parse the modification request and make changes to the AST
 * @see https://unifiedjs.com/learn/guide/create-a-plugin/
 *
 * @returns {(function(*, *): void)|*}
 */
export default function debugInterceptor() {
  return (tree, file) => {
    visit(tree, (node) => {
      if(node.type === 'root') return;
      console.log(JSON.stringify(node, null, 2))
      console.log('---');
    });
  }
}

const camelize = s => s.replace(/-./g, x=>x[1].toUpperCase());
