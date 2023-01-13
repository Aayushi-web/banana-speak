// let btnTranslate= document.querySelector("#btn-translate")
// btnTranslate.addEventListener("click",function clickEventHanler(){
//     console.log("clicked")
// })
// let btn= document.querySelector("#btn-translate")
// btn.addEventListener("click",
// function clickevent(){
// document.getElementById("btn-translate").style.background="yellow"
// console.log("input",text.value)
// })
// let text= document.querySelector("#txt-input");


let text= document.querySelector("textarea");
let btn=document.querySelector("#btn-translate");
let outputDiv= document.querySelector("#output")
// outputDiv.innerText="Aayushi"
// text.addEventListener("input",function txt(){
//     console.log(text.value)
// })
btn.addEventListener("click",function cli(){
    document.getElementById("btn-translate").style.background="green"
   outputDiv.innerText="vm,m,.cbm."+text.value
})