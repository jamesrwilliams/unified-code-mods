import assert from "assert";
import core from "../lib/core.js";

describe('integration', function () {
  describe('modifications - Update attribute values', function () {
    it('standard element', async function () {
      const inputString = `<h1 data-target="original">Hello world</h1>`;
      const modification = {
        element: "h1",
        operation: {
          type: "properties",
          key: "data-target",
          value: "modified"
        }
      };
      assert.equal(await core(inputString, modification), `<h1 data-target="${modification.operation.value}">Hello world</h1>`);
    });
    it('custom element', async function () {
      const inputString = `<jrw-custom data-target="original">Hello world</jrw-custom>`;
      const modification = {
        element: "h1",
        operation: {
          type: "properties",
          key: "data-target",
          value: "modified"
        }
      };
      assert.equal(await core(inputString, modification), `<jrw-custom data-target="${modification.operation.value}">Hello world</jrw-custom>`);
    });
    // Known failure as it returns `<jrw-custom data-target="modified"></jrw-custom>` not
    // `<jrw-custom data-target="modified" />`
    it.skip('self-closing custom element', async function () {
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
    it('empty element', async function () {
      const inputString = `<link data-target="original" />`;
      const modification = {
        element: "h1",
        operation: {
          type: "properties",
          key: "data-target",
          value: "modified"
        }
      };
      assert.equal(await core(inputString, modification), `<link data-target="${modification.operation.value}">`);
    });
  });
});
