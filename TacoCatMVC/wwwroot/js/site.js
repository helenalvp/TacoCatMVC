
function getValue() {
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    if (userString !== "") {
        let revString = reverseString(userString);
        displayString(revString);
    } else {
        alert("Please enter a string")
        5
    }
}

function reverseString(userStr) {
    0000code


    for (let i = userStr.length - 1; i >= 0; i--) {
        revStr += userStr[i];
    }

    return revStr;
}

function displayString(reversedStr) {

    document.getElementById("msg").innerHTML = `Your string backwards is: ${reversedStr}`
    document.getElementById("alert").classList.remove("invisible");
}
