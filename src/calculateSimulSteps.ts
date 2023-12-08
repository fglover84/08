import { instructions, network } from "./inputData";

// const instructions = "LR"
// const network = {
// 11A: ["11B", "XXX"]
// 11B: ["XXX", "11Z"]
// 11Z: ["11B", "XXX"]
// 22A: ["22B", "XXX"]
// 22B: ["22C", "22C"]
// 22C: ["22Z", "22Z"]
// 22Z: ["22B", "22B"]
// XXX: ["XXX", "XXX"]
// };
let count = 0;
let currentNodes: string[];

async function processInstruction(
  instructionIndexes: number[],
  network: { [key: string]: string[] },
  currentNode: string
) {
  currentNodes.push(
    await calculateCurrentNode(instructionIndexes, network, currentNode)
  );
}

export const calculateSimulSteps = async (
  instructions: string,
  network: { [key: string]: string[] }
) => {
  const instructionIndexes = convertInstructionsToIndex(instructions);
  console.log({ instructionIndexes });

  currentNodes = getStartingNodes(Object.keys(network));
  let promises = [];

  while (!endNodesFound(currentNodes)) {
    for (let currentNode of currentNodes) {
      promises.push(
        processInstruction(instructionIndexes, network, currentNode)
      );
    }
    console.log({ count });
    await Promise.all(promises);
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

const getStartingNodes = (networkKeys: string[]) => {
  const startPattern = /.*A$/;
  return networkKeys.filter((key) => startPattern.test(key));
};

const endNodesFound = (nodes: string[]) => {
  const endPattern: RegExp = /.*Z$/;
  return nodes.every((node) => endPattern.test(node));
};

const calculateCurrentNode = async (
  instructionIndexes: number[],
  network: { [key: string]: string[] },
  currentNode: string
) => {
  for (let eachInstruction of instructionIndexes) {
    currentNode = network[currentNode][eachInstruction];
    count++;
  }
  return currentNode;
};

calculateSimulSteps(instructions, network);
