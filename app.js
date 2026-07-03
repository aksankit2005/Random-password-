const input = document.querySelector("input");
const button = document.querySelector("button");

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";
const SPECIAL = "!@#$%^&*()-_=+[]{}|;:,.<>?";

function generatePassword() {
    const allChars = UPPER + LOWER + DIGITS + SPECIAL;
    let pass = "";
    pass += UPPER[Math.floor(Math.random() * UPPER.length)];
    pass += LOWER[Math.floor(Math.random() * LOWER.length)];
    pass += DIGITS[Math.floor(Math.random() * DIGITS.length)];
    pass += SPECIAL[Math.floor(Math.random() * SPECIAL.length)];

    for (let i = 0; i < 8; i++) {
        pass += allChars[Math.floor(Math.random() * allChars.length)];
    }

    input.value = pass;
}

button.addEventListener("click", generatePassword);
const copyIcon = document.querySelector("#copy");

copyIcon.addEventListener("click", () => {//use to copy
    if (input.value !== "") {
        navigator.clipboard.writeText(input.value);
        alert("Password copied!");
    }
});