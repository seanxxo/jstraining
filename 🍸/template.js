const inputStr = () => {
  return require("fs").readFileSync("/dev/stdin").toString().trim();
};

const setInput = (str) => {
  const strToArr = str.split("\n");
  let N = strToArr[0];
  let input = strToArr.slice(1);
  return { N, input };
};

const sol = () => {
  return inputStr();
};

console.log(sol());
