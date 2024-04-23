// Function to check is a value number or not
function myIsNaN(value) {
  // Convert the value to a number using the unary plus operator (+)
  let num = +value;
  console.log(num);
  // Check if the value is NaN
  // A value is NaN if it is not equal to itself

  return num !== num;
}

// Function to check what user entered number or not
function checkNumber() {
  // Get the value entered by the user
  let inputValue = document.getElementById("inputValue").value;

  // Check if the entered value is a number using myIsNaN function
  if (!myIsNaN(inputValue)) {
    // If it's a number, display "The entered value is a number"
    document.getElementById("result").textContent =
      "The entered value is a number";
  } else {
    // If it's not a number, display "The entered value is not a number"
    document.getElementById("result").textContent =
      "The entered value is not a number";
  }
}
