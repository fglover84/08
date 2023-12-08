import { calculateSteps } from "../src/calculateSteps";
// import { instructions, network } from "./inputData";

test("1", () => {
  const instructions = "RL";
  const network = {
    AAA: ["BBB", "CCC"],
    BBB: ["DDD", "EEE"],
    CCC: ["ZZZ", "GGG"],
    DDD: ["DDD", "DDD"],
    EEE: ["EEE", "EEE"],
    GGG: ["GGG", "GGG"],
    ZZZ: ["ZZZ", "ZZZ"],
  };

  const result = calculateSteps(instructions, network);
  expect(result).toEqual(2);
});

test("2", () => {
  const instructions = "LLR";
  const network = {
    AAA: ["BBB", "BBB"],
    BBB: ["AAA", "ZZZ"],
    ZZZ: ["ZZZ", "ZZZ"],
  };
  const result = calculateSteps(instructions, network);
  expect(result).toEqual(6);
});

test("2", () => {
  const instructions = "LLR";
  const network = {
    AAA: ["BBB", "BBB"],
    BBB: ["AAA", "ZZZ"],
    ZZZ: ["ZZZ", "ZZZ"],
  };
  const result = calculateSteps(instructions, network);
  expect(result).toEqual(6);
});
