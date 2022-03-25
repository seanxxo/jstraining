// C1

const cycle = ["_"];

const getCycle = (n) => {
  if (!cycle[n]) {
    let cnt = 1;
    let tmpN = n;
    while (tmpN !== 1) {
      cnt++;
      tmpN = tmpN % 2 === 0 ? tmpN / 2 : tmpN * 3 + 1;
    }
    cycle[n] = cnt;
  }
  return cycle[n];
};

const findMax = (i, j) => {
  if (typeof i !== Number) i = Number(i);
  if (typeof j !== Number) j = Number(j);
  let max = Number.MIN_SAFE_INTEGER;
  while (i !== j) {
    if (getCycle(i) > max) max = getCycle(i);
    i++;
  }
  return max;
};

const C1 = (input) => {
  const [i, j] = input.split(" ");
  return `${i} ${j} ${findMax(i, j)}`;
};

["1 10", "100 200", "201 210", "900 1000"].forEach((input) => {
  console.log(C1(input));
});

// B14920

const inputStr = () => {
  return require("fs").readFileSync("/dev/stdin").toString().trim();
};

const sol = () => {
  let n = 1;
  let input = Number(inputStr());
  while (input !== 1) {
    input = input % 2 === 0 ? input / 2 : input * 3 + 1;
    n++;
  }
  return n;
};

console.log(sol());
