var _a;
// Scroll event handler
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    var logo = document.getElementById("logo");
    var name = document.getElementById("name");
    var scroll = window.scrollY;
    if (scroll > 10) {
        header.classList.add("sticky");
        name.style.display = "none";
        logo.style.marginLeft = "46%";
    }
    else {
        header.classList.remove("sticky");
        name.style.display = "";
        logo.style.marginLeft = "0";
    }
});
// Hamburger menu event handler
(_a = document.getElementById("hamburger")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
});
// Close menu when a menu item is clicked
var navItems = document.querySelectorAll(".nav-menu a");
navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        var navMenu = document.getElementById("navMenu");
        navMenu.classList.remove("active");
    });
});
