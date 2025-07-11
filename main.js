// Typewriter effect for About title
const aboutTitle = "About Me.";
let titleIdx = 0;
let titleDeleting = false;

function typeWriterTitle(typewriterTitleElem) {
    if (!typewriterTitleElem) return;
    if (!titleDeleting) {
        typewriterTitleElem.innerHTML = aboutTitle.slice(0, titleIdx) + '<span class="type-cursor">|</span>';
        if (titleIdx < aboutTitle.length) {
            titleIdx++;
            setTimeout(() => typeWriterTitle(typewriterTitleElem), 80);
        } else {
            titleDeleting = true;
            setTimeout(() => typeWriterTitle(typewriterTitleElem), 1800);
        }
    } else {
        typewriterTitleElem.innerHTML = aboutTitle.slice(0, titleIdx) + '<span class="type-cursor">|</span>';
        if (titleIdx > 0) {
            titleIdx--;
            setTimeout(() => typeWriterTitle(typewriterTitleElem), 30);
        } else {
            titleDeleting = false;
            setTimeout(() => typeWriterTitle(typewriterTitleElem), 800);
        }
    }
}

// Sticky navbar show/hide after scroll past landing buttons
document.addEventListener("DOMContentLoaded", function() {
    // Typewriter
    const typewriterTitleElem = document.getElementById('about-typewriter-title');
    typeWriterTitle(typewriterTitleElem);

    // Sticky navbar
    const navbar = document.getElementById('main-navbar');
    const landingButtons = document.querySelector('.landing-buttons');

    function checkNavbar() {
        if (!navbar || !landingButtons) return;
        const buttonsBottom = landingButtons.getBoundingClientRect().bottom;
        if (buttonsBottom <= 0) {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }
    }

    window.addEventListener('scroll', checkNavbar);
    window.addEventListener('resize', checkNavbar);
    checkNavbar();
});