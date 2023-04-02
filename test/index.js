const assert = require("assert");
const fizzBuzz = require("../index");

describe("fizzbuzz", () => {
  it("returns FizzBuzz when value is divisible by 15", () => {
    assert(fizzBuzz(30) === "FizzBuzz");
  });
  it("returns FizzBuzz when value is divisible by 3", () => {
    assert(fizzBuzz(9) === "Fizz");
  });
  it("returns FizzBuzz when value is divisible by 5", () => {
    assert(fizzBuzz(10) === "Buzz");
  });
  it("returns FizzBuzz when value is not divisible by 3 or 5", () => {
    assert(fizzBuzz(7) === "7");
  });
});
