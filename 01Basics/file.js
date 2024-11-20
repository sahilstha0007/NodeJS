const { error } = require("console")
const fs = require("fs")

//Synchronous call
// fs.writeFileSync("./test.txt","Hello world")


//Asynchronous call
// fs.writeFile("./test.txt","Hello world",(error)=>{})

// Blocking and non blocking code

// const result = fs.readFileSync("./contacts.txt","utf-8")
// console.log(result)


// const result= fs.readFileSync('./contacts.txt',"utf-8");
// console.log(result)

// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });




// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString())
// File doesn't over right but it appends a new string object number or date

// fs.appendFileSync("./test.txt", `${Date.now()} Hey There \n`)

// fs.cpSync("./test.txt","copy.txt");

fs.unlinkSync("./copy.txt");
console.log(fs.statSync("./test.txt"))

