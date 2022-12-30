export default function getMinJump(obstacles) {
  let jumpLength = 0;
  for (let jump = 1; jump < 11; jump++) {
    let length = 0;
    let isValid = true;

    while (length < 10) {
      length += jump;
      if (obstacles.includes(length)) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      jumpLength = jump;
      break;
    }
  }

  return jumpLength;
}
