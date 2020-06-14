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

// Task 12
var snack  = "chocolate";
var cage = 19;
var mage = 65;
var apday = 3;
var Rototal = (mage-cage)*apday;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br>Favourite Snack:"+snack);
document.write("<br>Curremt Age:"+cage);
document.write("<br>Estimated maximum age:"+mage);
document.write("<br>Amount of Snack per day:"+apday);
document.write("<br>“You will need "+Rototal+" to last you until the ripe old age of:"+mage);


// Chapter 6-9

// Task 1
var a = 10
    document.write("Result:")
    document.write("<br>The value of a is:"+a)
    
    document.write("<br><br>The value of ++a is:"+(++a))
    document.write("<br>Now the value of a is:"+a)
    
    document.write("<br><br>The value of a++ is:"+(a++))
    document.write("<br>Now the value of a is:"+a)

    document.write("<br><br>The value of --a is:"+(--a))
    document.write("<br>Now the value of a is:"+a)

    document.write("<br><br>The value of a-- is:"+(a--))
    document.write("<br>Now the value of a is:"+a)

//Task 2

var a = 2, b = 1;
document.write("a is:"+a)
document.write("<br>b is:"+b)
var result = --a - --b + ++b + b--;
document.write("<br>Result is:"+result)

//Task 3
var gretnam = prompt("Your good name:")
document.write("Hello "+gretnam+" have a good day")

// Task 4
var table = prompt('Write a NUMBER that table you want:')
table = Number(table)

        
if(isNaN(table)){
    table = 5 
  for (let i = 1; i <11 ; i++) {
       document.write(table+"x"+i+": "+(table*i)+"<br>")
        
    } 


} else {
  for (let i = 1; i <11 ; i++) {
       document.write(table+"x"+i+": "+(table*i)+"<br>")
        
    } 
}

//Task 5
var s1 = prompt('Write name of 1st subject')
  var s2 = prompt('Write name of 2nd subject')
  var s3 = prompt('Write name of 3rd subject')
  var TMarks = 100
  var AllTmarks = TMarks*3
  var s1Marks = Number(prompt(`Write marks obtained in ${s1}`))
  var s2Marks = Number(prompt(`Write marks obtained in ${s2}`))
  var s3Marks = Number(prompt(`Write marks obtained in ${s3}`))
  var TobtMarks = s1Marks+s2Marks+s3Marks
  var s1Perc = (s1Marks/TMarks)*100
  var s2Perc = (s2Marks/TMarks)*100
  var s3Perc = (s3Marks/TMarks)*100

  document.write(`<table><tr>
    <th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th>
  </tr>
  <tr>
    <td>${s1}</td><td>${TMarks}</td><td>${s1Marks}</td><td>${s1Perc}%</td>
  </tr>
  <tr>
    <td>${s2}</td><td>${TMarks}</td><td>${s2Marks}</td><td>${s2Perc}%</td>
  </tr>
  <tr>
    <td>${s3}</td><td>${TMarks}</td><td>${s3Marks}</td><td>${s3Perc}%</td>
  </tr>
  <tr>
    <th></th><th>${AllTmarks}</th><th>${TobtMarks}</th><th>${(TobtMarks/AllTmarks)*100}%</th>
  </tr>
  </table>`)

  //Chapter 9-11

  //Task 1
  var cityName = prompt("Your city name")
  if(cityName.toLowerCase()=="karachi"){
      document.write('Welcome to the city of lights')
  }

  //Task 2
  var gen = prompt('What is your Gender? <br> Write M if male & F if female')
  if(gen.toLowerCase() == "m" ){
      document.write("Good Morning Sir")
  } else if (gen.toLowerCase() == "f"){
      document.write("Good Morning Ma'am")
  } else{
      document.write("Write in a correct manner")
  }

  //Task 3
  var TSig = prompt('Traffic Signal Color? \n Choose between Red Yellow or Green')
  if(TSig.toLowerCase() == "red" ){
      document.write("Must Stop")
  } else if (TSig.toLowerCase() == "yellow"){
      document.write("Ready to Move")
  } else if (TSig.toLowerCase() == "green"){
      document.write("Move now")
  } else{
      document.write("Write in a correct manner")
  }

  //Task 4
  var fuel = Number(prompt('Remaining fuel of car in liters'))
        if(fuel<0.25){
            document.write('Please refill the fuel in your car')
        } else if (fuel>0.25){
            document.write('You have enough fuel')
        } else {
            document.write("Write in a correct manner")
        }

//Task 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if(false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }

//Task 6
var sub1 = Number(prompt('Enter marks obtainer of 1st subject:'))
        var sub2 = Number(prompt('Enter marks obtained of 2nd subject:'))
        var sub3 = Number(prompt('Enter marks of obtained 3rd subject:'))
        var totalMark = Number(prompt('Enter Total marks:'))
        var Omark = sub1 + sub2+ sub3
        var Per = (Omark/totalMark*100)
        var grade;
        var remarks;
        if(Per>=80){
            remarks = "Excelent"
            grade = "A-one"
        } else if (Per>=70){
            remarks = "Good"
            grade = "A"
            
        }else if (Per>=60){
            remarks = "You need to improve"
            grade = "B"
            
        }else if (Per<60){
            remarks = "Fail"
            grade = "Sorry"
            
        }


        document.write("<h1>Marks Sheet</h1>")
        document.write('<br>Total Marks:'+totalMark)
        document.write('<br>Marks Obtained:'+Omark)
        document.write('<br>Percentage:'+Per+"%")
        document.write('<br>Grade:'+grade)
        document.write('<br>Remarks:'+remarks)

        //Task 7
        var sno = 8;
        var uno = Number(prompt("Guess a no between 1-10"))
        if(uno==sno){
            document.write("Bingo! Correct answer")

        }else if (uno== sno+1){
            document.write('Very Close')
        } else {
            document.write("Wrong ans")
        }

        //Task 8
        var n1 = Number(prompt('Write a no to check if it is divisilbe by 3'))
        if(n1%3===0){
            document.write("It is divisible by 3")
        }else{
            document.write("It is not divisible by 3")
        }

        //Task 9
        var num = Number(prompt("Write any no:"))
        if (num%2==0) {
            document.write("Its Even No")
        } else  {
            document.write("Its Odd no")
        } 

        //Task 10
        var T = Number(prompt("What is temperature:"))
        if (T>40) {
            document.write("Its too hot outside")
        } else if (T>30) {
            document.write("The weather today is Normal")
        } else if (T>20) {
            document.write("Today’s Weather is cool.")
        } else if (T>10) {
            document.write("OMG! Today’s weather is so Cool.")
        } 

        //Task 11
        var no1st = Number(prompt("1st No:"))
        var no2nd = Number(prompt("2nd No:"))
        var operator = prompt("Operator:")
        var rslt;
        if(operator=="+"){
            rslt = no1st+no2nd
        } else if (operator == "-"){
            rslt = no1st-no2nd
        }else if (operator == "*"){
            rslt = no1st*no2nd
        }else if (operator == "%"){
            rslt = no1st%no2nd
        }else if (operator == "/"){
            rslt = no1st/no2nd
        }
        document.write("<h1>Calculator</h1>")
        document.write(`${no1st} ${operator} ${no2nd} = ${rslt}`)
        
        //Chapter 12-13

        //Task 1


        //Task 2
        var int1 = Number(prompt("1st Integer:"))
        var int2 = Number(prompt("2nd Integer:"))
        var lg;
        if (int1>int2)
        {
            lg = "large no is:"+int1
        } else if(int2>int1){
            lg = "large no is:"+int2
        } else if (int1==int2){
            lg = "Both are equal"
        }
        document.write(lg)

        //Task 3
        var nmbr = Number(prompt("Write any no:"))
        
        var mg;
        if (nmbr>0)
        {
            mg = "Positive no"
        } else if(nmbr<0){
            mg = "Negative No"
        } else if (nmbr==0){
            mg = "Zero"
        }
        alert(mg)

        //Task 4
        var lmbr = prompt("Write an aphabate of length 1:")
        if(lmbr=="a"|| lmbr=='e'|| lmbr=='i'|| lmbr=='o'|| lmbr=='u'){
            alert(true)
        } else{
            alert(false)
        }
        
        //Task 5
        var cPass = "12345"
        var uPass = prompt("Enter your password:")
        if (cPass == uPass){
            alert("Correct Password")
        } else if (uPass ==''){
            alert('Please enter your Password')
        } else {
            alert('Incorrect Password')
        }

        //Task 6
        var greeting;
        var hour = 13;
        if (hour < 18) {
        greeting = "Good day";}
        else{
        greeting = "Good evening";
        }

        //Task 7
        var tym = Number(prompt('Write time in 24 hour like 1400'))
        if (tym>=0000&&tym<1200) {
        alert('Good morning')
        } else if(tym>=1200&&tym<1700) {
        alert('Good afternoon')
        }else if(tym>=1700&&tym<2100) {
        alert('Good evening')
        }else if(tym>=2100&&tym<2359) {
        alert('Good night')
        }

        //Chapter 14-16

        //Task 1
        var aaa = []
        //Task 2
        var bbb = new Array()
        //Task 3
        var str = ['ahmed',"ali","haris"]

        //Task 4
        var n1 = [1,2,3,4,5]

        //Task 5
        var boool = [true,false,false,true]

        //Task 6
        var mix = ['Ahmed', 12 , true]

        //Task 7
        var qual = new Array('SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PHD')
        document.write('QUALIFICATION:')
        for (let i = 0; i < qual.length; i++) {
            document.write(`<br>${i+1}) ${qual[i]}`)
            
        }

        //Task 8
        var stu= new Array('Ali','Ahmed','Shayan')
        var scr = new Array(420,380,395)
        var tot = 500;
        for (let i = 0; i < stu.length; i++) {
            document.write(`Score of ${stu[i]} is ${scr[i]}. Percentage: ${(scr[i]/tot)*100}%<br>`)
            
        }

        //Task 9
        var colr = ['white','blue','green']
        alert(colr)
        colr.unshift(prompt('Write a color to add in beginning'))
        alert(colr)
        colr.push(prompt('Write a color to add in end'))
        alert(colr)
        colr.unshift(prompt('Write a color to add in beginning'))
        alert(colr)
        colr.unshift(prompt('Again write a color to add in beginning'))
        alert(colr)
        colr.shift()
        alert("1st color deleted\n"+colr)
        colr.pop()
        alert("Last color deleted\n"+colr)
        var ind = prompt(`In which index you want to add lenght 0 - ${colr.length - 1}`)
        colr[ind] = prompt('Which color?')
        alert(colr)
        ind = Number(prompt(`In which index you want to delete lenght 0 - ${colr.length - 1}`))
        ind1= Number(prompt(`How many color you want to remove from desired index`))
        colr.splice(ind,ind1)
        alert(colr)

        //Task 10
        var scr =[320,230,480,120]
       document.write("Scores of Students: "+scr)
       document.write("<br>Ordered Scores od Students: "+scr.sort())

       //Task 11
       var cities = new Array('Karachi' , 'Islamabad' , 'Peshawar', 'Quetta')
       var selectedCities = cities.slice(0,3)
       document.write(`Cities List:<br>${cities}<br><br>Selected cities list:<br>${selectedCities}`)
      
       //Task 12
        var arr = ["This" ,  "is" ,  "my" , "cat"];
        var stringline = arr.join(' ')
        document.write(`Array: <br> ${arr} <br><br>String: <br> ${stringline}`)   

        //Task 13
        var device = ['Keyboard', "LED" , 'Mouse' ,'Printer']
        document.write(`Devices: <br>${device}<br>`)
        for (let i = 0; i < device.length; i++) {
        document.write(`<br> Out: <br> ${device[i]}`)}
            
        //Task 14
        var devic = ['Keyboard', "LED" , 'Mouse' ,'Printer']
        document.write(`Devices: <br>${devic}<br>`)
        for (let i = devic.length - 1; i > -1; i--) {
            document.write(`<br> Out: <br> ${devic[i]}`)
            
        }

        //Task 15
        var phone = new Array ("Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier")
        document.write("<select>")
        for (let i = 0; i < phone.length; i++) {
        document.write(`<option>${phone[i]}</option>`)
        }
        document.write("</select>")

        //Chapter 17-20
        //Task 1
        var marr = [[],[]]

        //Task 2
        var mat = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
        for (let i = 0; i < mat.length; i++) {
          document.write(mat[i].join(' ')+ "<br>")
            
        }

        //Task 3
        for (let i = 1; i <= 10; i++) {
            document.write(i+"<br>")
              
          }

        //Task 4
        var tab = Number (prompt("Enter no to show its multiplication table"))
        var len = Number (prompt("Enter length of multiplication table"))
        for (let i = 1; i <= len; i++) {
          document.write(`${tab} x ${i} = ${tab*i} <br>`)
            
        }

        //Task 5
        fruits = ["apple", "banana", "mango", "orange",'strawberry']
        for (let i = 0; i < fruits.length; i++) {
          document.write(`${fruits[i]} <br>`)
          
        }
        document.write('<br>')
        for (let i = 0; i < fruits.length; i++) {
          document.write(`Element at index ${i} is ${fruits[i]} <br>`)
          
        }

        //Task 6
        document.write("<h4>Counting</h4>")
        for (let i = 1; i <= 15; i++) {
          document.writeln(`${i},`)
          
        }
        document.write("<h4>Reverse Counting</h4>")
        for (let i = 10; i > 0; i--) {
          document.writeln(`${i},`)
          
        }
        document.write("<h4>Even</h4>")
        for (let i = 0; i <= 20; i++) {
          if (i%2==0) {
            document.writeln(`${i},`)
          }
        }
        document.write("<h4>Odd</h4>")
        for (let i = 0; i <= 20; i++) {
          if (!(i%2==0)) {
            document.writeln(`${i},`)
          }
        }
        document.write("<h4>Series</h4>")
        for (let i = 1; i <= 20; i++) {
          if (i%2==0) {
            document.writeln(`${i}k,`)
          }
        }

        //Task 7
        var A = ["cake", "apple pie", "cookie", "chips", "patties"]
    var inp = prompt('Welcome to our Bakery what do you want to order?').toLowerCase()
    var scre; 
    for (let i = 0; i < A.length; i++) {
        if(inp==A[i])
        {
            document.write(`${inp} is avliable at index ${i} in our bakery.`)
            scre = 1;
        }
    }
    if (scre!=1)
    {
        document.write(`We are sorry. ${inp} is not avliable at our bakery.`)
    }


    //Task 8
    var lar = [24, 53, 78, 91, 12]
    var larg;
    document.write("Array Items: "+ lar)
    for (let i = 0; i < lar.length; i++) {
        larg = lar[i]
        for (let i = 0; i < lar.length; i++) {
            if(larg<lar[i]){
                larg=lar[i]
               
            }
            
        }
        
    }
    document.write('<br>The largest no is '+larg)

    //Task 9
    var lar = [24, 53, 78, 91, 12]
    var sm;
    document.write("Array Items: "+ lar)
    for (let i = 0; i < lar.length; i++) {
        sm = lar[i]
        for (let i = 0; i < lar.length; i++) {
            if(sm>lar[i]){
                sm=lar[i]
               
            }
            
        }
        
    }
    document.write('<br>The smallest no is '+sm)

    //Task 10
    for (let i = 1; i <= 100; i++) {
        if (i%5 == 0){
            document.writeln(i)
        }
        
    }


