const countDisplay = document.getElementById('counter'); //A variable that get and manipulate the html
const btnIncrease = document.getElementById('increase');
const btnDecrease = document.getElementById('decrease');
const btnReset = document.getElementById('reset');
const btnAddFive = document.getElementById('addFive');
const btnMinusFive = document.getElementById('minusFive');

let count = 0;

function colorUpdate() {
    countDisplay.textContent = count;
    if (count >= 0) {                                    //check if the number is positive it will turn green then if negative it will turn red and if 0 it will back to black
        countDisplay.style.color = "green";
        if (count == 0) {
            countDisplay.style.color = "black"
        }
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    };
}

btnIncrease.addEventListener("click", function () {      //Name of variable.addEventListener("click", function(){code block})
    count++;
    colorUpdate();

});

btnDecrease.addEventListener("click", function () {
    count--;
    colorUpdate();

})

btnReset.addEventListener("click", function () {
    count = 0;
    colorUpdate();


})

btnAddFive.addEventListener("click", function () {
    count += 5;
    colorUpdate();


})

btnMinusFive.addEventListener("click", function () {
    count -= 5;
    colorUpdate();


})