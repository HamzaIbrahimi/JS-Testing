import { reverse } from './reverse';
test('should reverse a string', () => {
    expect(reverse('hello')).toBe('olleh');
});

test('should reverse any string', () => {
    let str = 'abcd';
    expect(reverse(str)).toBe('dcba');
});

test('empty string should return empty string', () => {
    expect(reverse('')).toBe('');
});
test('one letter should return the same letter', () => {
    expect(reverse('b')).toBe('b');
});

test('two letters should also reverse', () => {
    expect(reverse('do')).toBe('od');
});

test('reverse odd length strings', () => {
    expect(reverse('doe')).toBe('eod');
});

test('ignore spaces', () => {
    expect(reverse('hello world')).toBe('dlrow olleh');
});
