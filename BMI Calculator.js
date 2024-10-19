//A CLI app that calculates BMI from user-provided weight and height.

let weight = parseInt(prompt("Please insert your weight in Kg :"))
let height = parseInt(prompt("Please insert your height in cm :"))


// Conditions to check valid input
if (weight <= 0 && height <= 0 || isNaN(weight) && isNaN(height)) {
    alert("Please enter a valid weight and height");
} else if (weight <= 0 || isNaN(weight)) {
    alert("Please enter a valid weight");
} else if (height <= 0 || isNaN(height)) {
    alert("Please enter a valid height");
} else {
    console.log("Your weight is", weight, "Kg");
    console.log("Your height is", height, "cm");

    //BMI formula
    let BMI = weight / Math.pow((height / 100), 2);
    let round_BMI = Math.round(BMI * 10) / 10;
    console.log("Your Body Mass Index (BMI) is", round_BMI);

    //BMI range category
    if (round_BMI < 18.5){
        console.log("You are Underweight ! Please increase your weight to Stay Healthy")
    } else if (round_BMI >= 18.5 && round_BMI <= 24.9){
        console.log("Your are in healthy weight range!")
    } else if (round_BMI >= 25.0 && round_BMI <= 29.9){
        console.log("You are Overweight ! You need to lose weight")
    } else if (round_BMI >= 30.0 && round_BMI <= 39.9){
        console.log("You are Obese ! You need to lose weight right now !")
    } else if (round_BMI >= 40.0){
        console.log("You are Severly Obese ! Get medical attention right now !")
    }
}

