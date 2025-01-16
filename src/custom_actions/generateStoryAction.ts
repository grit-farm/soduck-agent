import { Action } from "@elizaos/core";

export const generateStoryAction: Action = {
  name: "GENERATE_STORY",
  description: "Generates a short romantic story based on given prompts.",
  similes: ["WRITE_STORY"],
  validate: async (runtime, message) => {
    return true;
  },
  handler: async (runtime, message) => {
    return `Here is your story: random beautiful love story.`;
  },
  suppressInitialMessage: false,
  examples: [
    [
      {
        user: "Can you write a story about love at first sight?",
        content: {
          text: "It was a sunny afternoon at the park where their eyes met for the first time...",
        },
      },
      {
        user: "Tell me a story about a reunion under the stars.",
        content: {
          text: "Beneath the glittering constellations, two souls reunited after years apart...",
        },
      },
    ],
  ],
};
