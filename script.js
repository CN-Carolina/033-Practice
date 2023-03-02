let volunteerOne = "Braxton";
let volunteerTwo = "Oussy";
let studentOne = "Tiara";
let studentTwo = "Jeremy";
let numberOne = 23;
let numberTwo = 3;
let sum = 26;
let difference = 20;
let adj = "smart";
let verb = "run";
let celeb = "Beyonce";



document.querySelector("button").onclick = function() {
    //replace null below with variable for first volunteer

    document.querySelector(".volunteer1").innerHTML = volunteerOne;
    //replace null below with variable for second volunteer
    document.querySelector(".volunteer2").innerHTML = volunteerTwo;
    //replace null below with variable for first number
    document.querySelector(".number1").innerHTML = numberOne;
    //replace null below with variable for second number
    document.querySelector(".number2").innerHTML = numberTwo;
    //replace null below with variable adding numbers
    document.querySelector(".adding").innerHTML = sum;
    //replace null below with variable subtracting numbers
    document.querySelector(".subtracting").innerHTML = difference;
    //replace null below with variable for the adjective
    document.querySelector(".adjective").innerHTML = adj;
    //replace null below with variable for fist student's name
    document.querySelector(".classmate1").innerHTML = studentOne;
    //replace null below with variable for second student's name
    document.querySelector(".classmate2").innerHTML = studentTwo;
    //replace null below with variable for celebrity's name
    document.querySelector(".celebrity").innerHTML = celeb;
    //replace null below with variable for celebrity's name
    document.querySelector(".celebrity-again").innerHTML = celeb;
    //replace null below with variable for the verb
    document.querySelector(".verb").innerHTML = verb;
    document.querySelector(".storyOne").style = "display:block";
};