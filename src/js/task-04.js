const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
const text = document.querySelector("#value");
let counterValue = 0;
const decrementBtnClick = () => {
    counterValue -= 1;
return text.textContent = counterValue
}



const incrementBtnClick = () => {
   counterValue += 1;
return text.textContent = counterValue
}
    
decrementBtn.addEventListener("click", decrementBtnClick);
incrementBtn.addEventListener("click", incrementBtnClick);
