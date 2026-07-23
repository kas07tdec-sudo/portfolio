/* ==========================================
   KEVAL SHAH PORTFOLIO
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 1200);

    }

});


/* ==========================================
   AOS ANIMATION
========================================== */

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,

        once: true,

        offset: 80

    });

}


/* ==========================================
   TYPING EFFECT
========================================== */

if (
    typeof Typed !== "undefined" &&
    document.getElementById("typing-text")
) {

    new Typed("#typing-text", {

        strings: [

            "AI & Machine Learning Developer",

            "Full Stack Web Developer",

            "Data Analytics Enthusiast",

            "Python Programmer",

            "Power BI Dashboard Developer"

        ],

        typeSpeed: 60,

        backSpeed: 40,

        backDelay: 1800,

        loop: true

    });

}


/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


/* ==========================================
   CLOSE MOBILE NAVIGATION
========================================== */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            if (navLinks) {

                navLinks.classList.remove("active");

            }

        });

    });


/* ==========================================
   SMOOTH SCROLL
========================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (anchor) {

        anchor.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }

        });

    });


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let current = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;


        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (!navbar) return;


    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(11,17,32,.92)";

        navbar.style.backdropFilter =
            "blur(20px)";

        navbar.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.3)";

    } else {

        navbar.style.background =
            "rgba(15,20,35,.55)";

        navbar.style.boxShadow =
            "none";

    }

});


/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursor =
    document.querySelector(".cursor");

const cursor2 =
    document.querySelector(".cursor2");


document.addEventListener("mousemove", function (event) {

    if (cursor) {

        cursor.style.left =
            event.clientX + "px";

        cursor.style.top =
            event.clientY + "px";

    }


    if (cursor2) {

        cursor2.style.left =
            event.clientX + "px";

        cursor2.style.top =
            event.clientY + "px";

    }

});


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
    document.querySelectorAll(".counter");


let counterStarted = false;


function startCounters() {

    counters.forEach(function (counter) {

        const target =
            Number(counter.dataset.target);


        let count = 0;


        const updateCounter = function () {

            const increment =
                Math.ceil(target / 100);


            count += increment;


            if (count >= target) {

                counter.innerText =
                    target;

            } else {

                counter.innerText =
                    count;


                setTimeout(
                    updateCounter,
                    20
                );

            }

        };


        updateCounter();

    });

}


window.addEventListener("scroll", function () {

    const stats =
        document.getElementById("stats");


    if (!stats) return;


    if (
        !counterStarted &&
        window.scrollY >
        stats.offsetTop -
        window.innerHeight +
        200
    ) {

        counterStarted = true;

        startCounters();

    }

});


/* ==========================================
   BACK TO TOP
========================================== */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (!topBtn) return;


    if (window.scrollY > 500) {

        topBtn.style.display =
            "flex";

    } else {

        topBtn.style.display =
            "none";

    }

});


if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ==========================================
   DASHBOARD GALLERY
========================================== */


/* YOUR EXACT LOCAL DASHBOARD PATHS */

const dashboardImages = [

    "Dashboard-1.jpeg",

    "Dashboard-2.jpeg",

    "Dashboard-3.jpeg",

    "Dashboard-4.jpeg"

];


let currentIndex = 0;


const galleryImage =
    document.getElementById("galleryImage");


const dots =
    document.querySelectorAll(".dot");


/* ==========================================
   UPDATE GALLERY
========================================== */

function updateGallery() {

    if (!galleryImage) return;


    galleryImage.src =
        dashboardImages[currentIndex];


    dots.forEach(function (dot, index) {

        if (index === currentIndex) {

            dot.classList.add("active");

        } else {

            dot.classList.remove("active");

        }

    });

}


/* ==========================================
   NEXT DASHBOARD
========================================== */

function nextSlide() {

    currentIndex++;


    if (
        currentIndex >=
        dashboardImages.length
    ) {

        currentIndex = 0;

    }


    updateGallery();

}


/* ==========================================
   PREVIOUS DASHBOARD
========================================== */

function prevSlide() {

    currentIndex--;


    if (currentIndex < 0) {

        currentIndex =
            dashboardImages.length - 1;

    }


    updateGallery();

}


/* ==========================================
   SPECIFIC DASHBOARD
========================================== */

function currentSlide(index) {

    if (
        index >= 0 &&
        index < dashboardImages.length
    ) {

        currentIndex = index;

        updateGallery();

    }

}


/* ==========================================
   KEYBOARD CONTROLS
========================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowRight") {

        nextSlide();

    }


    if (event.key === "ArrowLeft") {

        prevSlide();

    }

});


/* ==========================================
   DASHBOARD LIGHTBOX
========================================== */

const lightbox =
    document.getElementById("lightbox");


const lightboxImg =
    document.getElementById("lightboxImg");


const closeLightbox =
    document.getElementById("closeLightbox");


if (
    galleryImage &&
    lightbox &&
    lightboxImg
) {

    galleryImage.addEventListener(
        "click",
        function () {

            lightbox.style.display =
                "flex";


            lightboxImg.src =
                galleryImage.src;

        }
    );

}


if (closeLightbox) {

    closeLightbox.addEventListener(
        "click",
        function () {

            lightbox.style.display =
                "none";

        }
    );

}


if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                lightbox
            ) {

                lightbox.style.display =
                    "none";

            }

        }
    );

}


/* ==========================================
   ESCAPE LIGHTBOX
========================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            lightbox
        ) {

            lightbox.style.display =
                "none";

        }

    }
);


/* ==========================================
   DASHBOARD TOUCH SWIPE
========================================== */

let touchStartX = 0;


if (galleryImage) {


    galleryImage.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.touches[0].clientX;

        }
    );


    galleryImage.addEventListener(
        "touchend",
        function (event) {

            const touchEndX =
                event.changedTouches[0].clientX;


            if (
                touchStartX -
                touchEndX >
                50
            ) {

                nextSlide();

            }


            if (
                touchEndX -
                touchStartX >
                50
            ) {

                prevSlide();

            }

        }
    );


}


/* ==========================================
   INITIALIZE GALLERY
========================================== */

updateGallery();


/* ==========================================
   PARTICLES
========================================== */

if (
    typeof particlesJS !== "undefined" &&
    document.getElementById("particles-js")
) {

    particlesJS(
        "particles-js",
        {

            particles: {

                number: {

                    value: 70,

                    density: {

                        enable: true,

                        value_area: 800

                    }

                },


                color: {

                    value: "#00E5FF"

                },


                shape: {

                    type: "circle"

                },


                opacity: {

                    value: 0.4,

                    random: true

                },


                size: {

                    value: 3,

                    random: true

                },


                line_linked: {

                    enable: true,

                    distance: 150,

                    color: "#00E5FF",

                    opacity: 0.25,

                    width: 1

                },


                move: {

                    enable: true,

                    speed: 2,

                    direction: "none",

                    random: false,

                    straight: false,

                    out_mode: "out"

                }

            },


            interactivity: {

                detect_on: "canvas",


                events: {

                    onhover: {

                        enable: true,

                        mode: "grab"

                    },


                    onclick: {

                        enable: true,

                        mode: "push"

                    },


                    resize: true

                },


                modes: {

                    grab: {

                        distance: 180,

                        line_linked: {

                            opacity: 0.6

                        }

                    },


                    push: {

                        particles_nb: 4

                    }

                }

            },


            retina_detect: true

        }
    );

}


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                this.querySelector(
                    "input[type='text']"
                ).value.trim();


            const email =
                this.querySelector(
                    "input[type='email']"
                ).value.trim();


            if (
                name === "" ||
                email === ""
            ) {

                alert(
                    "Please fill all required fields."
                );

                return;

            }


            alert(
                "Thank you! Your message has been received."
            );


            this.reset();

        }
    );

}


/* ==========================================
   CONSOLE
========================================== */

console.log(
    "%cKeval Shah Portfolio",
    "color:#00E5FF;font-size:22px;font-weight:bold;"
);


console.log(
    "%cAI • Data Analytics • Full Stack Development",
    "color:#ffffff;font-size:14px;"
);