// Array - mutable not like string

// let arr=[1,2,3,4,5];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr.length);
// console.log(typeof(arr)) //object - why?
// arr[0]=10;
// console.log(arr);

// method 

// 1. push() – Add Element to End
// Adds one or more elements to the end of an array.
// let arr = [1, 2, 3];
// arr.push(4); 
// console.log(arr); // [1, 2, 3, 4]

// 2. pop() – Remove Last Element
// Removes and returns the last element.
// let arr = [1, 2, 3];
// arr.pop(); 
// console.log(arr); // [1, 2]

// 3. shift() – Remove First Element
// Removes and returns the first element.
// let arr = [1, 2, 3];
// arr.shift();
// console.log(arr); // [2, 3]

// 4. unshift() – Add Element to Start
// Adds one or more elements to the beginning of an array.
// let arr = [2, 3];
// arr.unshift(1);
// console.log(arr); // [1, 2, 3]

// 5. slice() – Extract Part of an Array
// Returns a new array without modifying the original.
// let arr = [1, 2, 3, 4, 5];
// let sliced = arr.slice(1, 4);
// console.log(sliced); // [2, 3, 4]

// 6. concat() – Merge Arrays
// Combines two or more arrays into a new one.
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let result = arr1.concat(arr2);
// console.log(result); // [1, 2, 3, 4]

// 7. indexOf() – Find Element Index
// Returns the first index of a value or -1 if not found.
// let arr = ["a", "b", "c"];
// console.log(arr.indexOf("b")); // 1
// console.log(arr.indexOf("x")); // -1

// 8. includes() – Check if Element Exists
// Returns true if the element exists in the array.
// let arr = ["apple", "banana", "cherry"];
// console.log(arr.includes("banana")); // true
// console.log(arr.includes("grape")); // false

// 9. find() – Find First Matching Element
// Returns the first element that matches a condition.
// let arr = [10, 20, 30];
// let found = arr.find(num => num > 15);
// console.log(found); // 20

// 10. findIndex() – Find Index of First Match
// Returns the index of the first element that matches a condition.
// let arr = [10, 20, 30];
// let index = arr.findIndex(num => num > 15);
// console.log(index); // 1

// 11. sort() – Sort Elements
// Sorts an array alphabetically by default.
// let arr = [3, 1, 4, 2];
// arr.sort();
// console.log(arr); // [1, 2, 3, 4] 

// 12. reverse() – Reverse an Array
// Reverses the order of elements.
// let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); // [3, 2, 1]

// 13. join() – Convert Array to String
// Joins array elements into a single string.
// let arr = ["Hello", "World"];
// console.log(arr.join(" ")); // "Hello World"

// 14. splice() – this method is used to add, remove, or replace elements in an array. It modifies the original array in place and returns an array containing the removed elements.
// array.splice(startIndex, deleteCount, item1, item2, ...);
// startIndex → The index where the modification starts.
// deleteCount → The number of elements to remove (optional).
// item1, item2, ... → Elements to insert (optional).

// 1️⃣ Removing Elements:
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2); // Removes 2 elements starting from index 2
// console.log(arr); // [1, 2, 5]
// 🔹 Explanation: Removes 3 & 4 (index 2 and 3).

// 2️⃣ Adding Elements:
// let arr = [1, 2, 5];
// arr.splice(2, 0, 3, 4); // Inserts 3, 4 at index 2 without removing anything
// console.log(arr); // [1, 2, 3, 4, 5]
// 🔹 Explanation: Adds 3, 4 at index 2 without deletion.

// 3️⃣ Replacing Elements:
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1, "X"); // Replaces 3 with "X"
// console.log(arr); // [1, 2, "X", 4, 5]
// 🔹 Explanation: Removes 3 and replaces it with "X".

// 4️⃣ Removing All Elements from a Certain Index:
// let arr = [10, 20, 30, 40, 50];
// arr.splice(2); // Removes all elements from index 2 onward
// console.log(arr); // [10, 20]
// 🔹 Explanation: Deletes everything after index 2.

// 15. forEach() – Loop Over Elements
// The forEach() method is used to iterate over an array and execute a function for each element. It's commonly used for performing actions like logging, modifying, or interacting with each array element.
// array.forEach((element, index, array) => {
//     // Code to execute on each element
// });
// element → The current array item.
// index (optional) → The index of the current item.
// array (optional) → The entire array being iterated.

// 1️⃣ Basic Example: Logging Elements:
// let numbers = [1, 2, 3, 4];
// numbers.forEach(num => {
//     console.log(num);
// });
// // Output:
// // 1
// // 2
// // 3
// // 4
// 🔹 Explanation: Prints each number in the array.

// 2️⃣ Accessing Index:
// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.forEach((fruit, index) => {
//     console.log(`Index ${index}: ${fruit}`);
// });
// // Output:
// // Index 0: Apple
// // Index 1: Banana
// // Index 2: Cherry
// 🔹 Explanation: Shows both index and value.

// 3️⃣ Modifying Elements:
// let numbers = [1, 2, 3];
// numbers.forEach((num, index, arr) => {
//     arr[index] = num * 2; // Doubles each element
// });
// console.log(numbers); // [2, 4, 6]
// 🔹 Explanation: Modifies the original array by doubling each value.

// 4️⃣ Summing Elements:
// let numbers = [1, 2, 3, 4];
// let sum = 0;
// numbers.forEach(num => {
//     sum += num;
// });
// console.log(sum); // 10
// 🔹 Explanation: Adds up all numbers in the array.

// 5️⃣ Using forEach() on an Array of Objects:
// let users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];
// users.forEach(user => {
//     console.log(`${user.name} is ${user.age} years old.`);
// });
// // Output:
// // Alice is 25 years old.
// // Bob is 30 years old.
// // Charlie is 35 years old.

// 16. map() – Transform Elements
// Creates a new array by applying a function to each element.
// The map() method is used to create a new array by applying a function to each element of an existing array. It does not modify the original array.
// let newArray = array.map((element, index, array) => {
//     return transformedValue;
// });
// element → The current item in the array.
// index (optional) → The index of the current item.
// array (optional) → The original array.

// 1️⃣ Basic Example: Doubling Numbers:
// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8]
// 🔹 Explanation: Each number is doubled, and a new array is returned.

// 2️⃣ Converting Strings to Uppercase:
// let names = ["alice", "bob", "charlie"];
// let uppercased = names.map(name => name.toUpperCase());
// console.log(uppercased); // ["ALICE", "BOB", "CHARLIE"]
// 🔹 Explanation: Converts all names to uppercase.

// 3️⃣ Mapping an Array of Objects:
// let users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];
// let userNames = users.map(user => user.name);
// console.log(userNames); // ["Alice", "Bob", "Charlie"]
// 🔹 Explanation: Extracts only the names from an array of objects.

// 4️⃣ Mapping and Adding Extra Data:
// let prices = [10, 20, 30];
// let pricesWithTax = prices.map(price => ({
//     price: price,
//     tax: price * 0.1,
//     total: price * 1.1
// }));
// console.log(pricesWithTax);
// /*
// [
//   { price: 10, tax: 1, total: 11 },
//   { price: 20, tax: 2, total: 22 },
//   { price: 30, tax: 3, total: 33 }
// ]
// */
// 🔹 Explanation: Returns an array of objects with additional tax calculations.

// 5️⃣ Using map() with Index:
// let numbers = [10, 20, 30];
// let indexedArray = numbers.map((num, index) => `Index ${index}: ${num}`);
// console.log(indexedArray);
// ["Index 0: 10", "Index 1: 20", "Index 2: 30"]

// 📌 17. filter() – Get Specific Elements
// Creates a new array with elements that pass a condition.
// The filter() method is used to create a new array containing only elements that pass a specific condition. It does not modify the original array.
// let newArray = array.filter((element, index, array) => {
//     return condition;
// });
// element → The current item in the array.
// index (optional) → The index of the current item.
// array (optional) → The original array.

// 1️⃣ Filtering Even Numbers:
// let numbers = [1, 2, 3, 4, 5, 6];
// let evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); // [2, 4, 6]
// 🔹 Explanation: Returns only the even numbers.

// 2️⃣ Filtering Words with More Than 4 Letters:
// let words = ["apple", "bat", "banana", "cat"];
// let longWords = words.filter(word => word.length > 4);
// console.log(longWords); // ["apple", "banana"]
// 🔹 Explanation: Filters words that have more than 4 letters.

// 3️⃣ Filtering Objects by Property:
// let users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 17 },
//     { name: "Charlie", age: 30 }
// ];
// let adults = users.filter(user => user.age >= 18);
// console.log(adults);
// // [
// //   { name: "Alice", age: 25 },
// //   { name: "Charlie", age: 30 }
// // ]
// 🔹 Explanation: Returns only users with age 18 or more.

// 4️⃣ Filtering Out Falsy Values:
// let values = [0, 1, "", "hello", undefined, false, 42];
// let truthyValues = values.filter(Boolean);
// console.log(truthyValues); // [1, "hello", 42]
// 🔹 Explanation: Removes all falsy values (0, "", false, undefined, null, NaN).

// 5️⃣ Filtering Unique Elements:
// let numbers = [1, 2, 2, 3, 4, 4, 5];
// let uniqueNumbers = numbers.filter((num, index, arr) => arr.indexOf(num) === index);
// console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// 📌 18. reduce() – Accumulate Values
// The reduce() method is used to process an array and reduce it to a single value (sum, product, object, etc.). It is commonly used for calculations, transformations, and aggregations.
// array.reduce((accumulator, currentValue, index, array) => {
//     return newValue;
// }, initialValue);
// accumulator → Holds the accumulated result (initially set to initialValue).
// currentValue → The current element in the array.
// index (optional) → The index of currentValue.
// array (optional) → The original array.
// initialValue (optional) → The starting value for accumulator.

// 1️⃣ Summing All Elements:
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 15
// 🔹 Explanation: Adds each number to acc (starting from 0).

// 2️⃣ Finding Maximum Value:
// let numbers = [10, 5, 20, 8];
// let max = numbers.reduce((acc, num) => Math.max(acc, num), -Infinity);
// console.log(max); // 20
// 🔹 Explanation: Compares acc (max so far) with each number.

// 3️⃣ Flattening a Nested Array:
// let nested = [[1, 2], [3, 4], [5, 6]];
// let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// console.log(flat); // [1, 2, 3, 4, 5, 6]
// 🔹 Explanation: Merges all sub-arrays into one.

// 4️⃣ Counting Occurrences in an Array:
// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let count = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {});
// console.log(count);
// // { apple: 3, banana: 2, orange: 1 }
// 🔹 Explanation: Uses an object to count occurrences of each fruit.

// 5️⃣ Creating an Object from an Array:
// let users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" }
// ];

// let userMap = users.reduce((acc, user) => {
//     acc[user.id] = user.name;
//     return acc;
// }, {});
// console.log(userMap);
// { 1: "Alice", 2: "Bob", 3: "Charlie" }

// These methods help in manipulating arrays efficiently. Depending on what you're working on, methods like map(), filter(), and reduce() are powerful for data processing.
