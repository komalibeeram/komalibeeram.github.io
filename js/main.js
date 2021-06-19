// menu show y hidden
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

//   menu show
//  validate if constant exists 
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu');
    })
};
//  menu hidden
//  validate if constant exists
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
};
//  remove menu mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // when we click on each nav__link we remove show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction))
//  accordion skills
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.ClassName;

    for(i=0; i<skillsContent.length; i++){
        // console.log(i);
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass == 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
    
}
skillsHeader.forEach((el) =>{
    console.log(el);
    el.addEventListener('click', toggleSkills);
    // console.log("hi");
});
