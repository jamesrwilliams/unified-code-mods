import html from "../../src/lib/modifers/html";

test('HTML', function () {
  test('#parseHtml()', function () {
    it('should be the same as the input for regular HTML', async function () {
      const inputString = `<h1>Hello world</h1>`
      expect(await html(inputString)).toEqual(inputString);
    });

    it('should be the same as the input for regular JSX', async function () {
      const inputString = `<my-custom-elm>Hello world</my-custom-elm>`
      expect(await html(inputString)).toEqual(inputString);
    });

    it('should be the same as the input for self-closing tags', async function () {
      const inputString = `<my-custom-elm feature="foo" />`
      expect(await html(inputString)).toEqual(inputString);
    });
  });
});
