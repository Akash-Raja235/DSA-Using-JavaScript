<!-- Javascript fundamental -->
1.  words / keywords

---words----
     Anythings which are not related to js reserved words, called words like Akash, chacha, god, harsh, methai, great etc

----- keywords-------
     all reserved words are called keywords for, else, array,if try, catch, while, etc 


2. constants / variables
    constant and variables are use to store the data in memory
    varibles value can change later on. 
    but constant are fixed value which are not change later on.

3. Hoisting
  
 ---- Variablea are functions are hoisted which means the declaration of varibles and funcgion are moved on top of code during execution

 var a = 12 
 var a; declaration of variable
 a=2 ; -- inisialization of variable
 ..... code start...
 # var a; -- hoisted (behind the sceen)
 # default value of any varibles which are declared but not assigned any value are undefined
 console.log(a) -- op-- undefined because var a; default assign undefined
 var a = 12

 # NOTE ---
 undefined means varible are declared but value not assignecd yet
 not defined means variable are not declared even

 4. Data types in js
 there are types of data 
 --- primitives -- those data types which do not have brackets and vuled are coped directly like number, string, null, boolean etc
 ---- reference --- those data type which contain brackets [],{},() and its value is not directly coped its only copy reference like array, object
 JavaScript has 8 Datatypes
a. String
b. Number
c Bigint
d. Boolean
e. Undefined
f. Null
g. Symbol
h. Object

The Object Datatype
The object data type can contain:

a. An object
b. An array
c. A date


5. conditional --- if, else, else if
# if else example
if(true ya false(condition)){

}else{

}

# else if example

if(condition 1){

}else if(condition 2){

}else if(condition 3){

}else{

}
# truty and falsy
if(-1) { // its alo work

}

falsy value are = 0, false, null, undefined, NaN, document.all
truthy value = except falsy all are truthy
 esliye if(consition){

 }   me kuch v likho wo chlega qki ya to wo truthy hoga ya to falsy hoga if(7){
    consol.log("heyy")   // its work
 }
6. Loops --- for, while

for(start; end; change){

}

for(var a=0; a<12; a++){
    console.log(a)
}

while(true ya false ya condition){
    change
}

var a=12
while(a<20){
a++
console.log(a)
}

# forEach lopp
  ye sirf array ke sath chalta hai.
  forEach kabhi v main arry me change nhi karta hai wo refernce array me change karta h 
 
 ##### Example------------
  var a = [1,5,8,9,12,45,14]

  a.forEach(function(val){
    consol.log(val+2)
  })

# foein lopp 
  ye object ke liye use hota h
  ye v main object ko change nhi karta hai

  var obj = {
    name:"akash"
    age:24,
     city:"NOida"
  }
 
 for(var key in obj){
   console.log(key, obj[key])
 }

7. functions---(to give the name of multilple line of code)
there are 3 main use of function
a) to want diffent outputs to give diffent inputs
b)reuse the code
c) do not run code imediatly run in future

function oatsbnao(){
    console.log("oats lao")
    console.log("pateela  lao")
    console.log("pani boil karo")
    console.log("mix oats in water")
    console.log("wait and eat")
}

oatsbnao()

8. first class function
--- first class function is a function which is use as a value

example=====   var a = function(){}  yeha par function ek value ki tarah use ho rha hai

      function abcd(a){
        a()
      }

      abcd(function(){console.log("keyyyy")})



      
