

//exp1

const fs = require('fs');

const fileName = 'data.txt';

// create the file
fs.writeFileSync(fileName, 'Hello, this is my file!');
console.log('File created successfully.');

// read the file
let data = fs.readFileSync(fileName, 'utf8');
console.log('File Content:', data);

// update the file
fs.appendFileSync(fileName, '\nThis is updated content.');
console.log('File updated successfully.');

// READ 
data = fs.readFileSync(fileName, 'utf8');
console.log('Updated File Content:', data);
//delete
fs.unlinkSync(fileName);
console.log('File deleted successfully.');
