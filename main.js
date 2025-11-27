const menuBtn = document.getElementById("menu-btn");
const navLiniks = document.getElementById("nav-links");
const menuBtnicon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLiniks.classList.toggle("open")

    const isOpen = navLiniks.classList.contains("open");
    menuBtnicon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLiniks.addEventListener("click", (e) => {
    navLiniks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRealOption = {
    distance:"50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    duration: 1000,
});
ScrollReveal().reveal("header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal("header__content .section__description", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal("header__content btn", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal("header__content .socials", {
    ...scrollRevealOption,
    delay: 2000,
});
