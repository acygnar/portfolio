const burger=document.querySelector(".burger");
const leftSide=document.querySelector(".left-side");
const rightSide=document.querySelector(".right-side");
const navList=document.querySelector(".nav");
const menu=document.querySelector(".menu");
const skills=document.querySelector(".skills-description");
const firstSkill=document.querySelector(".content .technologies .skills :nth-child(1)");




function activeBurger(){
    burger.classList.toggle("active");
    leftSide.classList.toggle("active");
    rightSide.classList.toggle("active");
    navList.classList.toggle("active");
    menu.classList.toggle("active");
}
burger.addEventListener("click",activeBurger);

function addAnimation(){
    const scrollSize= window.scrollY;
    const skillsPosition=skills.offsetTop;
    if(scrollSize>skillsPosition){
        firstSkill.classList.add("active");

    }
         }

window.addEventListener("scroll",addAnimation);





    