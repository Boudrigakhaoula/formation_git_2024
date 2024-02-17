document.addEventListener("DOMContentLoaded", function() {
    // This function will run when the DOM is fully loaded
    // You can put your JavaScript code here
    // For example, you can add an event listener to the h1 element to change its color when clicked
    var h1Element = document.querySelector("h1");

    h1Element.addEventListener("click", function() {
        // Change the color of the h1 element to red when clicked
        h1Element.style.color = "red";
    });
});
