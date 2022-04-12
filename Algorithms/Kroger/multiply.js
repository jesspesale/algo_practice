function multiply(x, y) {
  if (x === 1) return y;
  if (y === 1) return x;
  if (x === 0 || y === 0) return 0;

  let sum = 0;

  if (x > 0 && y > 0) {
    return x + multiply(x, y - 1);
  } else if (y < 0) {
    // debugger
    y = -y;
    sum = x + multiply(x, y - 1);
    return -sum;
  } else if (x < 0) {
    x = -x;
    sum = x + multiply(x, y - 1);
    return -sum;
  }
}

multiply(1, -5);



