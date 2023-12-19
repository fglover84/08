import { instructions, network } from "./inputData";

export const calculateSteps = async (
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
