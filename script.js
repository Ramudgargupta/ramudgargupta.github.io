// ==========================================
// PORTFOLIO 2026 PRO
// script.js PART 1
// ==========================================

// ================= LOADER =================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ================= SCROLL PROGRESS =================

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

// ================= DARK MODE =================

const darkBtn = document.getElementById("darkMode");

darkBtn?.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = darkBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// ================= CLOSE MENU =================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});
// ==========================================
// PORTFOLIO 2026 PRO
// script.js PART 2
// ==========================================

// ================= TYPING EFFECT =================

const typing = document.getElementById("typing");

const words = [
    "BCA Student",
    "Front-End Developer",
    "Python Learner",
    "Future Full Stack Developer",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ================= NAVBAR SHADOW =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ================= ACTIVE MENU =================

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {

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


// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.20

});

sections.forEach(section => {

    observer.observe(section);

});


// ================= FOOTER YEAR =================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Ramudgar Gupta. All Rights Reserved.`;

}

console.log("✅ Portfolio Script Part 2 Loaded");
// ==========================================
// PORTFOLIO 2026 PRO
// script.js PART 3 (FINAL)
// ==========================================

// ================= HERO IMAGE EFFECT =================

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px,${y}px)`;

});

// ================= BUTTON RIPPLE =================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const d = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = d + "px";

        circle.style.left =
            e.clientX - this.offsetLeft - d / 2 + "px";

        circle.style.top =
            e.clientY - this.offsetTop - d / 2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

// ================= SKILL BAR ANIMATION =================

const fills = document.querySelectorAll(".skill-fill");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.width =
                entry.target.classList.contains("html") ? "95%" :
                entry.target.classList.contains("css") ? "90%" :
                entry.target.classList.contains("js") ? "80%" :
                entry.target.classList.contains("python") ? "75%" :
                entry.target.classList.contains("git") ? "85%" :
                "90%";

        }

    });

}, {

    threshold: 0.4

});

fills.forEach(fill => {

    fill.style.width = "0";

    fill.style.transition = "2s";

    skillObserver.observe(fill);

});

// ================= PROJECT HOVER =================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ================= CONSOLE MESSAGE =================

console.log("🚀 Portfolio 2026 PRO Loaded Successfully");

console.log("Developer : Ramudgar Gupta");

console.log("Version : 2026 PRO");

console.log("All Features Loaded Successfully ✅");
