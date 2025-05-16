// utils/featureLoader.js
import * as features from "../features/index.js";

export const loadFeatures = async (bot) => {
  Object.values(features).forEach((feature) => {
    if (typeof feature === "function") {
      feature(bot); // Injects the bot instance into each command
    }
  });
};
