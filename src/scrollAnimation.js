// scrollAnimation.js
export function applyScrollAnimation() {
    const elements = document.querySelectorAll(".fade-in, .fade-in-up, .no ");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible"); // Add animation when in view
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    elements.forEach((el) => observer.observe(el));
}
