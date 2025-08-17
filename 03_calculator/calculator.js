const Calculator = (() => {
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const multiply = (x, y) => x * y;
    const divide = (x, y) => {
        if (y === 0) throw new Error('division by zero');
        return x / y;
    };
    return { add, subtract, multiply, divide };
})();

export default Calculator;
