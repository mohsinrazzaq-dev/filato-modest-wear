// Sticky Header Shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 12px 30px rgba(0,0,0,0.12)";
    } else {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {

        const target = this.getAttribute("href");

        if (target.startsWith("#")) {
            e.preventDefault();

            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

// Hero Button Animation
const heroBtn = document.querySelector(".hero button");

heroBtn.addEventListener("mouseenter", () => {
    heroBtn.style.transform = "scale(1.05)";
});

heroBtn.addEventListener("mouseleave", () => {
    heroBtn.style.transform = "scale(1)";
});

// Product Card Hover Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

// Newsletter Button
const subscribeBtn = document.querySelector(".newsletter button");

subscribeBtn.addEventListener("click", () => {

    const email = document.querySelector(".newsletter input").value;

    if (email === "") {
        alert("Please enter your email address.");
    } else {
        alert("Thank you for subscribing!");
        document.querySelector(".newsletter input").value = "";
    }

});

// Fade In Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

const sections = document.querySelectorAll("section");

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});

// Current Year in Footer
const year = new Date().getFullYear();

const footerText = document.querySelector("footer p:last-child");

if (footerText) {
    footerText.innerHTML = `© ${year} Filato. All Rights Reserved.`;
}