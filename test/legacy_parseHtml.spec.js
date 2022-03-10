import assert from "assert";
import legacy_parseHtml from "../lib/legacy_parseHtml.js";

describe('First draft behavior tests', function () {
  describe('#legacy_parseHtml()', function () {
    it('should be the same as the input for regular HTML', async function () {
      const inputString = `<h1>Hello world</h1>`
      assert.equal(await legacy_parseHtml(inputString), inputString);
    });

    it('should be the same as the input for regular JSX', async function () {
      const inputString = `<my-custom-elm>Hello world</my-custom-elm>`
      assert.equal(await legacy_parseHtml(inputString), inputString);
    });

    it('should be the same as the input for void elements', async function () {
      const inputString = `<my-custom-elm feature="foo" />`
      assert.equal(await legacy_parseHtml(inputString), inputString);
    });
  });
});
