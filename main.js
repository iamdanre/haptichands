import './src/style.css';

// You can add your JavaScript code here.
// This file will be the entry point for your Vite project.
// For example, you can add code for the sidebar toggle or smooth scrolling.

// Example: Basic sidebar toggle (replace with your actual implementation)
const menuToggle = document.querySelector('.menu-toggle');
const sidebarWrapper = document.getElementById('sidebar-wrapper');

if (menuToggle && sidebarWrapper) {
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        sidebarWrapper.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Example: Close sidebar when clicking on a link
const sidebarLinks = document.querySelectorAll('.sidebar-nav-item a');

if (sidebarLinks) {
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// Initialize AOS
AOS.init();

// You can also add your smooth scrolling logic here or in a separate module.
// Example: Basic smooth scrolling (replace with your actual implementation)
document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 72, // Adjust offset as needed
                behavior: 'smooth'
            });
        }
    });
});