const input = `2
contest.txt
context.txt`;

const inputStr = () => {
  return input;
  // return require("fs").readFileSync("/dev/stdin").toString().trim();
};

// String의 한계... Array.map을 대체할 것이 없고 charAt이 못생겼음
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
    .map((filename) => [...filename])
    .reduce((preStr, curStr) =>
      curStr.map((char, i) => (char == preStr[i] ? char : "?"))
    )
    .join("");
};

console.log(solWithArr());
