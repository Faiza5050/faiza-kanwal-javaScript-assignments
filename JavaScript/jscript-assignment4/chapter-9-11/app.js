// // Question # 1:

// var cityName = prompt("Please Enter Your City Name: ");

// if (cityName === "karachi") {
//     document.write("Welcome to city of lights");
// }


// // Question # 2:

// var gender = prompt("Please Enter Your Gender: ");

// if (gender === "male") {
//     document.write("Good Morning Sir!");
// } else {
//     document.write("Good Morning Ma’am");
// }


// // Question # 3:

// var signalColor = prompt("Enter the color of the traffic signal (Red, Yellow, Green): ");

// document.write("<br><h3> Signal Color" + " " + " " + "Message </h3><br>")
// if (signalColor === "red") {
//     document.write("Red" + " " + " " + " " + "Must Stop<br>");
// } else if (signalColor === "yellow") {
//     document.write("Yellow" + " " + " " + " " + "Ready to move<br>");
// } else if (signalColor === "green") {
//     document.write("Green" + " " + " " + " " + "Move now<br>");
// } else {
//     document.write("Invalid Color");
// }


// // Question # 4:

// var fuel = prompt("Enter the remaining fuel in car (in litres)");

// if (fuel <= "0.25") {
//     document.write("Please refill the fuel in your car");
// }


// // Question # 5:

// // (Part a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// Output: True; Alert message displayed

// // (Part b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Output: False; Alert message not displayed

// // (Part c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// // Output: False;

// if (c === 13){
// alert("condition 2 is true");
// }
// // Output: True;

// if (++c < 14){
// alert("condition 3 is true");
// }
// // Output: False;

// if(c === 14){
// alert("condition 4 is true");
// }
// // Output: True;

// // (Part d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // Output: True; Alert message displayed

// // (Part e)
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }
// // Output: True;

// // (Part f)
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
// // Output: True; Alert message displayed


// // Question # 6:

// var subjMarks1 = +prompt("Enter Obtained Marks Of English: ");
// var subjMarks2 = +prompt("Enter Obtained Marks Of Computer: ");
// var subjMarks3 = +prompt("Enter Obtained Marks Of Mathematics: ");
// var totalMarks = +prompt("Enter Total Marks Of All Subjects: ");

// document.write("<br><h1> Marks Sheet </h1><br>")
// document.write("Total marks : " + " " + totalMarks);

// var totalMarksObtained = (subjMarks1 + subjMarks2 + subjMarks3);
// document.write("<br>Marks obtained : " + " " + totalMarksObtained);

// percentage = (totalMarksObtained / totalMarks) * 100;
// document.write("<br> Percentage : " + " " + percentage + "%");

// var grade;
// if (percentage >= 80) {
//     grade = "A-one";
//     document.write("<br>Grade : " + grade);
// } else if (percentage >= 70) {
//     grade = "A";
//     document.write("<br>Grade : " + grade);
// } else if (percentage >= 60) {
//     grade = "B";
//     document.write("<br>Grade : " + grade);
// } else {
//     document.write("<br>Grade : Fail");
// }

// var remarks;
// if (grade === "A-one") {
//     remarks = "Excelent";
//     document.write("<br>Remarks : " + remarks);
// } else if (grade === "A") {
//     remarks = "Good";
//     document.write("<br>Remarks : " + remarks);
// } else if (grade === "B") {
//     remarks = "You need to improve";
//     document.write("<br>Remarks : " + remarks);
// } else {
//     document.write("<br>Remarks : Sorry");
// }


// // Question # 7:

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = prompt("Guess the secret number between 1 and 10: ");

// if (userGuess <1 || userGuess >10) {
//     alert("Please enter a number between 1 to 10.");
// } else {
//     if (userGuess === secretNumber) {
//         alert("Bingo! Correct Answer");
//     } else if (userGuess +1 === secretNumber) {
//         alert("Close enough to the correct answer");
//     } else {
//         alert("Sorry! You did not guess the number, Try again.");
//     }
// }


// // question # 8:

// var userInput = +prompt("Enter a number to check if it is divisible by 3:");
// var number = userInput;

// if (number != userInput) {
//     alert("Please enter a valid number."); 
// } else {
//     if (number % 3 === 0) {
//         alert("Hurrah! " + number + " is divisible by 3.");
//     } else {
//         alert("Oh! " + number + " is not divisible by 3");
//     }
// }


// // Question # 9:

// var userInput = +prompt("Enter a number to check if it is even or odd:");
// var number = userInput;

// if (number != userInput) {
//     alert("Please enter a valid number.");
// } else {
//     if (number % 2 === 0) {
//         alert(number + " is an Even number.");
//     } else {
//         alert(number + " is an Odd number.");
//     }
// }


// // Question # 10:

// var userInput = prompt("Enter the Temperature:");
// var temperature = userInput;

// if (temperature != userInput) {
//     alert("Please Enter a valid number.");
// } else {
//     if (temperature >40) {
//         alert("It is too hot outside.");
//     } else if (temperature >30) {
//         alert("The Weather today is Normal.");
//     } else if (temperature >20) {
//         alert("Today’s Weather is cool.");
//     } else if (temperature >10) {
//         alert("OMG! Today’s weather is so Cool.");
//     } else {
//         alert("It's Chilly Today");
//     }
// }


// // Question # 11:

// var inputFirstNumber = +prompt("Enter the first number:");

// var inputSecondNumber = +prompt("Enter the second number:");

// var operation = prompt("Enter the Operation (+, -, *, /, %):");
// var result;

// if (operation === "+") {
//     result = inputFirstNumber + inputSecondNumber;
//     alert(result);
// } else if (operation === "-") {
//     result = inputFirstNumber - inputSecondNumber;
//     alert(result);
// } else if (operation === "*") {
//     result = inputFirstNumber * inputSecondNumber;
//     alert(result);
// } else if (operation === "/") {
//     if (inputSecondNumber === 0) {
//         alert(inputFirstNumber + " " + "is not Divisible by 0.");
//         result = null;
//     } else {
//         result = inputFirstNumber / inputSecondNumber;
//         alert(result);
//     }   
// } else if (operation === "%") {
//     if (inputSecondNumber === 0) {
//         alert(inputFirstNumber + " " + "is not Divisible by 0.");
//         result = null;
//     } else {
//         result = inputFirstNumber % inputSecondNumber;
//     }
// } else {
//     alert("Invalid Operation.");
//     result = null;
// }
// if (result !== null) {
//     alert("The result of " + inputFirstNumber + " " + operation + " " + inputSecondNumber + " = " + result);
// }
