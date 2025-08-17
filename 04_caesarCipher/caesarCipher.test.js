import caesarCipher from './caesarCipher';

test('caesarCipher is defined', () => {
    expect(caesarCipher).toBeDefined();
});
test('caesarCipher of string abc should be def', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});
test('caesarCipher of string abc should be def', () => {
    expect(caesarCipher('abc', 5)).toBe('fgh');
});
test('caesarCipher of xyz should be abc with argument 3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});
test('caesarCipher preservers case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
test('caesarCipher with a factor of zero should return the same string', () => {
    expect(caesarCipher('hello', 0)).toBe('hello');
});
