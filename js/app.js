//desktop nav display
const navlink = document.querySelectorAll('.navlink');
function activeLink(){
    navlink.forEach((item) => item.classList.remove('active-link'));
    this.classList.add('active-link');
}
navlink.forEach((item) => item.addEventListener('click', activeLink));

//mobile nav
const menuToggle = document.querySelector('.menuToggle');
const menu = document.querySelector('.ri-menu-3-line');
const close = document.querySelector('.ri-close-line');
menuToggle.addEventListener('click', function(){
    this.classList.toggle('show');
});

//show and hiding each of the document
const aboutSection = document.getElementById('mainAside');
const projectSection = document.getElementById('projects');
const educationSection = document.getElementById('education');
const contactSection = document.getElementById('contact');

// anchor buttons for desktop view
const aboutBtn = document.getElementById('aboutBtn');
const projectBtn = document.getElementById('projectsBtn');
const educationBtn = document.getElementById('educationBtn');
const contactBtn = document.getElementById('contactBtn');

aboutBtn.addEventListener('click', ()=>{
    aboutSection.style.display = "flex";
    projectSection.style.display = "none";
    educationSection.style.display = "none";
    contactSection.style.display = "none";
});

projectBtn.addEventListener('click', ()=>{
    aboutSection.style.display = "none";
    projectSection.style.display = "flex";
    educationSection.style.display = "none";
    contactSection.style.display = "none";
});

educationBtn.addEventListener('click', ()=>{
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    educationSection.style.display = "flex";
    contactSection.style.display = "none";
});

contactBtn.addEventListener('click', ()=>{
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    educationSection.style.display = "none";
    contactSection.style.display = "flex";
});

//anchor buttons for mobile / ipad view
const aboutToggleBtn = document.getElementById('aboutToggleBtn');
const projectsToggleBtn = document.getElementById('projectsToggleBtn');
const educationToggleBtn = document.getElementById('educationToggleBtn');
const contactToggleBtn = document.getElementById('contactToggleBtn');

aboutToggleBtn.addEventListener('click', ()=>{
    aboutSection.style.display = "flex";
    projectSection.style.display = "none";
    educationSection.style.display = "none";
    contactSection.style.display = "none";
});

projectsToggleBtn.addEventListener('click', ()=>{
    aboutSection.style.display = "none";
    projectSection.style.display = "flex";
    educationSection.style.display = "none";
    contactSection.style.display = "none";
});

educationToggleBtn.addEventListener('click', ()=>{
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    educationSection.style.display = "flex";
    contactSection.style.display = "none";
});

contactToggleBtn.addEventListener('click', ()=>{
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    educationSection.style.display = "none";
    contactSection.style.display = "flex";
});
