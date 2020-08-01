export const settingsOperations = {
  SHUFFLE: "SWITCH_AUTO_SHUFFLE",
  SCROLL: "SWITCH_AUTO_SCROLL",
  FEATURED: "SWITCH_FEATURED_DISPLAY",
};

export function switchAutoShuffle() {
  return { type: settingsOperations.SHUFFLE };
}

export function switchAutoScroll() {
  return { type: settingsOperations.SCROLL };
}

export function switchFeaturedDisplay() {
  return { type: settingsOperations.FEATURED };
}
