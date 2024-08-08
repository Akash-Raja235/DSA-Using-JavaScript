// -----string is nothing but collection of characters

let str = "Akasha"

// accessing string elemets
 console.log(str.length)
 console.log(str.charAt(1))
 console.log(str[3])

 // check elemets is present or not 
 console.log(str.includes("s"))
 console.log(str.search("Akash")) // 0= true -1 = flase
 console.log(str.indexOf("s"))
 console.log(str.lastIndexOf("a"))

 // check string two strings are equal or not

 let str1 = "akash"

 let str2 = "akashh"

 console.log(str1.localeCompare(str2)) // it give 0 when true otherwise it give -1

 // replace string or update string

 let firstline  = "Akash is the best developer, Akash is doing great work"

 console.log(firstline.replace("Akash","sachin"))

 // replace all Akash

 console.log(firstline.replaceAll("Akash","Sachin"))


 // substring from string

 let keppstr = 'Akash is great man'

 console.log(keppstr.substring(5))
 console.log(keppstr.substring(5,12))

 console.log(keppstr.slice(5,12))
 console.log(keppstr.slice(-10,-1))

  // spliting string

  let  strg = "Akash is a developer. SAtyam is advocate"

  console.log(strg.split(".")) // its return  array of tring
 
  console.log(strg.split(" ").join(" "))


  // check subtring start with or end with 

  let mm ="delhi is capital city"

  console.log(mm.startsWith("delhi")) // true
  console.log(mm.endsWith("city")) // true
  console.log(mm.endsWith("kk")) // false

  // remove some etra spalce from strings

  let name ="    Ak   ash     "

  console.log(name.trim()) // Akash it only remove space of staring and end. it can't remove space in  between 



  // convert other data type into string

  // number into string
  let num = 10

  console.log(num.toString()) // '10'

  // object into string

  let obj = {name:"Akash Raja", age:24, city:"Noida"}

  let covert = JSON.stringify(obj)
  // string into obj
    let objAgain = JSON.parse(covert)
  console.log(objAgain)
  console.log(typeof objAgain)


  // concate two strings

  let n = "hey"
  let m = " Akash"
                         

  console.log(n.concat(m," keep away from me"," okkk"))

  console.log(n+m)


  // how to reverse a word in a string

  let s = "  a good   example    "
     console.log("reversemmm",s.replace(/\s+/g,' '))
  



