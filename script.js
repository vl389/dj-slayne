const elements = document.querySelectorAll(".scroll-animation");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

});

elements.forEach((element) => {
    observer.observe(element);
});


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
    }
});