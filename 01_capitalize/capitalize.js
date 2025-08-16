export function capitalize(string) {
    if (string.length === 0) return '';
    return string.at(0).toUpperCase() + string.slice(1);
}
