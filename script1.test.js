const addNumbers = require("./script1");
it("Function that add two number and return sum", () => {
  expect(addNumbers(4, 5)).toBe(9);
  expect(addNumbers(4, 5)).not.toBe(10);
});
