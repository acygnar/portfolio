const burger = document.querySelector(".burger");
const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const navList = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const skillsDescription = document.querySelector(".skills-description");
const skills = document.querySelectorAll(".skill");
const spacer = document.querySelector(".section-spacer");
const gallery = document.querySelectorAll(".image");




function activeBurger() {
    burger.classList.toggle("active");
    leftSide.classList.toggle("active");
    rightSide.classList.toggle("active");
    navList.classList.toggle("active");
    menu.classList.toggle("active");
}
burger.addEventListener("click", activeBurger);

function addSlideAnimation() {
    const scrollSize = window.scrollY;
    const skillsPosition = skillsDescription.offsetTop-150;
    if (scrollSize > skillsPosition) {
        skills.forEach((skill) => {skill.classList.add("active")});                                            
    }
}

window.addEventListener("scroll", addSlideAnimation);

function galleryAppear(){
    const scrollSize = window.scrollY;
    if (scrollSize > 100) {
        spacer.classList.add("active")
        gallery.forEach((img) => {img.classList.add("active")});     
        }
    }
window.addEventListener("scroll", galleryAppear);