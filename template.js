console.log("start");

const inputStr = () => {
  return require("fs").readFileSync("/dev/stdin").toString().trim();
};

const sol = () => {
  return inputStr();
};

console.log(sol());
