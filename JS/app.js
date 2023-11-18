//Task1

// create object person
const person = {
    fname: "Sara",
    lname: "Waleed",
    age: 21,
    city: "Cairo"
}

//change obj to Json 
const personToJson = JSON.stringify(person)

const fs = require("fs")

//store in file 
fs.writeFileSync("Person.json", personToJson)

//read file (json)
const readData = fs.readFileSync("Person.json").toString()
console.log(readData)

//Convert to obj 
const personToObject = JSON.parse(readData)

//Update data to ( adel ahmed , 40 , cairo) 
personToObject.fname = "adel"
personToObject.lname = "ahmed"
personToObject.age = 40
personToObject.city = "Alex"


//convert obj to Json 
const objectToJson = JSON.stringify(personToObject)
console.log(objectToJson)

//store in file (writeFileSync)
fs.writeFileSync("Update.json", objectToJson)


