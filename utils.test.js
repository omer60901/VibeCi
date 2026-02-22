const { add, subtract, multiply, divide, isPalindrome, capitalize } = require("../../src/utils");

describe("Math Utilities", () => {
  describe("add()", () => {
    test("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    test("adds negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
    });

    test("adds zero", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("subtract()", () => {
    test("subtracts two numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test("result can be negative", () => {
      expect(subtract(3, 10)).toBe(-7);
    });
  });

  describe("multiply()", () => {
    test("multiplies two numbers", () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test("multiply by zero returns zero", () => {
      expect(multiply(100, 0)).toBe(0);
    });
  });

  describe("divide()", () => {
    test("divides two numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });

    test("throws error when dividing by zero", () => {
      expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });

    test("handles decimal results", () => {
      expect(divide(1, 4)).toBe(0.25);
    });
  });
});

describe("String Utilities", () => {
  describe("isPalindrome()", () => {
    test("detects a palindrome", () => {
      expect(isPalindrome("racecar")).toBe(true);
    });

    test("detects non-palindrome", () => {
      expect(isPalindrome("hello")).toBe(false);
    });

    test("ignores spaces and casing", () => {
      expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    });
  });

  describe("capitalize()", () => {
    test("capitalizes first letter", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    test("lowercases the rest", () => {
      expect(capitalize("hELLO")).toBe("Hello");
    });

    test("handles empty string", () => {
      expect(capitalize("")).toBe("");
    });
  });
});
