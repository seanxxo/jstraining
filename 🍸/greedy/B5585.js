const inputStr = () => {
  return require("fs").readFileSync("/dev/stdin").toString().trim();
};

const sol = () => {
  return [500, 100, 50, 10, 5, 1].reduce(
    (pre, point) => {
      let { remain, cnt } = pre;
      while (remain >= point) {
        remain -= point;
        cnt += 1;
      }
      return { remain, cnt };
    },
    { remain: 1000 - inputStr(), cnt: 0 }
  ).cnt;
};

console.log(sol());
