const addNum = require("../src/add");

test("1 + 1 = 2", () => {
  expect(addNum(1, 1)).toBe(2);
});
