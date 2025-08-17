import analyzeArray from './analyzeArray';

test('analyzeArray function should be defined', () => {
    expect(analyzeArray).toBeDefined();
});

test('should return an object if the array is empty', () => {
    let arr = [];
    expect(analyzeArray(arr)).toEqual({});
});

test('should return an object with four keys', () => {
    let array = [1];
    let o = analyzeArray(array);
    let len = Object.keys(o).length;
    expect(len).toBe(4);
});

test('should return the correct information', () => {
    let array = [1, 2, 3];
    expect(analyzeArray(array)).toEqual({
        average: 2,
        max: 3,
        min: 1,
        length: 3,
    });
});
test('should return the correct information', () => {
    let array = [1, 8, 3, 4, 2, 6];
    expect(analyzeArray(array)).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
