const fontSizeControl = document.querySelector("#font-size-control");
const someText = document.querySelector("#text");

const changeFontSize = (event) => someText.style.fontSize = `${event.currentTarget.value}px`; 

fontSizeControl.addEventListener("input", changeFontSize);
