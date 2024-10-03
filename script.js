//Task 1
// Declaring an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Declaring an array of strings
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Declaring an array of mixed data types
let mixed = [10, "hello", true, null, { name: "Alice" }];

//Task 2
// Accessing the first element
let firstNumber = numbers[0];
let firstFruit = fruits[0];
let firstMixed = mixed[0];


// Accessing the last element
let lastNumber = numbers[numbers.length - 1];
let lastFruit = fruits[fruits.length - 1];
let lastMixed = mixed[mixed.length - 1];

// Accessing the middle element (assuming an odd number of elements)
let middleIndex = Math.floor(numbers.length / 2);
let middleNumber = numbers[middleIndex];
let middleFruit = fruits[middleIndex];
let middleMixed = mixed[middleIndex];

console.log("First number:", firstNumber);
console.log("First fruit:", firstFruit);
console.log("First mixed:", firstMixed);
console.log("Last number:", lastNumber);
console.log("Last fruit:", lastFruit);
console.log("Last mixed:", lastMixed);
console.log("Middle number:", middleNumber);
console.log("Middle fruit:", middleFruit);
console.log("Middle mixed:", middleMixed);

//Task 3
// Using the .length property
console.log("Number of numbers:", numbers.length);
console.log("Number of fruits:", fruits.length);
console.log("Number of mixed elements:", mixed.length);

//Task 4
// Using .pop() to remove the last element
numbers.pop();
fruits.pop();
mixed.pop();

console.log("Numbers after pop:", numbers);
console.log("Fruits after pop:", fruits);
console.log("Mixed after pop:", mixed);

// Using .push() to add elements to the end
numbers.push(6, 7);
fruits.push("pear", "pineapple");
mixed.push(false, "world");

console.log("Numbers after push:", numbers);
console.log("Fruits after push:", fruits);
console.log("Mixed after push:", mixed);

// Using .splice() to modify elements in place
numbers.splice(2, 1, 8); // Replace the element at index 2 with 8
fruits.splice(1, 2, "cherry", "strawberry"); // Remove elements at indices 1 and 2 and insert "cherry" and "strawberry"
mixed.splice(3, 0, "goodbye"); // Insert "goodbye" at index 3

console.log("Numbers after splice:", numbers);
console.log("Fruits after splice:", fruits);
console.log("Mixed after splice:", mixed);

//Task 5
// Using a for loop
for (let i = 0; i < numbers.length; i++) {
    console.log("Number:", numbers[i]);
  }
  
  for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
  }
  
  for (let i = 0; i < mixed.length; i++) {
    console.log("Mixed element:", mixed[i]);
  }
  
  // Using the forEach method
  numbers.forEach(number => {
    console.log("Number:", number);
  });
  
  fruits.forEach(fruit => {
    console.log("Fruit:", fruit);
  });
  
  mixed.forEach(element => {
    console.log("Mixed element:", element);
  });

  //Task 6
  // Destructuring the first two elements
const [firstNumberDestructured, secondNumberDestructured] = numbers;
const [firstFruitDestructured, secondFruitDestructured] = fruits;
const [firstMixedDestructured, secondMixedDestructured] = mixed;

console.log("First number (destructured):", firstNumberDestructured);
console.log("Second number (destructured):", secondNumberDestructured);
console.log("First fruit (destructured):", firstFruitDestructured);
console.log("Second fruit (destructured):", secondFruitDestructured);
console.log("First mixed (destructured):", firstMixedDestructured);
console.log("Second mixed (destructured):", secondMixedDestructured);

// Using the rest parameter
const [firstNumberRest, ...remainingNumbers] = numbers;
const [firstFruitRest, ...remainingFruits] = fruits;
const [firstMixedRest, ...remainingMixed] = mixed;

console.log("First number (rest):", firstNumberRest);
console.log("Remaining numbers:", remainingNumbers);
console.log("First fruit (rest):", firstFruitRest);
console.log("Remaining fruits:", remainingFruits);
console.log("First mixed (rest):", firstMixedRest);
console.log("Remaining mixed:", remainingMixed);