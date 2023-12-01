import {unified} from "unified";
import rehypeParse from "rehype-parse";
import htmlProcessor from "./html.processor.js";
import rehypeReact from "rehype-react";
import {createElement, Fragment} from "react";
import rehypeStringify from "rehype-stringify";

const htmlOperator = async (fileContents, modification) => {

  const file = await unified()
    .use(rehypeParse, {
      emitParseErrors: true,
      fragment: true,
      verbose: true,
    })
    .use(htmlProcessor, { options: modification })
    .use(rehypeReact, { createElement, Fragment })
    .use(rehypeStringify)
    .process(fileContents);

  return String(file);
}

export default htmlOperator;
