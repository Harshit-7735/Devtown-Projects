let input = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");
// First initialize the string to store the input
let string = "";

// Now we will loop through all the buttons and add an event listener to each of them
let arr = Array.from(buttons);
arr.forEach((button) => {
 switch (button.innerHTML) {
    case "AC":
     button.addEventListener("click", () => {
        string = "";
        input.value = string;
     });
     break;
     case "DEL":
        button.addEventListener("click", () => {
            string = string.slice(0, -1);
            input.value = string;
        });
        break;
    case "=":
     button.addEventListener("click", () => {
        input.value = eval(string);
        string = input.value;
     });
     break;
    default:
     button.addEventListener("click", () => {
        // Append the button value to the string
        string += button.innerHTML;
        input.value = string;
     });
     break;
     }
})
