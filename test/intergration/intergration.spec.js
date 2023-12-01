import assert from "assert";
import core from "../../lib/core.js";

describe('Integration', function () {
  describe('modifications - Update attribute values', function () {
    it('standard element', async function () {
      const inputString = `<h1 data-target="original">Hello world</h1>`;
      const modification = {
        element: "*",
        operation: {
          type: "properties",
          key: "data-target",
          value: "modified"
        }
      };
      debugger;
      assert.equal(await core(inputString, modification), `<h1 data-target="${modification.operation.value}">Hello world</h1>`);
    });
    it('void element', async function () {
      const inputString = `<link data-target="original" />`;
      const modification = {
        element: "h1",
        operation: {
          type: "properties",
          key: "data-target",
          value: "modified"
        }
      };
      const result = await core(inputString, modification);
      console.log(result);
      assert.equal(result, `<link data-target="${modification.operation.value}">`);
    });
    it('custom element', async function () {
      const inputString = `<jrw-custom data-target="original">Hello world</jrw-custom>`;
      const modification = {
        element: "h1",
        operation: {
          type: "attribute",
          action: 'update',
          key: "data-target",
          value: "modified"
        }
      };
      assert.equal(await core(inputString, modification), `<jrw-custom data-target="${modification.operation.value}">Hello world</jrw-custom>`);
    });
    // Known failure as it returns `<jrw-custom data-target="modified"></jrw-custom>` not
    // `<jrw-custom data-target="modified" />`
    it.skip('custom element (void element)', async function () {
      const inputString = `<jrw-custom data-target="original" />`;
      const modification = {
        element: "h1",
        operation: {
          type: "properties",
          key: "data-target",
          value: "modified"
        }
      };
      assert.equal(await core(inputString, modification), `<jrw-custom data-target="${modification.operation.value}" />`);
    });
  });
});
