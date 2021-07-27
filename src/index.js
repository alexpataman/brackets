module.exports = function check(str, bracketsConfig) {
  let bracketsPairs = bracketsConfig.reduce((acc, el) => (acc[el[0]] = el[1], acc), {})
  let stack = [];
  for (let item of str) {
    if (item === bracketsPairs[stack[stack.length - 1]]) {
      stack.pop();
    } else if (bracketsPairs[item]) {
      stack.push(item);
    } else {
      return false;
    }
  }
  return !stack.length;
}
