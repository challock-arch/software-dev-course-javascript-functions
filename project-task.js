/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/

// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// Script 1 - Greeting multiple users
const greet = function(name) {
   console.log(`Welcome, ${name}!`);
};

greet("Alice");
greet("Bob");
greet("Charlie");

//REFLECTION:
//The function in the reflection is the same aside from mine being an anonymous function.
//I think this is because Pooja and myself were confusing regular functions and anonymous functions.
//This difference has been made clear through seeing this example and others throughout the module.

/*ORIGINAL CODE
//console.log("Welcome, Alice!");
//console.log("Welcome, Bob!");
//console.log("Welcome, Charlie!");
*/
// Script 2 - Sum calculation
const sum = function(num1, num2) {
   console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
};

sum(5,10);

//REFLECTION
//This function has the same difference as the first. I also used console.log instead of return.
//This shows that while my use of console.log in this use case is technically correct, in order to make sure my functions work properly outside of the console, I need to rely on the return function.

//ORIGINAL CODE
//let num1 = 5, num2 = 10;
//let sum = num1 + num2;
//console.log("The sum of 5 and 10 is " + sum);

// Script 3 - Product calculation
//let product = num1 * num2;
//console.log("The product of 5 and 10 is " + product);

const product = function(num1, num2) {
   console.log(`The product of ${num1} and ${num2} is ${num1*num2}`);
};

product(5,10);

//REFLECTION
//This function has the same errors as the first two. Additionally, the second and third scripts I utilized back ticks and a printable statement to format the output differently.
//This use of a return statement can be helpful in providing context, but should be utilized outside of the function.

//ORIGINAL CODE
// Script 4 - Print names from a list

//ORIGINAL CODE
//let names = ["Alice", "Bob", "Charlie"];
//console.log("Names in the list:");
//for (let i = 0; i < names.length; i++) {
//    console.log(names[i]);
//}

function listNames(arrayNames) {
   for (let i=0; i < arrayNames.length; i++) {
      console.log(arrayNames[i]);
   };
};

let names = [`Alice`,`Bob`,`Charlie`];
console.log(`Names on the List:`);
listNames(names);

//REFLECTION
//This function is identical to the solution. I received help from Logan on this one as I was confused on how to get the information fed into the function.
//While discussing it with Logan, I realized I was feeding an array of parameters in when I should have a single parameter and feed an array of arguments in afterwards.
//This helped to give some context into how to structure parameters and arguments when utilizing functions.

/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!
