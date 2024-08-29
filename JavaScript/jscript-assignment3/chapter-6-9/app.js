// // Question # 1:

// var a = 10;
// document.write("<h1>Result:</h1>");
// document.write("The value of a is: 10<br>");
// document.write("---------------------------<br><br>");

// ++a;
// document.write("<br>The value of ++a is: " + a);
// document.write("<br>Now the value of a is: " + a);

// document.write("<br><br>The value of a++ is: " + a);
// a++;
// document.write("<br>Now the value of a is: " + a);

// --a;
// document.write("<br><br>The value of --a is: " + a);
// document.write("<br>Now the value of a is: " + a);

// document.write("<br><br>The value of a-- is: " + a);
// a--
// document.write("<br>Now the value of a is: " + a);


// // Question # 2:

// var a = 2, b = 1;

// var res = --a;
// // --a decrements the value of a by 1
// document.write("<br>a is " + res);

// var res = --b;
// // --b decrements the value of b by 0
// document.write("<br>b is " + res);

// var res = --a - --b + ++b;
// ++b;
// // ++b increments the value of b by 1

// var res = --a - --b + ++b + b--;
// b--;
// // b-- decrements the value of b by 1

// var result = --a - --b + ++b + b--;
// result = 1 - 0 + 1 + 1
// document.write("<br> result is " + result);


// // Question # 3, 4:

// var userName = prompt("Please Enter Name:");
// document.write("<h1>Hello " + " " + userName + " ! " + " " + "Welcome To My Website!</h1>");


// // Question # 5:


// var num = prompt("Enter a Number!" , 5);
    
// document.write("<br>Table Of " + num + "<br>");
// num = num * 1;
// document.write("<br>" + num + " X " + " 1 " + " = " + num);
// num1 = num * 2;
// document.write("<br>" + num + " X " + " 2 " + " = " + num1);
// num2 = num * 3;
// document.write("<br>" + num + " X " + " 3 " + " = " + num2);
// num3 = num * 4;
// document.write("<br>" + num + " X " + " 4 " + " = " + num3);
// num4 = num * 5;
// document.write("<br>" + num + " X " + " 5 " + " = " + num4);
// num5 = num * 6;
// document.write("<br>" + num + " X " + " 6 " + " = " + num5);
// num6 = num * 7;
// document.write("<br>" + num + " X " + " 7 " + " = " + num6);
// num7 = num * 8;
// document.write("<br>" + num + " X " + " 8 " + " = " + num7);
// num8 = num * 9;
// document.write("<br>" + num + " X " + " 9 " + " = " + num8);
// num9 = num * 10;
// document.write("<br>" + num +  " X " + " 10 " + " = " + num9);


// // Question # 6:

// // (Part a)
// var subject1 = "English";
// var subject2 = "Math";
// var subject3 = "Urdu";

// // // (part b)
// var totalMarks = 100;

// // // (Part c)
// var obtMarks1 = +prompt("Enter Obtained Marks of " + subject1, 54);
// var percent1 = obtMarks1/totalMarks*100;


// // // (Part d)
// var obtMarks2 = +prompt("Enter Obtained Marks of " + subject2, 54);
// var percent2 = obtMarks2/totalMarks*100;
// var obtMarks3 = +prompt("Enter Obtained Marks of " + subject3, 48);
// var percent3 = obtMarks3/totalMarks*100;

// // (Part e)
// document.write("<br><h3> Subject Total Marks Obtained Marks Percentage </h3><br>");
// document.write(subject1+" "+" "+" "+" "+totalMarks+" "+" "+" "+" "+" "+" "+obtMarks1+" "+" "+" "+" "+percent1+"%<br><br>");
// document.write(subject2+" "+" "+" "+" "+totalMarks+" "+" "+" "+" "+" "+" "+obtMarks2+" "+" "+" "+" "+percent2+"%<br><br>");
// document.write(subject3+" "+" "+" "+" "+totalMarks+" "+" "+" "+" "+" "+" "+obtMarks3+" "+" "+" "+" "+percent3+"%<br><br>");

// var total = obtMarks1+obtMarks2+obtMarks3;
// document.write("<br>300"+" "+" "+" "+" "+ total + " " + " ");
// var percentage = total/300*100;
// document.write(percentage + "%");
