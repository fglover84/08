import { instructions, network } from "./inputData";

type NodeMap = { [key: string]: [string, string] };

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

function findPathLength(
  nodeMap: NodeMap,
  startNode: string,
  instructions: string
): number {
  let current = startNode;
  let steps = 0;

  while (!current.endsWith("Z")) {
    const instruction = instructions[steps % instructions.length];
    current = nodeMap[current][instruction === "L" ? 0 : 1];
    steps++;
  }

  return steps;
}

function findStepsToAllZNodes(nodeMap: NodeMap, instructions: string): number {
  const startingNodes = Object.keys(nodeMap).filter((node) =>
    node.endsWith("A")
  );
  let pathLengths = startingNodes.map((node) =>
    findPathLength(nodeMap, node, instructions)
  );
  return pathLengths.reduce(lcm);
}

console.log(findStepsToAllZNodes(network, instructions)); // Output: Number of steps
