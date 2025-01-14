The issue isn't a bug to be fixed, but a misunderstanding of block scope. To access the inner `x` value, you must log it *inside* the `if` block.  If you need the value outside the block, declare `x` outside the block. 

```javascript
function myFunction() {
  let x = 10;
  if (true) {
    x = 20; // Modifies the outer x
    console.log(x); // Outputs 20
  }
  console.log(x); // Outputs 20
}
```

Or, if you need separate variables:

```javascript
function myFunction() {
  let outerX = 10;
  if (true) {
    let innerX = 20;
    console.log(innerX); // Outputs 20
  }
  console.log(outerX); // Outputs 10
}
```