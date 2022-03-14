import assert from "assert";
import htmlInputParseSmokeTest from "../../../lib/utils/html-input-parse-smoke-test.js";

describe('Sanity', () => {
  describe('HTML input parsing', function () {
    it('should be the same as the input for regular HTML', async function () {
      const inputString = `<h1>Hello world</h1>`
      assert.equal(await htmlInputParseSmokeTest(inputString), inputString);
    });

    it('should be the same as the input for regular JSX', async function () {
      const inputString = `<my-custom-elm>Hello world</my-custom-elm>`
      assert.equal(await htmlInputParseSmokeTest(inputString), inputString);
    });

    it('should be the same as the input for void elements', async function () {
      const inputString = `<my-custom-elm feature="foo" />`
      assert.equal(await htmlInputParseSmokeTest(inputString), inputString);
    });
  });
});
