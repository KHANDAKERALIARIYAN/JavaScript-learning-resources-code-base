// let button =document.getElementById("btn")
// button.addEventListener("click",()=>{ - will change the color if you clicked your mouse
//     alert("You clicked me")
//     document.querySelector(".box").style.backgroundColor="red";
//     document.querySelector(".box").innerHTML="Clicked";
// })

// button.addEventListener("dblclick",()=>{ - will change the color if you double clicked your mouse
//     document.querySelector(".box").style.backgroundColor="red";
//     document.querySelector(".box").innerHTML="Clicked";
// })

// button.addEventListener("contextmenu",()=>{
//     alert("Donot clicked this button")
// })

// button.addEventListener("keydown",(e)=>{
//     console.log(e.key,e.keyCode);
// })

// event bubbling
// document.querySelector(".child").addEventListener("click", (e) => {
//     e.stopPropagation()
//     alert("Child was clicked me")
// })
// document.querySelector(".childcontainer").addEventListener("click", (e) => {
//     e.stopPropagation()
//     alert("child container was clicked me")
// })
// document.querySelector(".container").addEventListener("click", () => {
//     alert("Container was clicked me")
// })

// will change the color
// setInterval(() => {
//     document.querySelector(".conatiner").style.backgroundColor = "blue"
// }, 1000);

// let a = setInterval(() => {
//     document.querySelector(".container").style.backgroundColor = "blue"
// }, 1000);
// console.log(a);

// let a = setTimeout(() => {
//     document.querySelector(".container").style.backgroundColor = "blue"
// }, 1000);
// console.log(a);