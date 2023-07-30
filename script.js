const msg = document.getElementById("message");
const startBtn = document.getElementById("button");

function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 1;
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

    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const number3 = document.getElementById("number3").value;
    
    

  
         console.log(number1.value,number2,number3)
    // if (number1 === number2 && number1 === number3) {
    //     playWonSound();
    //     showMessage();
    // } else {
    //     hideMessage();
    // }
}


function animation() {


  const  rolls = ()=> { 
   
    const number1 = getElement("number1");
    const number2 = getElement("number2");
    const number3 = getElement("number3");

    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();

    number1.innerHTML = `${num1}`;
    number2.innerHTML = `${num2}`;
    number3.innerHTML = `${num3}`;
   

   }

   const interval = setInterval(
    rolls
  ,80)
   

  const timeOut = setTimeout(()=>{

    clearInterval(interval);

    result()

   },1000)


}




function roller() {

    animation();
   

}


