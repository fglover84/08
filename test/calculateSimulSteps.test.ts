import { calculateSimulSteps } from "../src/calculateSimulSteps";

test("1", () => {
  const instructions = "LR";
  const network = {
    "11A": ["11B", "XXX"],
    "11B": ["XXX", "11Z"],
    "11Z": ["11B", "XXX"],
    "22A": ["22B", "XXX"],
    "22B": ["22C", "22C"],
    "22C": ["22Z", "22Z"],
    "22Z": ["22B", "22B"],
    XXX: ["XXX", "XXX"],
  };

  const result = calculateSimulSteps(instructions, network);
  expect(result).toEqual(6);
});
