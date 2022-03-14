import { visit } from 'unist-util-visit'
import attributes from "./modfiers/attributes.js";

/**
 * AST Unified Plugin Entry
 *
 * @description Parse the modification request and make changes to the AST
 * @see https://unifiedjs.com/learn/guide/create-a-plugin/
 *
 * @param opts
 * @returns {(function(*, *): void)|*}
 */
export default function interceptor(opts) {
  const { options } = opts;

  return (tree, file) => {

    visit(tree, opts.element, (node) => {
       let prop = camelize(options.operation.key);
       if(!prop) return;
       if(node.hasOwnProperty('properties') && node.properties[prop]) {
         node.properties[prop] = options.operation.value;
       }
       node = null;
    });
  }
}

const camelize = s => s.replace(/-./g, x=>x[1].toUpperCase());
