export const playerOperations = {
  SET_PLAYER: "SET_PLAYER",
  SET_IS_PLAYER_LOADED: "SET_IS_PLAYER_LOADED",
  CLEAR_PLAYER: "CLEAR_PLAYER",
};

export function setPlayer(player) {
  return { type: playerOperations.SET_PLAYER, player };
}

export function setIsPlayerLoaded(value) {
  return { type: playerOperations.SET_IS_PLAYER_LOADED, value };
}

export function clearPlayer() {
  return { type: playerOperations.CLEAR_PLAYER };
}

