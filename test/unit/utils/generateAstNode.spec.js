import { expect } from "chai";

import { toNode } from '../../../lib/utils/generateAstNode.js';

describe('Utilities', () => {
  describe('generateAstNode', function() {
  it('should create an empty node', async function () {
    const result = await toNode('<div />');

    expect(result).to.deep.eq({
      "children": [],
      "data": {
        "position": {
          "closing": null,
          "opening": {
            "end": {
              "column": 8,
              "line": 1,
              "offset": 7
            },
            "start": {
              "column": 1,
              "line": 1,
              "offset": 0
            }
          },
          "properties": {}
        }
      },
      "position": {
        "end": {
          "column": 8,
          "line": 1,
          "offset": 7
        },
        "start": {
          "column": 1,
          "line": 1,
          "offset": 0
        }
      },
      "properties": {},
      "tagName": "div",
      "type": "element"
    });
  });

  it('should create a node with a single attribute', async function () {
    const result = await toNode('<div data-attribute="foo" />');

    expect(result).to.deep.eq({
      "children": [],
      "data": {
        "position": {
          "closing": null,
          "opening": {
            "end": {
              "column": 29,
              "line": 1,
              "offset": 28
            },
            "start": {
              "column": 1,
              "line": 1,
              "offset": 0
            }
          },
          "properties": {
            "dataAttribute": {
              "end": {
                "column": 26,
                "line": 1,
                "offset": 25
              },
              "start": {
                "column": 6,
                "line": 1,
                "offset": 5
              }
            }
          }
        }
      },
      "position": {
        "end": {
          "column": 29,
          "line": 1,
          "offset": 28
        },
        "start": {
          "column": 1,
          "line": 1,
          "offset": 0
        }
      },
      "properties": {
        "dataAttribute": "foo"
      },
      "tagName": "div",
      "type": "element"
    });
  });
});
});
