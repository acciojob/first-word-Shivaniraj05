function firstWord(str) {
    if (!str) {
        return "";
    }
    
    let firstIndex = str.indexOf(' ');
    if (firstIndex === -1) {
        return str;
    }
    
    return str.substring(0, firstIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
