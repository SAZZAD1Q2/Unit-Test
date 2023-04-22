const reverseString = require("./reverseString");

describe("reverseString", () => {
  test("reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("throws an error if the input string is empty", () => {
    expect(() => {
      reverseString("");
    }).toThrow("Input string must be at least 1 character long");
  });

  test("throws an error if the input string is too long", () => {
    expect(() => {
      reverseString("12345678901");
    }).toThrow("Input string must not be longer than 10 characters");
  });
});
