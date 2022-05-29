module.exports = function check(str, bracketsConfig) {
    const matrix = Object.fromEntries(bracketsConfig);
    let stack = [str[0]];

    for (let i = 1; i < str.length; i++) {
        (str[i] === matrix[stack[stack.length - 1]]) ? stack.pop() : stack.push(str[i]);
    }

    return (!stack.length)
}
