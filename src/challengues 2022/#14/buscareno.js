export default function missingReindeer(ids) {
  let idsSum = ids.reduce((a, b) => a + b, 0);
  let idlength = (ids.length * (ids.length + 1)) / 2;
  return idlength - idsSum;
}
