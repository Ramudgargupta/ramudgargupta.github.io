// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ===============================
// SCROLL PROGRESS BAR
// ===============================

const progress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {

    if (!progress) return;

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop / scrollHeight) * 100;

    progress.style.width = percent + "%";

});
// ===============================
// DARK MODE
// ===============================

const darkModeBtn = document.getElementById("darkMode");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = darkModeBtn.querySelector("i");

        if (icon) {

            if (document.body.classList.contains("dark")) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            } else {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }

        }

    });

}

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ===============================
// TYPING EFFECT
// ===============================

const typing = document.getElementById("typing");

const words = [
    "BCA Student",
    "Front-End Developer",
    "Python Learner",
    "Future Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();
// ===============================
// CLOSE MOBILE MENU AFTER CLICK
// ===============================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});

// ===============================
// SIMPLE SCROLL ANIMATION
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

// ===============================
// CURRENT YEAR IN FOOTER (Optional)
// ===============================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${year} Ramudgar Gupta. All Rights Reserved.`;

}

console.log("Portfolio Version 5 Loaded Successfully ✅");
// ======================================
// PREMIUM NAVBAR (FIXED)
// ======================================

const navbar = document.querySelector(".navbar");

// Navbar Shadow on Scroll

window.addEventListener("scroll", () => {

    if (navbar) {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

});

// Active Menu Highlight

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
const supabaseUrl = "https://puazbdmudwwvxeloirvu.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1YXpiZG11ZHd3dnhlbG9pcnZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzODQxODQsImV4cCI6MjA5ODk2MDE4NH0.67uiJ3OKpSU3Xy1d0ckDtw_c9EpitjAGzeXEVTrB1cg";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
// ===============================
// STAR RATING WITH SUPABASE
// ===============================

const stars = document.querySelectorAll(".star");
const avg = document.getElementById("averageRating");
const total = document.getElementById("totalVotes");

let selectedRating = 0;

// Show selected stars
stars.forEach(star => {
    star.addEventListener("click", async () => {

        // Prevent multiple votes from same browser
        if (localStorage.getItem("portfolioRated")) {
            alert("⭐ You have already rated this portfolio.");
            return;
        }

        selectedRating = Number(star.dataset.rating);

        stars.forEach(s => {
            if (Number(s.dataset.rating) <= selectedRating) {
                s.style.color = "gold";
            } else {
                s.style.color = "#ccc";
            }
        });

        const { error } = await supabase
            .from("ratings")
            .insert([
                {
                    rating: selectedRating
                }
            ]);

        if (!error) {

            localStorage.setItem("portfolioRated", "yes");

            alert("🎉 Thank you for your rating!");

            loadRatings();

        } else {

            console.log(error);
            alert("Rating save failed.");

        }

    });
});

async function loadRatings() {

    const { data, error } = await supabase
        .from("ratings")
        .select("rating");

    if (error) {
        console.log(error);
        return;
    }

    if (data.length === 0) {
        avg.textContent = "0.0";
        total.textContent = "0";
        return;
    }

    let sum = 0;

    data.forEach(item => {
        sum += item.rating;
    });

    avg.textContent = (sum / data.length).toFixed(1);
    total.textContent = data.length;
}

loadRatings();
