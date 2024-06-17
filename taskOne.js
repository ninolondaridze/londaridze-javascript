function checkNumber (number) {
  if (number > 7) {
    console.log ('Hello');
  }
}

const number = prompt('Enter a number:');
checkNumber(number);

function checkName (name) {
  if (name === 'John') {
    console.log('Hello John')
  } else {
    console.log('There is no such name');
  }
}

const input = prompt("What's your name?");
checkName(input);

function multiplesOfThree (arr) {
  return arr.filter(x => x % 3 === 0);
}

const arrayInput = prompt("Enter numbers separated by spaces");
const array = arrayInput.split(' ').map(Number);
console.log('Multiples of 3 are:', multiplesOfThree(array));
