/*  get element by id

console.dir(document.getElementById("main-heading"));
console.log(document.getElementById("main-heading"));
const ans =document.getElementById("main-heading");
console.log(ans);

textContent

const mainHeading= document.getElementById("main-heading");
console.log(mainHeading.textContent);
mainHeading.textContent="i am nitish";
console.log(mainHeading.textContent);

const mainHeading= document.getElementById("main-heading").textContent="i am nitish";
console.log(mainHeading);*/


//innertext 
//console.log(document.getElementById("main-heading").innerText="i am nitish");

//qureySelecter

//console.log(document.querySelector("#main-heading").innerText="i am nitish");
//console.log(document.querySelector(".logo").innerText="i am nitish");
//console.log(document.querySelector("div.headline h2").innerText="i am nitish"); 

//querySelecterAll
//console.log(document.querySelectorAll("#main-heading").innerText="i am nitish");

//change style of the element

//console.log(document.querySelector("div.headline h2").style.backgroundColor="blue"); 
//const mainheading=document.querySelector("div.headline h2"); 
//mainheading.style.backgroundColor="red";
//mainheading.style.border="20px solid blue"

/*const btn= document.querySelector(".btn-headline");
btn.addEventListener("click", ()=>{
  // const add= document.querySelector(".btn-headline")
   // const add= document.querySelector(".btn-headline").innerHTML="<h1>nitish</h1>"
    //add.style.backgroundColor="blue";


});*/



const todoForm= document.querySelector(".form-todo");
const todoInput= document.querySelector(".form-todo input[type='text']");
const todoList= document.querySelector(".todo-list");

const username=document.querySelector(".form-group input[type='text']")



todoForm.addEventListener("submit",(e)=>{
  e.preventDefault();

  const newLi = document.createElement('Li');
  const newLiInnerHtml= ` <span class="text"> ${todoInput.value}</span>
  <div><button class="todo-btn done ">Done</button>
  <button class="todo-btn remove">Remove</button></div>`
  newLi.innerHTML=newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value="";

})
todoList.addEventListener("click",(e)=>{
  if(e.target.classList.contains("done")){
    const liSpan= e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration="line-through"
  }
  if(e.target.classList.contains("remove")){
    const targatedLi = e.target.parentNode.parentNode;
    targatedLi.remove();
  }
})
username.addEventListener("click",(e)=>{
  e.preventDefault();
  const nav= document.querySelector("#nav3")
  nav.textContent=username.value

})




