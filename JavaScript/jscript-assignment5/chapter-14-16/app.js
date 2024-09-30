// // Question # 1,2:

// var studentNames = [];


// // Question # 3:

// var studentNames = ["faiza", "maha", "areesha", "shereen"];


// // Question # 4:

// var arrNumbers = [5, 10, 15, 20];


// // Question # 5:

// var boolArray = [true, false];


// // Question # 6:

// var mixedArray = ["karachi", 30, true, "Islamabad", 45, false, null];


// // Question # 7:

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>Qualifications:</h1>");

// document.write("<h3><ol>");
// document.write("<li>" + qualifications[0] + "</li>");
// document.write("<li>" + qualifications[1] + "</li>");
// document.write("<li>" + qualifications[2] + "</li>");
// document.write("<li>" + qualifications[3] + "</li>");
// document.write("<li>" + qualifications[4] + "</li>");
// document.write("<li>" + qualifications[5] + "</li>");
// document.write("<li>" + qualifications[6] + "</li>");
// document.write("<li>" + qualifications[7] + "</li>");
// document.write("</ol></h3>");


// // Question # 8:

// var studentNames = ["Michael", "John", "Tony"];
// var scores = [320, 230, 480];
// totalMarks = 500;

// for (let i = 0; i < studentNames.length; i++) {
//     var percentage = (scores[i] / totalMarks) * 100;
// document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage: " + percentage + " % <br>");
// }


// // Question # 9:

// var colors = [" purple ", " green ", " yellow ", " red "];
// document.write("<br>" + colors);

// // // (Part a)
// var userColor = prompt("What color would you like to add to the beginning of the array?");
// colors.unshift(userColor);
// document.write("<br>" + colors + " ");

// // // (Part b)
// var userColor = prompt("What color would you like to add to the end of the array?");
// colors.push(userColor);
// document.write("<br>" + " " + colors);

// // (Part c)
// var colors = [" blue ", " brown ", " purple ", " green ", " yellow ", " red "];
// document.write("<br>" + colors);

// // (Part d)
// var colors = [" blue ", " brown ", " purple ", " green ", " yellow ", " red "];
// colors.shift(userColor);
// document.write("<br>" + colors + " ");

// // (Part e)
// var colors = [" blue ", " brown ", " purple ", " green ", " yellow ", " red "];
// colors.pop(userColor);
// document.write("<br>" + colors + " ");

// // (Part f)
// var colors = [" blue ", " brown ", " purple ", " green ", " yellow ", " red "];
// var index = prompt("At which index (0 to " + (colors.length) + ") would you like to add a color?");
// var colorName = prompt("What color would you like to add?");

// colors.splice(index, 1, colorName);
// document.write("<br>" + colors);

// // (Part g)
// var index1 = prompt("At which index (0 to " + (colors.length) + ") would you like to delete color(s)?");
// var countColors = prompt("How many colors would you like to delete?");

// colors.splice(index1, countColors);
// document.write("<br>" + colors);


// // Question # 10:

// var studScore = [320, 230, 480, 120];
// document.write("Scores of Students : " + studScore);

// // studScore.sort(studScore);
// document.write("<br> Ordered Scores of Students : " + studScore.sort());


// // Question # 11:

// var cityNames = ["Karachi", "Lahore", "islamabad", "quetta", "Peshawar"];
// document.write("Cities list: <br> " + cityNames + "<br>");

// var citiesSelect = cityNames.slice(2, 4);
// document.write("<br> Selected cities list: <br> " + citiesSelect);


// // Question # 12:

// var arr = ["This ", "is ", "my ", "cat"];
// document.write("<h1>Array: <br> This,is,my,cat</h1>");

// var joining = arr.join("");
// document.write("<h1>String: <br>" + joining + "</h1>");


// // Question # 13:

// var fifoArray = [];

// fifoArray.push("keyboard");
// fifoArray.push("mouse");
// fifoArray.push("printer");
// fifoArray.push("monitor");
// document.write("Devices: <br>" + fifoArray + "<br><br>");

// while (fifoArray.length > 0) {
// document.write("Out:<br>" + fifoArray.shift() + "<br>");
// }


// // Question # 14:

// var fifoArray = [];

// fifoArray.push("keyboard");
// fifoArray.push("mouse");
// fifoArray.push("printer");
// fifoArray.push("monitor");
// document.write("Devices: <br>" + fifoArray + "<br><br>");

// while (fifoArray.length > 0) {
//     document.write("Out:<br>" + fifoArray.pop() + "<br>");
// }


// Question # 15:

// var phoneManufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// for (let i = 0; i < phoneManufacturer.length; i++) {
//     document.write("<option value='" + phoneManufacturer[i] + "'>" + phoneManufacturer[i] + "</option>");
// }


