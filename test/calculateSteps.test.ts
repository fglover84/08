import { calculateSteps } from "../src/calculateSteps";

test("1", () => {
  const instructions = ["R", "L"];
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

// test("2", () => {
//   const result = calculateSteps();
//   expect(result).toEqual(6);
// });
