var fs = require("fs");
var fileContent = fs.readFileSync('file.txt');
console.log(fileContent.toString());
console.log("something else");