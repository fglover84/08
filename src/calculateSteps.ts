import { instructions, network } from "./inputData";

// const instructions = ["R", "L"];
// const network = {
//   AAA: ["BBB", "CCC"],
//   BBB: ["DDD", "EEE"],
//   CCC: ["ZZZ", "GGG"],
//   DDD: ["DDD", "DDD"],
//   EEE: ["EEE", "EEE"],
//   GGG: ["GGG", "GGG"],
//   ZZZ: ["ZZZ", "ZZZ"],
// };

export const calculateSteps = (
  instructions: string,
  network: { [key: string]: string[] }
) => {
  const instructionIndexes = convertInstructionsToIndex(instructions);
  console.log({ instructionIndexes });
  const end: string = "ZZZ";

  let currentNode: string = "AAA";
  let count = 0;

  while (currentNode !== end) {
    for (let eachInstruction of instructionIndexes) {
      currentNode = network[currentNode][eachInstruction];
      count++;
      console.log(currentNode);
    }
  }
  console.log({ count });
  return count;
};

const convertInstructionsToIndex = (instructions: string) => {
  const instructionsArr = instructions.split("");
  return instructionsArr.map((instruction: string) => {
    return instruction === "L" ? 0 : 1;
  });
};

calculateSteps(instructions, network);
