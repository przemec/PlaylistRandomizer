export const settingsOperations = {
  SHUFFLE: "SWITCH_AUTO_SHUFFLE",
  SCROLL: "SWITCH_AUTO_SCROLL",
  FEATURED: "SWITCH_FEATURED_DISPLAY",
  RESUME: "SWITCH_AUTO_RESUME",
  LOOP: "SWITCH_AUTO_LOOP",
  REFRESH: "SWITCH_REFRESH_ON_LOOP",
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

export function switchAutoResume() {
  return { type: settingsOperations.RESUME };
}

export function switchAutoLoop() {
  return { type: settingsOperations.LOOP };
}

export function switchAutoRefresh() {
  return { type: settingsOperations.REFRESH };
}
