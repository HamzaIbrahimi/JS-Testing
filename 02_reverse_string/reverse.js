export function reverse(string) {
    let a = string.split('');
    let len = a.length - 1;
    for (let i = 0; i < len / 2; i++) {
        let temp = a[i];
        a[i] = a[len - i];
        a[len - i] = temp;
    }
    return a.join('');
}

console.log(reverse('hello'));
