export default function caesarCipher(str, factor) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let a = str.split('');
    let isUpperCase = (char) => char === char.toUpperCase();
    function shift(char) {
        if (/[A-Za-z]/.test(char)) {
            let count = 0;
            let charIndex = alphabet.findIndex((x) => char.toLowerCase() === x);
            for (let i = charIndex; i <= alphabet.length; i++) {
                if (i === alphabet.length) {
                    i = 0;
                }
                if (count === factor) {
                    let shifted = isUpperCase(char)
                        ? alphabet[i].toUpperCase()
                        : alphabet[i];
                    return shifted;
                }
                count++;
            }
        }
        return char;
    }
    return a.map((x) => shift(x)).join('');
}
