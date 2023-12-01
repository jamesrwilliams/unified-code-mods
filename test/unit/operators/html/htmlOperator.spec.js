import {expect} from "chai";
import htmlOperator from "../../../../lib/operators/html/html.operator.js";

describe('an operator', function () {
  it('should do the thing', async () => {
    const input = `<div><h1>Winning</h1></div>`;
    const output = `<div><h1 data-target="dogs are the best">Winning</h1></div>`;

    // Due to the way AST selectors work there is going to be a lot of heavy lifting in
    // making this `target` selector work as we want it to (think DOM selector)

    // Need a way to transpose from DOM selector into AST parseable filter
    const result = await htmlOperator(input, {
      target: "element h1",
      operation: {
        type: "attributes",
        action: 'CREATE',
        key: "data-target",
        updatedValue: "dogs are the best",
        originalValue: ""
      }
    });

    expect(result).to.eql(output);
  });
});
