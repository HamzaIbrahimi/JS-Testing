import Calculator from './calculator.js';

test('Ensure calculator Object exists', () => {
    expect(Calculator).toBeDefined();
});

test('can sum two numbers', () => {
    expect(Calculator.add(1, 2)).toBe(3);
});

test('can subtract two numbers', () => {
    expect(Calculator.subtract(3, 2)).toBe(1);
});
test('can multiply two numbers', () => {
    expect(Calculator.multiply(3, 2)).toBe(6);
});
test('can divide two numbers', () => {
    expect(Calculator.divide(4, 2)).toBe(2);
});
test('division by zero should throw an error', () => {
    expect(() => Calculator.divide(5, 0)).toThrow();
});
