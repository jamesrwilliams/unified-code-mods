import {createElement, Fragment} from 'react';
import {unified} from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from 'rehype-react';

const html = async (input) => {
  const file = await unified()
    .use(rehypeParse, {
      emitParseErrors: true,
      fragment: true,
      verbose: true,
    })
    .use(rehypeReact, { createElement, Fragment })
    .process(input);

  return String(file);
}

export default html;
