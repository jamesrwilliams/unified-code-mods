import attributeModifier from "../../../../lib/modfiers/attributes.js";
import {expect} from "chai";
import toNode from "../../../../lib/utils/generateAstNode.js";

describe('Modifiers - HTML - Attributes', function () {

  describe('General: Errors', () => {
    it('should throw an error if the action is invalid', async function () {
      const subjectNode = await toNode('<div data-example="foo" />');
      expect(attributeModifier(subjectNode, 'FOO')).to.throw;
    });

    it('should not fail if the node has no attributes', async function () {
      const basicNode = await toNode('<div />');
      expect(attributeModifier(basicNode, 'UPDATE', 'data-example', 'foo', 'bar')).to.eql(basicNode);
    });

    it('should no throw an error if the element has no attribute', async function () {
      it('should throw an error if the action is invalid', async function () {
        const subjectNode = await toNode('<div />');
        expect(attributeModifier(subjectNode, 'FOO')).to.eql(subjectNode);
      });
    });
  });

  describe('Actions: UPDATE', () => {

    describe('Class Attributes (Arrays)', () => {
      it('should UPDATE the "class" to "className" when used as a key', async function () {
        const startingNode = await toNode(`<div class="foo" />`);
        const expectedNode = await toNode('<div class="bar" />')

        expect(attributeModifier(startingNode, 'UPDATE', 'class', 'foo', 'bar')).to.eql(expectedNode);
      });

      it('should UPDATE the "class" to "className" when used as a key (multipart)', async function () {
        const startingNode = await toNode(`<div class="dog foo cat" />`);
        const expectedNode = await toNode('<div class="dog bar cat" />')

        expect(attributeModifier(startingNode, 'UPDATE', 'class', 'foo', 'bar')).to.eql(expectedNode);
      });
    });

    describe('Data Attributes (Objects)', () => {
      it('should update a single value data-attribute', async function () {
        const startingNode = await toNode(`<div data-example="foo" />`);
        const expectedNode = await toNode('<div data-example="bar" />')

        expect(attributeModifier(startingNode, 'UPDATE', 'data-example', 'foo', 'bar')).to.eql(expectedNode);
      });

      it('should update a single part of a multi-value data-attribute', async function () {
        const startingNode = await toNode(`<div data-example="dog foo cat" />`);
        const expectedNode = await toNode('<div data-example="dog bar cat" />')

        expect(attributeModifier(startingNode, 'UPDATE', 'data-example', 'foo', 'bar')).to.eql(expectedNode);
      });
    });

    describe('Misc HTML Attributes (Object)', () => {

      // TODO Something funky going on with attributeModifier for this test...
      it.skip('should update a whole multi-part "srcset" attribute', async function () {
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
  });

  describe('Actions: CREATE', () => {
    it.skip('should create a class attribute on an element', () => {});
    it.skip('should create a data-attribute on an element', () => {});
    it.skip('should create a misc html attribute on an element', () => {});
    it.skip('should handle collisions gracefully', () => {})
  });

  describe('Actions: DELETE', function () {
    it.skip('should delete a class value from an element', () => {});
    it.skip('should delete a single value from a multi-class declaration', () => {});
    it.skip('should delete a data-attribute from an element', () => {})
    it.skip('should delete a single value from a multi-attribute declaration', () => {});
  });
});
