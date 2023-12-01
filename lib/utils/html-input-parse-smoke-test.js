import {createElement, Fragment} from 'react';
import {unified} from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from 'rehype-react';

const htmlInputParseSmokeTest = async (doc) => {
  const file = await unified()
    .use(rehypeParse, {
      emitParseErrors: true,
      fragment: true,
      verbose: true,
    })
    .use(rehypeReact, { createElement, Fragment })
    .use()
    .process(doc);

  return String(file);
}

export default htmlInputParseSmokeTest;
