const formatTime = (l) => {
  let zero = (int) => (int.toString().length === 1 ? `0${int}` : int);
  if (!l) return "000:00:00";
  return `${Math.floor(l / 60 / 60)}:${zero(Math.floor(l / 60) - Math.floor(l / 60 / 60) * 60)}:${zero(
    l - Math.floor(l / 60) * 60
  )}`;
};

export default formatTime;
