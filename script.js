/* =========================================================
   THEME SWITCHER
========================================================= */

const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

// Read saved preference or default to light
const savedTheme = localStorage.getItem("theme") || "light";
htmlElement.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector("i");
    if (theme === "dark") {
        icon.className = "fas fa-sun";
    } else {
        icon.className = "fas fa-moon";
    }
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.className = "fas fa-xmark";
        } else {
            icon.className = "fas fa-bars";
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            if (icon) {
                icon.className = "fas fa-bars";
            }
        });
    });
}

/* =========================================================
   DASHBOARD GALLERY (FIXED)
========================================================= */

const dashboardImages = [
    "Dashboard-1.jpeg",
    "Dashboard-2.jpeg",
    "Dashboard-3.jpeg",
    "Dashboard-4.jpeg"
];

let dashboardIndex = 0;

const dashboardImage = document.getElementById("dashboardImage");
const dashboardCurrent = document.getElementById("dashboardCurrent");
const prevDashboard = document.getElementById("prevDashboard");
const nextDashboard = document.getElementById("nextDashboard");

function updateDashboard() {
    if (!dashboardImage) return;

    // Fade effect transition
    dashboardImage.style.opacity = "0.3";
    
    setTimeout(() => {
        dashboardImage.src = dashboardImages[dashboardIndex];
        dashboardImage.style.opacity = "1";

        if (dashboardCurrent) {
            dashboardCurrent.textContent = String(dashboardIndex + 1).padStart(2, "0");
        }
    }, 150);
}

if (prevDashboard) {
    prevDashboard.addEventListener("click", (e) => {
        e.preventDefault();
        dashboardIndex--;
        if (dashboardIndex < 0) {
            dashboardIndex = dashboardImages.length - 1;
        }
        updateDashboard();
    });
}

if (nextDashboard) {
    nextDashboard.addEventListener("click", (e) => {
        e.preventDefault();
        dashboardIndex++;
        if (dashboardIndex >= dashboardImages.length) {
            dashboardIndex = 0;
        }
        updateDashboard();
    });
}

/* =========================================================
   KEYBOARD DASHBOARD CONTROL
========================================================= */

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft" && prevDashboard) {
        prevDashboard.click();
    }
    if (event.key === "ArrowRight" && nextDashboard) {
        nextDashboard.click();
    }
});

/* =========================================================
   PROJECT CATEGORY FILTER
========================================================= */

const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
});

/* =========================================================
   PROJECT OVERVIEW MODAL
========================================================= */

const projectModal = document.getElementById("projectModal");
const projectModalClose = document.getElementById("projectModalClose");
const projectPreviewBtns = document.querySelectorAll(".project-preview-btn");

projectPreviewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("projectModalTitle").textContent = btn.dataset.title;
        document.getElementById("projectModalDesc").textContent = btn.dataset.desc;
        document.getElementById("projectModalTech").textContent = btn.dataset.tech;
        document.getElementById("projectModalImg").src = btn.dataset.img;
        
        const modalLink = document.getElementById("projectModalLink");
        modalLink.href = btn.dataset.link;
        
        // Update button text (Default to 'Explore Project' if not specified)
        const btnText = btn.dataset.btnText || "Explore Project";
        modalLink.innerHTML = `${btnText} <i class="fas fa-arrow-right"></i>`;

        // If link goes to contact section, close modal on click
        modalLink.onclick = () => {
            if (btn.dataset.link === "#contact") {
                closeProjectModal();
            }
        };

        projectModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

function closeProjectModal() {
    if (projectModal) {
        projectModal.classList.remove("active");
        document.body.style.overflow = "";
    }
}

if (projectModalClose) {
    projectModalClose.addEventListener("click", closeProjectModal);
}

/* =========================================================
   CONTACT FORM SIMULATION
========================================================= */

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    });
}

/* =========================================================
   TYPING EFFECT & UTILITIES
========================================================= */

const typingElement = document.querySelector(".typing-text");
const typingWords = [" | AI / ML Enthusiast", " | Data Analyst", " | Web Developer", " | Software Engineer"];
let wordIndex = 0, characterIndex = 0, deleting = false;

function typeEffect() {
    if (!typingElement) return;
    const currentWord = typingWords[wordIndex];

    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, characterIndex + 1);
        characterIndex++;
        if (characterIndex === currentWord.length) { deleting = true; setTimeout(typeEffect, 1500); return; }
    } else {
        typingElement.textContent = currentWord.substring(0, characterIndex - 1);
        characterIndex--;
        if (characterIndex === 0) { deleting = false; wordIndex = (wordIndex + 1) % typingWords.length; }
    }
    setTimeout(typeEffect, deleting ? 45 : 80);
}
typeEffect();

/* =========================================================
   SCROLL REVEAL & CURRENT YEAR
========================================================= */

const sections = document.querySelectorAll(".section");
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
    }, { threshold: 0.08 });
    sections.forEach(section => observer.observe(section));
}

const currentYear = document.getElementById("currentYear");
if (currentYear) currentYear.textContent = new Date().getFullYear();

/* =========================================================
   BACK TO TOP FLOATING BUTTON CONTROLLER
========================================================= */

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});