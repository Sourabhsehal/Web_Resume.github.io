let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typed.js effect
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Developer', 'Data-Analytics', 'Web Designer', 'Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
});

// Download Resume button function
document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "assests/Sourabh Web Resume.pdf"; // path to your PDF file
    link.download = "Sourabh_Kumar_Resume.pdf"; // file name for download
    link.click();
});
