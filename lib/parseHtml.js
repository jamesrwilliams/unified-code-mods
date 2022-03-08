import { createElement, Fragment } from 'react';
import {unified} from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from 'rehype-react';

const parseHtml = async (doc) => {
  const file = await unified()
    .use(rehypeParse, {
      emitParseErrors: true,
      fragment: true,
      verbose: true,
    })
    .use(rehypeReact, { createElement, Fragment })
    .process(doc);

  const result = String(file);

  console.log(result);

  return result;
}

export default parseHtml;
