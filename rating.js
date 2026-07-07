// =======================================
// SUPABASE STAR RATING SYSTEM
// =======================================

// Replace with your own Supabase details
const supabaseUrl = "https://puazbdmudwwvxeloirvu.supabase.co";

const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1YXpiZG11ZHd3dnhlbG9pcnZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzODQxODQsImV4cCI6MjA5ODk2MDE4NH0.67uiJ3OKpSU3Xy1d0ckDtw_c9EpitjAGzeXEVTrB1cg";

const supabaseClient =
window.supabase.createClient(
supabaseUrl,
supabaseKey
);

// ===============================
// Elements
// ===============================

const stars = document.querySelectorAll(".star");

const averageRating =
document.getElementById("averageRating");

const totalVotes =
document.getElementById("totalVotes");

// ===============================
// Load Rating
// ===============================

async function loadRatings() {

const { data, error } =
await supabaseClient
.from("ratings")
.select("rating");

if (error) {

console.error(error);

return;

}

if (data.length === 0) {

averageRating.textContent = "0.0";

totalVotes.textContent = "0";

return;

}

let sum = 0;

data.forEach(item=>{

sum += item.rating;

});

const avg = sum / data.length;

averageRating.textContent =
avg.toFixed(1);

totalVotes.textContent =
data.length;

}

// ===============================
// Submit Rating
// ===============================

stars.forEach(star=>{

star.addEventListener("click",async()=>{

if(localStorage.getItem("portfolioRated")){

alert("⭐ You already rated.");

return;

}

const rating =
Number(star.dataset.rating);

// Highlight

stars.forEach(s=>{

if(Number(s.dataset.rating)<=rating){

s.style.color="gold";

}else{

s.style.color="#555";

}

});

const { error } =
await supabaseClient
.from("ratings")
.insert([
{
rating:rating
}
]);

if(error){

console.error(error);

alert("Rating Failed");

return;

}

localStorage.setItem(
"portfolioRated",
"yes"
);

alert("🎉 Thanks for Rating!");

loadRatings();

});

});

// ===============================
// Hover Effect
// ===============================

stars.forEach(star=>{

star.addEventListener("mouseover",()=>{

const value =
Number(star.dataset.rating);

stars.forEach(s=>{

if(Number(s.dataset.rating)<=value){

s.style.color="gold";

}else{

s.style.color="#555";

}

});

});

});

document.querySelector(".stars")
.addEventListener("mouseleave",()=>{

stars.forEach(s=>{

s.style.color="#555";

});

});

// ===============================
// Start
// ===============================

loadRatings();

console.log("⭐ Rating System Loaded");
