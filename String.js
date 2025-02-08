// String

// let n="Ariyan";
// console.log(n);
// console.log(n[2])
// console.log(n.length);

//use of backlit
// let real_name="Ariyan";
// let friend ="Fahim";
// console.log("My name is "+real_name+" and my friend's name is "+friend);
// console.log(`My name is ${real_name} and my friend's name is ${friend}`);

// escape sequence
// \n - new line    
// \t - tab
// \b - back space
// \r - return

// let name="Ariyan";
// console.log(name);
// console.log(name[0]);
// console.log(name[2]);
// console.log(name.length);

// In JavaScript, strings have several useful built-in methods. Here are some of the most important ones:

// 1. trim()
// Removes whitespace from both ends of a string.
// let text = "  Hello World!  ";
// console.log(text.trim()); // "Hello World!"

// 2. toUpperCase() / toLowerCase()
// Converts a string to uppercase or lowercase.
// let text = "Hello";
// console.log(text.toUpperCase()); // "HELLO"
// console.log(text.toLowerCase()); // "hello"

// 3. includes()
// Checks if a string contains a specific substring (returns true or false).
// let text = "Hello World!";
// console.log(text.includes("World")); // true

// 4. indexOf()
// Finds the first occurrence of a substring; returns -1 if not found.
// let text = "Hello World!";
// console.log(text.indexOf("World")); // 6

// 5. slice(start, end)
// Extracts a section of a string.
// let text = "Hello World!";
// console.log(text.slice(0, 5)); // "Hello"

// 6. substring(start, end)
// Similar to slice(), but does not accept negative indices.
// console.log(text.substring(0, 5)); // "Hello"

// 7. replace(search, replaceWith)
// Replaces a substring with another string.
// let text = "Hello World!";
// console.log(text.replace("World", "JavaScript")); // "Hello JavaScript!"

// 8. split(delimiter)
// Splits a string into an array based on a delimiter.
// let text = "apple,banana,orange";
// console.log(text.split(",")); // ["apple", "banana", "orange"]

// 9. charAt(index)
// Returns the character at a specified index.
// let text = "Hello";
// console.log(text.charAt(1)); // "e"

// 10. concat()
// Joins two or more strings together.
// let first = "Hello";
// let second = "World";
// console.log(first.concat(" ", second)); // "Hello World"

// 11. startsWith()
// Checks if a string starts with a specified substring.
// let text = "Hello World!";
// console.log(text.startsWith("Hello")); // true
// console.log(text.startsWith("World")); // false
// console.log(text.startsWith("H")); // true

// 12. endsWith()
// Checks if a string ends with a specified substring.
// let text = "Hello World!";
// console.log(text.endsWith("World!")); // true
// console.log(text.endsWith("Hello")); // false
// console.log(text.endsWith("!")); // true