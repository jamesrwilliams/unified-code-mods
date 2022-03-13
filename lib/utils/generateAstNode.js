import {unified} from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import {createElement, Fragment} from "react";

export const toNode = async (htmlString) => {

  let rawAst;

  await unified()
    .use(rehypeParse, {
      emitParseErrors: true,
      fragment: true,
      verbose: true,
    })
    .use(rehypeReact, { createElement, Fragment })
    .use(() => {
      return (tree, file) => {
        rawAst = tree;
      }
    })
    .process(htmlString);

  const output = rawAst.children.pop();

  return JSON.parse(JSON.stringify(output));
}

export default toNode;
