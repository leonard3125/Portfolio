// Mobile Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.querySelector('i').classList.toggle('fa-times');
    menuIcon.querySelector('i').classList.toggle('fa-bars');
    navbar.classList.toggle('active');
});

// Scroll sections active link & Sticky Header
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

window.onscroll = () => {
    let top = window.scrollY;

    // Sticky header
    if (top > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Active link
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Close mobile menu on scroll
    menuIcon.querySelector('i').classList.remove('fa-times');
    menuIcon.querySelector('i').classList.add('fa-bars');
    navbar.classList.remove('active');
};

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(button => button.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Prevent Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form.');
        contactForm.reset();
    });
}
