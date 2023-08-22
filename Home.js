window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let logo = document.getElementById("logo");
    let scroll = window.scrollY;

    if (scroll > 100) {
        header.classList.add("sticky");
        logo.style.marginLeft = "50%";
    } else {
        header.classList.remove("sticky");
        logo.style.marginLeft = "0";
    }
});
