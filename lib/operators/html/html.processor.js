import { visit } from 'unist-util-visit'
import {select, selectAll, matches} from 'unist-util-select'
import jlog from "../../utils/jlog.js";

export default function htmlProcessor(opts) {
  // console.log(opts);
  const { options: { target, operation } } = opts;

  return (tree, file) => {

    const results = selectAll(target, tree);

    jlog({results});

    // jlog(tree);
    visit(tree, function (node) {
      if(matches(target, node)) {
        console.log('we have a match', node);
      } else {
        console.log(`- Node "${node.type}" is not a match for "${target}"`);
      }
    });
  }
}
