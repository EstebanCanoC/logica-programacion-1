// Function to ask multiple times to ensure that the data exists and complies with the type
function askNumber(message) {
  let num;
  let input;
  do {
    input = prompt(message); // input hanndle
    num = parseInt(input); // Convert string to a Number to work with numbers
  } while (isNaN(num) || input === ""); // Check for the typeOf !=Number or the field is empty
  return num;
}

// Ask the user for three numbers
const numA = askNumber("Introduce el primer número:");
const numB = askNumber("Introduce el segundo número:");
const numC = askNumber("Introduce el tercer número:");

// Function to sort numbers in ascending order
function ascendNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

// Function to sort numbers in descending order
function descendNumbers(numbers) {
  return numbers.sort((a, b) => b - a);
}

// Switch to handle cases
switch (true) {
  case numA === numB && numB === numC:
    console.log(`Los tres números son iguales: ${numA} | ${numB} | ${numC}`);
    break;
  case numA === numB && numB !== numC:
    console.log(
      `A & B son iguales: A = ${numA} | B = ${numB}\nPero C es diferente: C = ${numC}`
    );
    console.log(
      `Números ascendentes:  ${ascendNumbers([numA, numB, numC]).join(" < ")}`
    );
    console.log(
      `Números descendentes: ${descendNumbers([numA, numB, numC]).join(" > ")}`
    );
    break;
  case numA !== numB && numB === numC:
    console.log(
      `B & C son iguales: B = ${numB} | C = ${numC}\nPero A es diferente: A = ${numA}`
    );
    console.log(
      `Números ascendentes:  ${ascendNumbers([numA, numB, numC]).join(" < ")}`
    );
    console.log(
      `Números descendentes: ${descendNumbers([numA, numB, numC]).join(" > ")}`
    );
    break;
  case numA === numC && numA !== numB:
    console.log(
      `A & C son iguales: A = ${numA} | C = ${numC}\nPero B es diferente: B = ${numB}`
    );
    console.log(
      `Números ascendentes:  ${ascendNumbers([numA, numB, numC]).join(" < ")}`
    );
    console.log(
      `Números descendentes: ${descendNumbers([numA, numB, numC]).join(" > ")}`
    );
    break;
  default:
    console.log(
      `Todos los números son diferentes: A = ${numA} | B = ${numB} | C = ${numC}`
    );
    console.log(
      `Números ascendentes:  ${ascendNumbers([numA, numB, numC]).join(" < ")}`
    );
    console.log(
      `Números descendentes: ${descendNumbers([numA, numB, numC]).join(" > ")}`
    );
    break;
}
