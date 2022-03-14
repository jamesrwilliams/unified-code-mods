import {unified} from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import {createElement, Fragment} from "react";
import debugInterceptor from "../lib/interceptors/debug.js";

/**
 * USED TO GENERATE SIMPLE NODES FOR OUR TESTS
 * @param input
 * @returns {Promise<string>}
 */
const generateAstNode = async (input) => {
  const file = await unified()
    .use(rehypeParse, {
      emitParseErrors: true,
      fragment: true,
      verbose: true,
    })
    .use(rehypeReact, { createElement, Fragment })
    .use(debugInterceptor)
    .process(input);

    return String(file);
}

generateAstNode('<div class="bg-blue">An empty node</div>');
