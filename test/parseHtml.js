import assert from "assert";
import parseHtml from "../lib/parseHtml.js";

describe('HTML', function () {
  describe('#parseHtml()', function () {
    it('should be the same as the input for regular HTML', async function () {
      const inputString = `<h1>Hello world</h1>`
      assert.equal(await parseHtml(inputString), inputString);
    });

    it('should be the same as the input for regular JSX', async function () {
      const inputString = `<my-custom-elm>Hello world</my-custom-elm>`
      assert.equal(await parseHtml(inputString), inputString);
    });

    it('should be the same as the input for self-closing tags', async function () {
      const inputString = `<my-custom-elm feature="foo" />`
      assert.equal(await parseHtml(inputString), inputString);
    });
  });
});
