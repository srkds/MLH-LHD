function reverseString(thisString) {
    var reverseString = "";

    for(i = thisString.length - 1; i >= 0; i--){
        reverseString += thisString[i]
    }

    return reverseString;
}

console.log(reverseString("Google"));