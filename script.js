/* =========================================================
   FAISAL PORTFOLIO - COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   1. HERO TYPING EFFECT
========================================================= */

const typingText = document.getElementById("typing-text");

const typingWords = [
    "an AIML Student",
    "a Developer",
    "an AI/ML Learner",
    "a Web Developer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = typingWords[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= typingWords.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* =========================================================
   2. CUSTOM CURSOR
========================================================= */

const cursorDot =
    document.querySelector(".custom-cursor");

const cursorRing =
    document.querySelector(".cursor-ring");

if (cursorDot && cursorRing) {

    document.addEventListener("mousemove", function (event) {

        cursorDot.style.left =
            event.clientX + "px";

        cursorDot.style.top =
            event.clientY + "px";

        cursorRing.style.left =
            event.clientX + "px";

        cursorRing.style.top =
            event.clientY + "px";
    });


    const hoverElements =
        document.querySelectorAll(
            "a, button, .skill-card, .service-item, .project-card, .stat-card"
        );


    hoverElements.forEach(function (element) {

        element.addEventListener(
            "mouseenter",
            function () {

                cursorRing.style.width = "50px";
                cursorRing.style.height = "50px";

                cursorRing.style.borderColor =
                    "rgba(139, 92, 246, 1)";
            }
        );


        element.addEventListener(
            "mouseleave",
            function () {

                cursorRing.style.width = "32px";
                cursorRing.style.height = "32px";

                cursorRing.style.borderColor =
                    "rgba(139, 92, 246, 0.7)";
            }
        );

    });
}


/* =========================================================
   3. SMOOTH NAVIGATION
========================================================= */

const navigationLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================================
   4. ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );


function updateActiveNavigation() {

    let currentSection = "";

    const scrollPosition =
        window.scrollY + 180;


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================================
   5. PAGE LOADED
========================================================= */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
)