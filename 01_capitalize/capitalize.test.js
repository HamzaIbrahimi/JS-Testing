import { capitalize } from './capitalize.js';

test('Capitalizes first letter of a string', () => {
    let word = 'hello';
    expect(capitalize(word)).toBe('Hello');
});

test('Works if first letter is capitalized', () => {
    let word = 'Hello';
    expect(capitalize(word)).toBe('Hello');
});

test('Empty String should return empty string', () => {
    expect(capitalize('')).toBe('');
});

test('Capitalizes any string', () => {
    let word = 'mississippi';
    expect(capitalize(word)).toBe('Mississippi');
});
