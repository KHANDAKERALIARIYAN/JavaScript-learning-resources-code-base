// javascript document object model 

// document.title 
// 'JS'
// document.title="Ariyan js"
// 'Ariyan js'
// document.body
// <body>​…​</body>​
// document.body.style.backgroundColor="gray"
// 'gray'
// document.body.style.color="red"
// 'red'

// DOM - Document Object Model 
// BOM - Browser Object Model

// window
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// window.document
// #document (http://127.0.0.1:3000/JS/1.html)
// window.document.body
// <body>​…​</body>​
// window.document.title
// 'JS'

// document.body
// <body>​<div class=​"container">​<div class=​"box">​Div 1​</div>​<div class=​"box">​Div 2​</div>​<div class=​"box">​Div 3​</div>​<div class=​"box">​Div 4​</div>​<div class=​"box">​Div 5​</div>​</div>​<script src=​"Dom.js">​</script>​</body>​
// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]
// document.body.childNodes[0]
// #text
// document.body.childNodes[1]
// <div class=​"container">​…​</div>​
// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// document.body.childNodes[1].childNodes[1]
// <div class=​"box">​Div 1​</div>​

// let con=document.body.childNodes[1]
// undefined
// con.firstChild
// #text
// con.lastChild
// #text
// con.firstElementChild
// <div class=​"box">​Div 1​</div>​
// con.lastElementChild
// <div class=​"box">​Div 5​</div>​
// con.firstElementChild.style.backgroundColor="red"
// 'red'
// con.lastElementChild.style.backgroundColor="BLUE"
// 'BLUE'
// con.firstElementChild.parentNode
// <div class=​"container">​…​</div>​
// con.firstElementChild.parentElement
// <div class=​"container">​…​</div>​

// document.body.firstChild
// #text
// document.body.firstElementChild
// <div class=​"container">​…​</div>​
// document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.firstElementChild.children[0]
// <div class=​"box">​Div 1​</div>​
// document.body.firstElementChild.children[0]
// <div class=​"box">​Div 1​</div>​
// document.body.firstElementChild.children[3].previousElementSibling
// <div class=​"box">​Div 3​</div>​
// document.body.firstElementChild.children[3].nextElementSibling
// <div class=​"box">​Div 5​</div>​
// document.body.firstElementChild.children[3].previousSibling
// #text
// document.body.firstElementChild.children[3].nextSibling
// #text

// table and script

// document.body.children
// HTMLCollection(3) [div.container, table, script]
// document.body.children[1]
// <table>​…​</table>​
// document.body.children[1].rows
// HTMLCollection(2) [tr, tr]
// document.body.children[1].caption
// null
// document.body.children[1].tHead
// null
// document.body.children[1].tFoot
// null
// document.body.children[1].tBodies
// HTMLCollection [tbody]

// selecting by ids,classes

// get element by class name
// let Box =document.getElementsByClassName("box")
// console.log(Box);
// Box[0].style.backgroundColor="red"
// Box[1].style.backgroundColor="gray"
// Box[2].style.backgroundColor="blue"
// Box[3].style.backgroundColor="yellow"
// Box[4].style.backgroundColor="pink"

// get element by id name
// document.getElementById("Last").style.backgroundColor="green"

// get element by query selector
// document.querySelector(".box").style.backgroundColor="red" // will change only one the 1st one
// document.querySelectorAll(".box").style.backgroundColor="red"//cannot change the color
// console.log(document.querySelectorAll(".box")) // will return the node list
// for printing all the elemnet of HTML
// document.querySelectorAll(".box").forEach(element=>{
//     console.log(element);
// })
// will print all the box into red color
// document.querySelectorAll(".box").forEach(element=>{
//     element.style.backgroundColor="red"
// })

// get element by tag name
// document.getElementsByTagName("div")
// HTMLCollection(7) [div.container, div.box, div.box, div.box, div.box, div.box, div#Last.box, Last: div#Last.box]

// matches closest contains
// e=document.getElementsByTagName("div")
// HTMLCollection(7) [div.container, div.box, div.box, div.box, div.box, div.box, div#Last.box, Last: div#Last.box]
// e[4].matches("#redbox")
// false
// e[1]
// <div class=​"box">​Div 1​</div>​
// e[6]
// <div id=​"Last" class=​"box">​Div 6​</div>​
// e[6].matches("#Last")
// true
// e[3].matches("html")
// false
// e[2].closest("html")
// <html lang=​"en">​scroll<head>​…​</head>​<body>​…​</body>​</html>​
// document.querySelector(".container").contains(e[2])
// true
