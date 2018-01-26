export function count_q(json) {
  return +Object.keys(json[json.length - 1])[0];
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
