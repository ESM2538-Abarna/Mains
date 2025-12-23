// Show a message in the browser console
console.log("Hello, JavaScript!");

// Change text on a webpage
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  const text = document.getElementById("myText");

  button.addEventListener("click", () => {
    text.textContent = "You clicked the button!";
  });
});
