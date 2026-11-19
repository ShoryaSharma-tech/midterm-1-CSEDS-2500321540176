


const fs = require('fs');

const fileName = 'data.txt';


fs.writeFileSync(fileName, 'Hello, this is my file!');
console.log('File created successfully.');


let data = fs.readFileSync(fileName, 'utf8');
console.log('File Content:', data);


fs.appendFileSync(fileName, '\nThis is updated content.');
console.log('File updated successfully.');


data = fs.readFileSync(fileName, 'utf8');
console.log('Updated File Content:', data);

fs.unlinkSync(fileName);
console.log('File deleted successfully.');
