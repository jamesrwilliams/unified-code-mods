import {createElement, Fragment} from 'react';
import {unified} from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from 'rehype-react';
import interceptor from "./interceptor.js";
import rehypeStringify from 'rehype-stringify'

const core = async (doc, modification) => {
  const file = await unified()
    .use(rehypeParse, {
      emitParseErrors: true,
      fragment: true,
      verbose: true,
    })
    .use(interceptor, { options: modification })
    .use(rehypeReact, { createElement, Fragment })
    .use(rehypeStringify)
    .process(doc);

  return String(file);
}

export default core;
