function stringrev(str) {
    return str.split("").reverse().join("");
}

function check() {
    const userInput = document.getElementById("userInput");
    const value = userInput.value;
    const rev = stringrev(value);

    if (value === rev) {
        document.getElementById("p").innerHTML = `<strong>${value}</strong> is Palindrome`;
    } else {
        document.getElementById("p").innerHTML = `<strong>${value}</strong> is Not Palindrome`;
    }
}
