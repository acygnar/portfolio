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
        for (i = 0; i <= skills.length; i++) {
            skills[i].classList.add("active");
        }                                                   //toggle?
    } else {
        for (i = 0; i <= skills.length; i++) {
            skills[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", addSlideAnimation);

function galleryAppear(){
    const scrollSize = window.scrollY;
    if (scrollSize > 100) {
        spacer.classList.add("active")
        for (i = 0; i <= gallery.length; i++) {
            gallery[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", galleryAppear);