export function getRandomInt(max, pull) {
  let rand = Math.floor(Math.random() * Math.floor(max));
  if (!~pull.indexOf(rand)) {
    return rand;
  }
  return Math.floor(Math.random() * Math.floor(max));
}
