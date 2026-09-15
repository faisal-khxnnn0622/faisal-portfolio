```javascript
// =========================================
// FAISAL PORTFOLIO
// Simple & Clean JavaScript
// =========================================


// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Navbar shadow when scrolling

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (header) {

        if (window.scrollY > 30) {
            header.style.boxShadow =
                "0 10px 30px rgba(0, 0, 0, 0.35)";
        } else {
            header.style.boxShadow = "none";
        }

    }

});


// Simple project card hover effect

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-9px)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0)";

    });

});


// Button hover effect

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", function () {

        button.style.transform = "translateY(0)";

    });

});


// Console message

console.log("Faisal Portfolio Loaded Successfully!");
```
