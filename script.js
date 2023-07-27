const msg = document.getElementById("message");


function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

function getElement(id) {
    return document.getElementById(id);
}

function playWonSound() {
    const wonSound = document.getElementById("won_sound");
    wonSound.play();
}
function showMessage() {

    msg.style.display = "flex"

}
function hideMessage() {

    msg.style.display = "none"
}

function result() {


    const number1 = getElement("number1")
    const number2 = getElement("number2")
    const number3 = getElement("number3")

    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();

    number1.innerHTML = `${num1}`
    number2.innerHTML = `${num2}`
    number3.innerHTML = `${num3}`


    if (num1 === num2 && num1 === num3) {
        playWonSound();
        showMessage();
    } else {
        hideMessage();
    }
}

    function roller () {



        setTimeout(result,2000)
    }


