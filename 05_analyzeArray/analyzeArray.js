export default function analyzeArray(arr) {
    if (arr.length === 0) {
        return {};
    }
    return {
        average: arr.reduce((acc, curr) => acc + curr, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
}
