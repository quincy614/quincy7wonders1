document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", function () {
        const nav = document.querySelector("nav");
        if (window.scrollY > 0) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});
const toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const modal = document.querySelector('.modalsidebar')

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    toggle.classList.toggle('active');
    modal.classList.toggle('active');
    
    if (toggle.classList.contains('active')) {
toggle.textContent = 'X';
} else {
toggle.textContent = '☰';
}

});

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", function () {
        const div = document.querySelector(".scrolltotop");
        if (window.scrollY > 400) {
            div.classList.add("scrolled");
        } else {
            div.classList.remove("scrolled");
        }
    });
});

document.querySelector(".scrolltotop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

        



