const objectiveCompletionResponder = require("./objectiveCompletionResponder");

function createChestConfig(chestKey, tilesheet) {
  return {
    ...objectiveCompletionResponder,
    animations: {
      objectiveCompleted: {
        frames: [1],
        frameRate: 1,
      },
      objectiveCompleting: {
        frames: [0, 1],
        frameRate: 2,
      },
    },
    spriteSheets: {
      [chestKey]: {
        fileName: tilesheet,
        frameDimensions: {
          width: 24,
          height: 24,
        },
      },
    },
    properties: {
      sprite: {
        useGidAsDefaultFrameIndex: false,
        defaultFrameIndex: 0,
        spriteSheet: chestKey,
        layers: [],
      },
    },
  };
}

module.exports = createChestConfig;
