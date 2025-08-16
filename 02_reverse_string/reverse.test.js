import { reverse } from './reverse';
test('should reverse a string', () => {
    expect(reverse('hello')).toBe('olleh');
});

test('should reverse any string', () => {
    let str = 'door';
    expect(reverse(str)).toBe('rood');
});

test('empty string should return empty string', () => {
    expect(reverse('')).toBe('');
});
