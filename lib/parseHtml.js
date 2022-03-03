import {unified} from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";

const parseHtml = async (doc) => {
  const file = await unified()
    .use(rehypeParse, {
      emitParseErrors: true,
      fragment: true,
      verbose: true,
    })
    // .use(() => tree => console.log(JSON.stringify(tree, null, 2)))
    .use(rehypeStringify)
    .process(doc);

  const result = String(file);

  console.log(result);

  return result;
}

export default parseHtml;
