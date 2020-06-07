// Chapter 1
// Task 1
    alert("Welcome :)");

// Task 2
    alert("Error! Please enter a valid password.");

// Task 3
    alert("Welcome to js Land.. \n Happy Coding!");

// Task 4
    alert("Welcome to JS Land..");
    alert("Happy Coding!");

// Task 5
// Press f12 go to console
// write alert("Hello I can run this through my browsers console."); Press Enter

// Task 6
// I am using alert in my projects

// Task 7 
// Practice is done

// Chapter 2
// Task 1
    var username;

// Task 2
    var myName = "M Ahmed Raza";

// Task 3
    var message;
    message = "Hello World";
    alert(message);

// Task 4
    var name = "Ahmed";
    var age = "19 years old"
    var course = "Web & Mob Hybird Application"
    alert(name);
    alert(age);
    alert(course);

// Task 5


// Task 6
    var email = "itsmeeeahmed@gmail.com";
    alert("My email address is "+email);

// Task 7
    var book ="A smarter way to learn JS"
    alert("I am trying to learn from the Book "+book);

// Task 8
    document.getElementById("heading").innerHTML= "Yeah i can write Html content through JS";
    //There is a file outside it is also done in that

// Task 9
    var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    alert(design);

// Chapter 3
// Task 1
    var my_age = 19;
    alert("I am "+my_age+" years old");

// Task 2


// Task 3
    var birthYear = 2000;
    document.getElementById("head1").innerHTML= "My birth year is "+birthYear+" <br>Data type of my variable is "+typeof(birthYear);
     //There is a file outside it is also done in that


// Task 4
    var visitorName = prompt("Your name:");
    var prodName = prompt("Product:");
    var quantity = prompt("Quantity:");
    document.getElementById("head").innerHTML= visitorName+" ordered "+quantity+" "+prodName+" on xyz shoe house";
     //There is a file outside it is also done in that


//Chapter 4
// Task 1
    var nam; var nam2; var nam3;

// Task 2 
    var _name;
    var $fname;
    var var_1;
    var a1;
    var f_name;
    var 1var;
    var full name;
    var 554;
    var &;
    var let;

// Task 3
document.getElementById("para").innerHTML= "A variable can only contain letters, numbers, dollar signs and underscores. <br>Variables must begin with a letter, underscore, dollar sign <br>Variable names are case sensitive.<br>Variable name should not be a Keyword" ;
//There is a file outside it is also done in that

// Chapter 5
// Task 1
    var no1 = 2;
    var no2 = 7;
    var sum = no1+no2;
    document.getElementById("he").innerHTML= "Sum of "+no1+" and "+no2+" is "+sum;
//There is a file outside it is also done in that

// Task 2
var no1 = 2;
var no2 = 7;
var sub = no1-no2;
var div = no1/no2;
var mult = no1*no2;
var mod = no1%no2;
 document.getElementById("she").innerHTML= "Substration of "+no1+" and "+no2+" is "+sub+"<br>Multiplication :"+mult+"<br>Division :"+div+"<br>Modulus :"+mod;  
//There is a file outside it is also done in that

// Task 3
var variable; 
document.getElementById("s1").innerHTML = "Value after variable declaration is "+variable;
variable = 5;
document.getElementById("s2").innerHTML = "Intial value: "+variable;
variable = variable++;
document.getElementById("s3").innerHTML = "Value after increment is "+variable;
variable = variable+7;
document.getElementById("s4").innerHTML = "Value after addition is "+variable;
variable = variable--;
document.getElementById("s5").innerHTML = "Value after decrement is "+variable;
variable = variable%3;
document.getElementById("s6").innerHTML = "The remainder is "+variable;
//There is a file outside it is also done in that


// Task 4
var cost = 600;
document.getElementById("cost").innerHTML= "Total cost to buy 5 tickets to a movie is "+(cost*5);    

// Task 5
var table = 4;
document.write('Table of '+table);
for (let i = 1; i <= 10; i++) {
 document.write("<br>4x"+i+"="+(table*i));    
}

// Task 6
var cel = 25;
document.write(cel+"C is "+(((cel*9)/5)+32)+"F");
document.write("<br>")
var far = 70;
document.write(far+"F is "+((far-32)*5/9)+"C")

// Task 7
var pItem1 = 350;
var pItem2 = 520;
var qItem1 = 2;
var qItem2 = 9;
var sCharges = 100;
document.write("<h1>Shopping Cart</h1>")
document.write('<br>Price of item 1 is '+pItem1);
document.write('<br>Quantity of item 1 is'+qItem1);
document.write("<br>Price of item 2 is "+pItem2);
document.write('<br>Quantity of item 1 is'+qItem2);
document.write('<br>Shipping Charges is'+sCharges);
document.write("<br>");
document.write("Total cost of your order is "+((qItem1*pitem1)+(qItem2*pitem2)+sCharges))

// Task 8
var tmarks = 980;
var omarks = 804;
var per = (omarks/tmarks)*100;
document.write("<h1>Marks Sheet</h1>");
document.write("<br>Total marks: "+tmarks);
document.write("<br>Obtained marks: "+omarks);
document.write("<br>Percentage: "+per);

// Task 9
var $ = 10;
var riyal = 25;
document.write("<h1>Currency in PKR</h1>");
document.write("<br>Total Currency in PKR: "+(($*104.80)+(riyal*28)));

// Task 10
var intial = 1;
intial = ((intial+5)*5)/2;

// Task 11
var cYear = 2020;
var bYear = 2000;
var urAge = cYear - bYear;

document.write("<h1>Age Ca;culator</h1>");
document.write("<br>Current Year: "+cYear);
document.write("<br>Birth Year: "+bYear);
document.write("<br>Your age: "+urAge);



