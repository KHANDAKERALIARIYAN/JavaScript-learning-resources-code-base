// javascript document object model 

// BOM - Browser Object Model

{/* <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
    <div class="box">Box 4</div>
    <div class="box">Box 5</div>
    <div id="Last" class="box">Box 6</div>
</div> */}

// window
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// window.document
// #document (http://127.0.0.1:3000/JS/1.html)
// window.document.body
// <body>​…​</body>​
// window.document.title
// 'JS'

// DOM - Document Object Model 

// document.title - it will show the title of the page
// 'JS'
// document.title="Ariyan js" - it will change the title
// 'Ariyan js'
// document.body - it will show the body of the page with html tags
// <body>​…​</body>​
// document.body.style.backgroundColor="gray" - it will change the background color
// 'gray'
// document.body.style.color="red" - it will change the color
// 'red'

// document.body - it will show the body of the page with html tags
// <body>​<div class=​"container">​<div class=​"box">​Div 1​</div>​<div class=​"box">​Div 2​</div>​<div class=​"box">​Div 3​</div>​<div class=​"box">​Div 4​</div>​<div class=​"box">​Div 5​</div>​</div>​<script src=​"Dom.js">​</script>​</body>​
// document.body.childNodes - it will show the child nodes of the body
// NodeList(5) [text, div.container, text, script, text]
// document.body.childNodes[0] - it will show the first child node of the body
// #text
// document.body.childNodes[1] - it will show the second child node of the body
// <div class=​"container">​…​</div>​
// document.body.childNodes[1].childNodes - it will show the child nodes of the container 
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// document.body.childNodes[1].childNodes[1] - it will show the first child node of the container
// <div class=​"box">​Div 1​</div>​

// let con=document.body.childNodes[1] - we storing inside a variable 
// undefined
// con.firstChild - it will show the first child of the container
// #text
// con.lastChild - it will show the last child of the container
// #text
// con.firstElementChild - it will show the first element child of the container (html tag)
// <div class=​"box">​Div 1​</div>​
// con.lastElementChild - it will show the last element child of the container (html tag)
// <div class=​"box">​Div 5​</div>​
// con.firstElementChild.style.backgroundColor="red" - it will change the background color
// 'red'
// con.lastElementChild.style.backgroundColor="BLUE" - it will change the background color
// 'BLUE'
// con.firstElementChild.parentNode - it will show the parent node of the first element child of the container
// <div class=​"container">​…​</div>​
// con.firstElementChild.parentElement - it will show the parent element of the first element child of the container
// <div class=​"container">​…​</div>​
// document.body.firstChild - it will show the first child of the body
// #text
// document.body.firstElementChild - it will show the first element child of the body
// <div class=​"container">​…​</div>​
// document.body.firstElementChild.childNodes - it will show the child nodes of the first element child of the body
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// document.body.firstElementChild.children - it will show the children of the first element child of the body
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.firstElementChild.children[0] - it will show the first child of the first element child of the body
// <div class=​"box">​Div 1​</div>​
// document.body.firstElementChild.children[0] - it will show the first child of the first element child of the body
// <div class=​"box">​Div 1​</div>​
// document.body.firstElementChild.children[3].previousElementSibling - it will show the previous element sibling of the first element child of the body
// <div class=​"box">​Div 3​</div>​ 
// document.body.firstElementChild.children[3].nextElementSibling - it will show the next element sibling of the first element child of the body
// <div class=​"box">​Div 5​</div>​
// document.body.firstElementChild.children[3].previousSibling - it will show the previous sibling of the first element child of the body
// #text
// document.body.firstElementChild.children[3].nextSibling - it will show the next sibling of the first element child of the body
// #text 

// table and script

{/* <table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Harry</td>
    <td>100</td>
  </tr>
</table> */}

// document.body.children - it will show the children of the body
// HTMLCollection(3) [div.container, table, script]
// document.body.children[1] - it will show the second child of the body so we access the table
// <table>​…​</table>​
// document.body.children[1].rows - it will show the rows of the table
// HTMLCollection(2) [tr, tr]
// document.body.children[1].caption - it will show the caption of the table
// null
// document.body.children[1].tHead - it will show the thead of the table
// null
// document.body.children[1].tFoot - it will show the tfoot of the table
// null
// document.body.children[1].tBodies - it will show the tbody of the table
// HTMLCollection [tbody]

// selecting by ids,classes

// let Box =document.getElementsByClassName("box") - we storing inside a variable - we are selecting by class
// console.log(Box);
// Box[0].style.backgroundColor="red"
// Box[1].style.backgroundColor="gray"
// Box[2].style.backgroundColor="blue"
// Box[3].style.backgroundColor="yellow"
// Box[4].style.backgroundColor="pink"
// document.getElementById("Last").style.backgroundColor="green" - we are selecting by id                                                                                                                  
// document.querySelector(".box").style.backgroundColor="red" // will change only one the 1st one - we selecting by queryselector
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
// document.getElementsByTagName("div") - we are selecting by tagname
// HTMLCollection(7) [div.container, div.box, div.box, div.box, div.box, div.box, div#Last.box, Last: div#Last.box]

// matches / closest / contains
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

// inner html / inner text / outer html / outer text / tag name / node name
// document.querySelector(".box")
// <div class=​"box">​Div 1​</div>​
// document.querySelector(".box").innerHTML
// 'Div 1'
// document.querySelector(".container")
// <div class=​"container">​…​</div>​
// document.querySelector(".container").innerHTML
// '\n        <div class="box">Div 1</div>\n    '
// document.querySelector(".box").innerText
// 'Div 1'
// document.querySelector(".container").innerText
// 'Div 1'
// document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">Div 1</div>\n    </div>'
// document.querySelector(".container").tagName
// 'DIV'
// document.querySelector(".container").nodeName
// 'DIV'
// document.querySelector(".container").textContent
// '\n        Div 1\n    '
// document.querySelector(".container").hidden
// false
// document.querySelector(".container").hidden=true
// true
// document.querySelector(".container").hidden=false
// false
// document.querySelector(".box").innerHTML="Hey Ariyan"
// 'Hey Ariyan'
// document.querySelector(".box").hasAttribute("style")
// false
// document.querySelector(".box").getAttribute("style")
// null
// document.querySelector(".box").setAttribute("style","display: inline")
// undefined
// document.querySelector(".box").hasAttribute("style")
// true
// document.querySelector(".box").getAttribute("style")
// 'display: flex;'
// document.querySelector(".box").setAttribute("style","display: inline")
// undefined
// document.querySelector(".box").attributes -  will see all the attributes
// NamedNodeMap {0: style, 1: class, style: style, class: class, length: 2}
// document.querySelector(".box").removeAttribute("style") - will remove the attribute
// undefined

// document.designMode="on" - we change anything on the page
// 'on'
// document.querySelector(".box").dataset
// DOMStringMap {createdby: 'Ariyan'}

// creating elements and appending
// let div=document.createElement("div");
// div.innerHTML="I have been inserted <b>by Harry </b>"
// div.setAttribute("class","created");
// document.querySelector(".container").append(div) // will show at last
// document.querySelector(".container").prepend(div) // will show at 1st
// document.querySelector(".container").before(div) // will show before node
// document.querySelector(".container").after(div) // will show after node
// document.querySelector(".container").replaceWith(div) // will replace with box

// inserting adjacent html
// let contain=document.querySelector(".container");
// contain.insertAdjacentHTML("beforebegin","<h1>Created by Ariyan</h1>")
// contain.insertAdjacentHTML("afterbegin","<h1>Created by Ariyan</h1>")
// contain.insertAdjacentHTML("beforeend","<h1>Created by Ariyan</h1>")
// contain.insertAdjacentHTML("afterend","<h1>Created by Ariyan</h1>")
// document.querySelector(".box").remove()
// document.querySelector(".box").remove()
// undefined
// document.querySelector(".container").remove()
// undefined

// document.querySelector(".container")
// <div class=​"container box bgGreen">​…​</div>​
// document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'box', 'bgGreen', value: 'container box bgGreen']
// document.querySelector(".container").className
// 'container box bgGreen'
// document.querySelector(".container").classList.add("Harry")
// undefined
// document.querySelector(".container").classList.remove("Harry")
// undefined
// document.querySelector(".container").classList.remove("red")
// undefined
// document.querySelector(".container").classList.add("Hola")
// undefined
// document.querySelector(".container").classList.toggle("red")
// true
// document.querySelector(".container").classList.toggle("red")
// false
