import fs from 'fs';

function getLines(fileName) {
  const file = fs.readFileSync(fileName, 'utf-8');
  return file.split('\n');
}

const lines = getLines('data.txt');

// Inizializzo due array vuoti
const col1 = [];
const col2 = [];

lines.forEach((element) => {
  const [value1, value2] = element.split('   ');
  col1.push(value1);
  col2.push(value2);
});

console.log(col1, col2);
