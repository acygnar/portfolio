const burger=document.querySelector(".burger");
const leftSide=document.querySelector(".left-side");
const rightSide=document.querySelector(".right-side");
const navList=document.querySelector(".nav");
const menu=document.querySelector(".menu");
const skillsDescription=document.querySelector(".skills-description");
const skills=document.querySelectorAll(".skill");




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
    const skillsPosition=skillsDescription.offsetTop;
    if(scrollSize>skillsPosition){
        for(i=0;i<=skills.length;i++){
            skills[i].classList.add("active");
            }
        }
    }

window.addEventListener("scroll",addAnimation);





    