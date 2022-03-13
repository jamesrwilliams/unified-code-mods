import attributeModifier from "../../../../lib/modfiers/attributes.js";
import { expect } from "chai";

import {basicNode, noAttributeNode} from '../../../common/ast-nodes.js';
import toNode from "../../../../lib/utils/generateAstNode.js";

describe('modifiers.html.attributes', function () {

  // CREATE for single and multipart (Can create more than one value at a time)
  // UPDATE for single and multipart (One Update per action)
  // DELETE for single and multipart ()

  // - single = attributes that only allow one option
  // - multipart = Attributes that can have multiple values for a given key (think <class="" />)

  it('should throw an error if the action is invalid', async function() {
    const subjectNode = await toNode('<div data-example="foo" />');
    expect(attributeModifier(subjectNode, 'FOO')).to.throw;
  });

  it('should not fail if the node has no attributes', async function () {
    const basicNode = await toNode('<div />');
    expect(attributeModifier(basicNode, 'UPDATE', 'data-example', 'foo', 'bar')).to.eql(basicNode);
  });

  it('should no throw an error if the element has no attribute', async function() {
    it('should throw an error if the action is invalid', async function() {
      const subjectNode = await toNode('<div />');
      expect(attributeModifier(subjectNode, 'FOO')).to.eql(subjectNode);
    });
  });

    it('should change the "class" to "className" when used as a key', async function () {
      const startingNode = await toNode(`<div class="foo" />`);
      const expectedNode = await toNode('<div class="bar" />')

      expect(attributeModifier(startingNode, 'UPDATE', 'class', 'foo', 'bar')).to.eql(expectedNode);
    });

    // TODO Multi class attributes are destructed to arrays whereas objects are kept as a space
    //  separated string..
    it('should change the "data-example" to "dataExample" when used as a key', async function () {
      const startingNode = await toNode(`<div data-example="foo" />`);
      const expectedNode = await toNode('<div data-example="bar" />')

      expect(attributeModifier(startingNode, 'UPDATE', 'data-example', 'foo', 'bar')).to.eql(expectedNode);
    });

    it('should change the "data-example" to "dataExample" when used as a key in a multi-value' +
      ' attribute', async function () {
      const startingNode = await toNode(`<div data-example="ham foo" />`);
      const expectedNode = await toNode('<div data-example="ham bar" />')

      expect(attributeModifier(startingNode, 'UPDATE', 'data-example', 'foo', 'bar')).to.eql(expectedNode);
    });

    // TODO Something funky going on with attributeModifier for this test...
    it.skip('update multipart attribute: srcset', async function () {
      const originalValue = `image-a-1x.png 1x, image-a-2x.png 2x, image-a-3x.png 3x, image-a-4x.png 4x`;
      const updatedValue = `image-b-1x.png 1x, image-b-2x.png 2x, image-b-3x.png 3x, image-b-4x.png 4x`;

      const startingNode = await toNode(`<img src="image-src.png" srcset="${originalValue}" />`);
      const expectedNode = await toNode(`<img src="image-src.png" srcset="${updatedValue}" />`);

      expect(attributeModifier(startingNode, 'UPDATE', 'srcset', '', updatedValue)).to.eql(expectedNode);
    });

    it('testing other attribute return values (script integrity)', async function () {
      const startingNode = await toNode(`<script integrity="sha265-xxxx" />`);
      const expectedNode = await toNode('<script integrity="sha265-yyyy" />')

      expect(attributeModifier(startingNode, 'UPDATE', 'integrity', 'sha265-xxxx', 'sha265-yyyy')).to.eql(expectedNode);
    });

});
