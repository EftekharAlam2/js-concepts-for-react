const fatherName = "Arnold";
let season = "rainy";
season = "winter";

if (fatherName === "arnold" || season === "rainy") {
} else if (fatherName === "Arnold") {
} else {
}

const numbers = [89, 35, 98, 12];
numbers[0] = 56;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  confirm.log(number);
}

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

const output = multiply(35, 78);

const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const myVariable = "age";

console.log(student.age); // direct by property
console.log(student["age"]); // access via property name string
console.log(student[myVariable]); // access via property name in a variable
