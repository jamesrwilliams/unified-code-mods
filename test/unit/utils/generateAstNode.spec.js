import { expect } from "chai";

import { toNode } from '../../../lib/utils/generateAstNode.js';

describe('Utilities', () => {
  describe('generateAstNode', function() {
  it('should create an empty node', async function () {
    const result = await toNode('<div />');

    expect(result).to.deep.eq({
      "children": [],
      "data": {},
      "properties": {},
      "tagName": "div",
      "type": "element"
    });
  });

  it('should create a node with a single attribute', async function () {
    const result = await toNode('<div data-attribute="foo" />');

    expect(result).to.deep.eq({
      "children": [],
      "data": {},
      "properties": {
        "dataAttribute": "foo"
      },
      "tagName": "div",
      "type": "element"
    });
  });
});
});
