const findNames = require("./script2");
const dbMockup = [
  "Kamron Rhodes",
  "Angelina Frank",
  "Bailee Larsen",
  "Joel Merritt",
  "Mina Ho",
  "Lily Hodge",
  "Alisha Solomon",
  "Frank Ho",
  "Cassidy Holder",
  "Mina Norman",
  "Lily Blair",
  "Adalyn Strong",
  "Lily Norman",
  "Minari Hiroko",
  "John Li",
  "May Li",
];
describe("function that finds the names which match the search term in dateBase", () => {
  it("Expect the result", () => {
    // 0 this should empty if term does not exits in db
    expect(findNames("victor", dbMockup)).toEqual([]);
    // 1 Return search result
    expect(findNames("Frank", dbMockup)).toEqual([
      "Angelina Frank",
      "Frank Ho",
    ]);
  });
  // 2 Return length result 3 when have result have more 3 name
  it("Should not return more than 3 result", () => {
    expect(findNames("Li", dbMockup).length).toEqual(3);
  });
  it("this should not handle when term null or undefined", () => {
    // 3 search when search null => []
    expect(findNames(null, dbMockup)).toEqual([]);
    // 4 search when search undefine => []
    expect(findNames(undefined, dbMockup)).toEqual([]);
  });
  // 5 search is case sensitive
  it("The search is sensitive", () => {
    expect(findNames("li", dbMockup)).toEqual([
      "Angelina Frank",
      "Alisha Solomon",
    ]);
  });
});
