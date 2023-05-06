const numbers = [42, 65];

const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

const [first, second] = boxify(90, 34);

console.log(boxify(90, 34));
const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const [firstMovie, secondMovie] = student.movies;

// object destructurin
const { name, age } = { id: 12, name: "alu", salary: 3400, age: 14 };

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 67,
    address: "kumarkhali",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: "garmin",
    },
  },
};

const { machine, ide } = employee;
const { brand } = employee?.specification?.watch;
