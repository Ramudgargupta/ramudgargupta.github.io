// =====================================
// Portfolio Version 4
// Part 1/4
// =====================================

// Loader
window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").classList.add("hide");

}, 2000);

});

// Typing Animation

const typing = document.getElementById("typing");

const words = [

"Front-End Developer",

"BCA Student",

"JavaScript Learner",

"Python Learner"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

const currentWord = words[wordIndex];

if(!isDeleting){

typing.textContent = currentWord.substring(0,charIndex++);

if(charIndex > currentWord.length){

isDeleting = true;

setTimeout(typeEffect,1200);

return;

}

}else{

typing.textContent = currentWord.substring(0,charIndex--);

if(charIndex < 0){

isDeleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,isDeleting ? 50 : 100);

}

typeEffect();

// Dark Mode

const darkBtn = document.getElementById("darkMode");

if(localStorage.getItem("theme") === "light"){

document.body.classList.add("light");

darkBtn.innerHTML = "☀️";

}

darkBtn.onclick = () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");

darkBtn.innerHTML = "☀️";

}else{

localStorage.setItem("theme","dark");

darkBtn.innerHTML = "🌙";

}

};
// =====================================
// Portfolio Version 4
// Part 2/4
// =====================================

// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){

menuBtn.innerHTML = "✖";

}else{

menuBtn.innerHTML = "☰";

}

};

// Close Menu After Click

document.querySelectorAll(".nav-links a").forEach(link=>{

link.onclick = ()=>{

navLinks.classList.remove("active");

menuBtn.innerHTML="☰";

};

});

// Scroll Animation

const sections=document.querySelectorAll(

".hero,.about,.skills,.projects,.certificates,.contact"

);

function revealSections(){

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-100){

section.classList.add("show");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();

// Back To Top

const topBtn=document.getElementById("topBtn");

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// =====================================
// Portfolio Version 4
// Part 3/4
// =====================================

// ===============================
// Scroll Progress Bar
// ===============================

const scrollBar = document.getElementById("scrollBar");

window.addEventListener("scroll",()=>{

const scrollTop =
document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const percent =
(scrollTop / scrollHeight) * 100;

scrollBar.style.width = percent + "%";

// Back To Top Button Show/Hide

if(scrollTop > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

// ===============================
// Project Search
// ===============================

const searchInput =
document.getElementById("searchProject");

const cards =
document.querySelectorAll(".project-grid .card");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let value =
searchInput.value.toLowerCase();

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

});

}

// ===============================
// Smooth Anchor Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target =
document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===============================
// Active Navbar Link
// ===============================

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let currentSection="";

document.querySelectorAll("section").forEach(section=>{

const top = section.offsetTop - 120;

if(window.scrollY >= top){

currentSection = section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + currentSection){

link.classList.add("active");

}

});

});
// =====================================
// Portfolio Version 4
// Part 4/4 (Final)
// =====================================

// ===============================
// Navbar Background on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

}else{

header.style.boxShadow = "none";

}

});

// ===============================
// Button Ripple Effect
// ===============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle = document.createElement("span");

const size = Math.max(this.clientWidth,this.clientHeight);

const rect = this.getBoundingClientRect();

circle.style.width = size + "px";
circle.style.height = size + "px";

circle.style.left = (e.clientX - rect.left - size/2) + "px";
circle.style.top = (e.clientY - rect.top - size/2) + "px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// ===============================
// Current Year in Footer
// ===============================

const footer = document.querySelector("footer");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Ramudgar Gupta | All Rights Reserved`;

}

// ===============================
// Console Message
// ===============================

console.log("🚀 Portfolio Version 4 Loaded Successfully");

// ===============================
// End
// ===============================