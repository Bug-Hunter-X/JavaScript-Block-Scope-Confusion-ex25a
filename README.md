# JavaScript Block Scope Gotcha

This repository demonstrates a common source of confusion for JavaScript developers: block scope.

Many programmers, particularly those coming from languages with only function scope, initially expect variables declared within blocks to be accessible outside those blocks.  This is not the case in JavaScript.

The `bug.js` file contains code that exemplifies this behavior. The `bugSolution.js` file does not contain a solution, as the behavior itself is not a bug, but rather an inherent aspect of JavaScript's scoping rules.  The solution is to understand block scope and adjust code accordingly.

To run the code, simply open `bug.js` in a JavaScript environment (like a browser's console or Node.js).