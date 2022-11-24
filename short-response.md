# Unit 2 Assessment - JavaScript Fundamentals


## 1. What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide code snippets to illustrate hoisting for both.

**Hoisting** is a behavior of JavaScript in which function declarations (functions declared with the `function` keyword and _not_ function expressions) are "lifted" to the top of the file in which they were created.

The result of hoisting is that programs can invoke hoisted functions that are declared on lower lines in a file. 

For example:

```js
sayHello(); // Prints "hello"

function sayHello() {
  console.log("hello");
}

sayGoodbye(); // Throws an error
const sayGoodbye = function() {
  console.log("goodbye");
}
```

In this example, `sayHello` is declared _after_ it is invoked and yet the invocation is successful due to hoisting. The invocation of `sayGoodbye()` throws an error because function expressions are _not_ hoisted.

Hoisting also applies to variables declared using the `var` keyword. However, only the _variable declaration_ is hoisted, not the  _assignment_. As a result, hoisted variables that are referenced before their initialization will have a value of `undefined`. 

```js
console.log(foo); // This prints undefined
var foo = "ben";
console.log(foo); // This prints ben!

console.log(age); // This throws an error
let age = 100;
```

Variables declared with `let` or `const` are not hoisted. If they are referenced before their declaration, a `ReferenceError` will be thrown.


## 2. Why does the following block of code throw an error?
  ```javascript
  const isMaya = true;

  if (isMaya) {
    let currentStatus = 'Everything is just fine';
  } else {
    let currentStatus = 'Time to panic.'
  }

  console.log(currentStatus);
  ```

  This code block will throw a `ReferenceError` error because:
  * `currentStatus` is declared using `let` so it is block scoped to the `if` and `else` blocks.
  * The `console.log` statement at the end of the code block is in the global scope and it references `currentStatus` which is block scoped and NOT available in the global scope. The result is a `ReferenceError`.


## 3. Why does the following block of code NOT throw an error?

  ```javascript
  const isLaishaOnTime = true;

  if (isLaishaOnTime) {
    var currentStatus = 'Everything is just fine';
  } else {
    var currentStatus = 'Time to panic.'
  }

  console.log(currentStatus);
  ```

  This code block does NOT throw an error because, unlike the previous example, `currentStatus` is declared using the `var` keyword which is NOT block scoped. As a result, the `console.log()` statement has access to `currentStatus` even though it is declared inside of an `if`/`else` block.


## 4. In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.

* The `var` keyword declares a _function scoped_ variable that can be reassigned and whose _declaration_ is hoisted (but not its initialization).
* The `let` keyword declares a _block scoped_ variable that can be reassigned and is NOT hoisted.
* The `const` keyword declares a _block scoped_ variable that CANNOT be reassigned and is NOT hoisted.


## 5. What does the following code log? Explain why?
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```

  This code will log the string `"Kevin Durant"`. This is because objects are stored in variables as _object references_ and when `theGoat` is declared and assigned `bestPlayer`, `theGoat` is assigned the _reference_ to the `bestPlayer` object. 
  
  This means that both variables refer to the exact same object. As a result, when we mutate the object referenced by `bestPlayer` by changing the value of the `.name` property to `"Kevin Durant"`, we are mutating the same object referenced by `theGoat`. Therefore, `theGoat.name` is `"Kevin Durant"`.

## 6. What is the value of `b` after this code runs? Explain why this is the case.
  ```javascript
  let a = 10;
  let b = a;
  a += 10;

  console.log(a);
  console.log(b);
  ```

  The value of `b` after this code runs is `10`. Simple data types like Numbers are copied by _value_. This means that when we write `b = a`, we are copying the _value_ of `a` (`10`) and assigning it to `b`. After, when we reassign `a`, this has no effect on `b`, which still holds `10`.

## 7. Where does the following code throw an error? What type of error? Why?
  ```javascript
  const bffs = 'Enmanuel Laisha';
  bffs = 'Enmanuel Laisha Cielo';

  console.log(bffs);
  ```

  This code will throw a `TypeError` on line 2 when we try to reassign the constant variable `bffs`. This is because constant variables cannot be reassigned.

## 8. Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```

  This code will NOT throw an error because we never actually change the value of the variable `bffs`. The value of `bffs` remains the same — a reference to the Array. We can add values to array referenced by `bffs` without changing the reference stored in `bffs`, so this works! This demonstrates the _reference value_ of complex data types.

## 9. What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.

  Rest parameters are used to enable functions to accept any number of parameters. We use them by putting three dots (`...`) before a rest parameter name. A rest parameter must be the last parameter in a function declaration:

  ```js
  function myFunc(a, b, ...rest) {}
  ```

  Rest parameters differ from the `arguments` object in three ways:
  1. The `arguments` object is NOT an array while a rest parameter is an Array. This means we can do things like iterate through a rest parameter. 
  2. The `arguments` object also has additional features, like being able to show function that called the executing function.
  3. Rest parameters only store the arguments passed after the named parameters whereas the `arguments` object contains ALL of the arguments passed to a function. 

  Here is an example of a function `sum` that can add any number of arguments (at least 2 numbers must be provided though).

  ```js
  function sum (num1, num2, ...restNums) {
      let sum = num1 + num2;
      restNums.forEach(num => sum+=num);
      return sum;
  }
  
  sum(1, 2, 10); // returns 13
  sum(5); // returns 5
  sum(100, 200, 800, 1, 1, 1); // returns 1103;
  ```

## 10. What does the following code log? Why?
  ```javascript
  let theCreator = 'Devonte';

  function shoutOut() {
    theCreator = 'Peter';
    console.log(`The best designer in the room is ${theCreator}.`);
  }

  shoutOut();
  console.log(`The best designer in the room is ${theCreator}.`);
  ```

  This code prints `The best designer in the room is Peter` twice. 
  
  This is because first, the variable `theCreator` is declared in the global scope with `let`, meaning it can be reassigned anywhere in the program. When the function `shoutOut` is invoked, `theCreator` is reassigned with a value of `"Peter"`. Since both `console.log` statements occur after the reassignment, and both reference the same variable, both will print the `The best designer in the room is Peter`.

## 11. What does the following code log? Why?
  ```javascript
  let theHustler = 'Laisha';

  function shoutOut() {
    let theHustler = `Paul`;
    console.log(`${theHustler} is the hardest working person in the room.`);
  }

  shoutOut();
  console.log(`${theHustler} is also the hardest working person in the room.`);
  ```

  This code will first print `Paul is the hardest working person in the room.` and then `Laisha is also the hardest working person in the room.`. 
  
  This is because we first declare a globally scoped variable `theHustler` with the value `"Laisha"`. Then, when we invoke `shoutOut`, the keyword `let` declares `theHustler` as a new variable in the scope of `shoutOut`. Because we are declaring a new variable `theHustler` in the function's scope, the globally scoped variable `theHustler` is NOT reassigned. As a result, when we reference theHustler inside of shoutOut(), we get the function scoped value "Paul" and when we reference theHustler in the global scope, we get "Laisha".

## 12. What do we mean when we say that JavaScript passes variables _by value_?

  Passing variables _by value_ occurs when we assign a variable whose value is a simple data type to another variable, like so:

  ```js
  let a = 10;
  let b = a;
  a++;
  console.log(a, b); // 11, 10
  ```

  When passing a variable _by value_, the value of the copied variable (`a`) given to the new variable (`b`). After this, the variable `a` can be reassigned and it won't affect the value held by variable `b`. There is no lasting connection between the value held by `a` and by `b`.

## 13. What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?

  When we assign complex data types to variables, we aren't actually storing the literal array or object in the variable. Instead, the array or object is stored in the portion of the computer's memory (called the _heap_) and given an address. This address or _reference_ is what is stored in the variable.

  Passing _by reference_ occurs when we assign a variable whose value is a complex data type to another variable, like so:

  ```js
  let a = [1,2,3];
  // lets think of this as a = 0xd48af2 where 0xd48af2 is the address of the array in the heap.
  let b = a;
  // b now stores the same reference: b = 0xd48af2
  
  a.push(4)
  // add a new value to the array stored at location 0xd48af2
  
  console.log(b);
  // prints the array at location 0xd48af2
  // 1,2,3,4
  ```

  Since both variables reference the same array, when we mutate the array referenced by variable `a`, the mutations are being made to the exact same array referenced by variable `b`.

