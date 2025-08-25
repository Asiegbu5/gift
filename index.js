// for external js
let frank = document.querySelectorAll(".calculatorcontainer button");
console.log(frank);
let gift = document.getElementById("input")
// loop through the buttons
frank.forEach((btn) => {
    btn.addEventListener("click", () => {
        let buttonContent = btn.textContent;
        if(buttonContent === "AC") {
            clearData()
        }else if (buttonContent === "="){
            Evaluate()
        }else if (buttonContent === "+/-") {
            clearOne()
        }
        else{
            appendValue(buttonContent)
        }
    })
});
//fn to clear data in input
const clearData = () => {
    input.value = ""
};
//fn to show content on input
const appendValue = (buttonContent) => {
    // let inputValue = input.value;
     input.value += buttonContent;
};
// run calculation
const Evaluate = () => {
    let inputValue = input.value;
    inputValue =inputValue.replace(/%/g, '100');
    try{
        input.value = eval(inputValue);
    } catch(e) {
        input.value = "Invalid Expression"
        input.style.color = "red";
        input.style.color = "left"
        setTimeout(() => {
            input.value = ""
            input.style.color = "black"
        }, 5000)
    }
    // let input.value = document.getElementById( "invalid Expression")
    // input.value.style.color("blue")
};

const clearOne = () => {
    let inputData = input.value;
    input.value = inputData.slice(0, -1)
} 
// let hamster = input.value;
// hamster.Error.style.color = (red)