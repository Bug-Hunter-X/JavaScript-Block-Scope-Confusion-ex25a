function myFunction() {
  let x = 10;
  if (true) {
    let x = 20; // This x is only accessible inside this block
    console.log(x); // Outputs 20
  }
  console.log(x); // Outputs 10, not 20 as expected by some
}