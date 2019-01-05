const sentence = window.prompt('Introduzca el texto que quieres saber si es palindromo');

function isPalindrome(text) {
    if (!text) {
        return false;
    }
    // remove spaces
    let textWithoutSpaces = text.replace(/ /g, '');
    // all letter to lowercase
    textWithoutSpaces = textWithoutSpaces.toLowerCase();

    for (let i = 0; i < textWithoutSpaces.length / 2; i++ ) {
        if (textWithoutSpaces[i] !== textWithoutSpaces[textWithoutSpaces.length - (i + 1)]) {
            return false;
        }
    }
    return true;

}

if (!sentence) {
    console.log('Por favor introduzca un texto valido');
}

if (isPalindrome(sentence)) {
    console.log(`El texto '${sentence}' es un palindromo`);
} else {
    console.log(`El texto '${sentence}' NO es un palindromo`);
}