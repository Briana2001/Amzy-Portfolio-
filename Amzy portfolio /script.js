const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const sections = document.querySelectorAll(".section");
const footerYear = document.querySelector("footer p");


// Close mobile menu after clicking a link
mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.removeAttribute("open");
    });
});


// Reveal sections when they enter the screen
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// Keep the copyright year current
const currentYear = new Date().getFullYear();

footerYear.textContent = `© ${currentYear} Amzy. All rights reserved.`;