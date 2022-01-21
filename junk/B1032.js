const input = `2
contest.txt
context.txt`;

const inputStr = () => {
  return input;
  // return require("fs").readFileSync("/dev/stdin").toString().trin();
};

const sol = () => {
  return inputStr()
    .split("\n")
    .slice(1)
    .reduce((preStr, curStr) => {
      if (!preStr) return curStr;
      let result = "";
      for (let i = 0; i < curStr.length; i++) {
        result += curStr.charAt(i) == preStr.charAt(i) ? curStr.charAt(i) : "?";
      }
      return result;
    }, "");
};

const solWithArr = () => {
  return inputStr()
    .split("\n")
    .slice(1)
    .map((filename) => filename.split(""))
    .reduce(
      (preArr, curArr) =>
        curArr.map((_, i) => [
          preArr[i] ? (curArr[i] == preArr[i] ? curArr[i] : "?") : curArr[i],
        ]),
      []
    )
    .join("");
};

console.log(sol());
console.log(solWithArr());
