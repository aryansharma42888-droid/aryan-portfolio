
console.log("Aryan Sharma Portfolio Loaded!");

const roles = [
    "Aspiring Web Developer",
    "MERN Stack Learner",
    "Frontend Developer"
];

const roleElement = document.querySelector(".hero h2");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    roleElement.textContent = currentRole.substring(0, charIndex);

    let speed = deleting ? 45 : 90;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1300;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const currentYear = new Date().getFullYear();

document.querySelector("footer p").textContent =
    `© ${currentYear} Aryan Sharma. Built with passion.`;

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section, .hero-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
