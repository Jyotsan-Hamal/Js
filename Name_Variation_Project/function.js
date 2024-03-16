// function.js
export function getNumberOfChars(name) {
    return name.length;
}

export function getFirstChar(name) {
    return name[0];
}

export function getLastChar(name) {
    return name.slice(-1);
}

export function getLower(name) {
    return name.toLowerCase();
}

export function getUpper(name) {
    return name.toUpperCase();
}

export function copitalize(name) {
    let words = name.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}
