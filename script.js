document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav');

    hamburger.addEventListener('click', function() {
        alert("kkkk")
        navLinks.classList.toggle('show');
    });
});

