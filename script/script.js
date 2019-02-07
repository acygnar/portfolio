const burger=document.querySelector(".burger");
const leftSide=document.querySelector(".left-side");
const rightSide=document.querySelector(".right-side");
const navList=document.querySelector(".nav");
const menu=document.querySelector(".menu");
const tabContent=document.querySelectorAll(".tab-content");
const tabItem=document.querySelectorAll("tab-item");


function activeBurger(){
    burger.classList.toggle("active");
    leftSide.classList.toggle("active");
    rightSide.classList.toggle("active");
    navList.classList.toggle("active");
    menu.classList.toggle("active");
}
burger.addEventListener("click",activeBurger);





    