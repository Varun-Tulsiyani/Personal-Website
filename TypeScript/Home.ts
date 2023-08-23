// Define types for elements
interface ScrollEventTarget extends EventTarget {
    scrollY: number;
}

interface HTMLElementWithClassList extends HTMLElement {
    classList: DOMTokenList;
}

interface HTMLElementWithStyle extends HTMLElement {
    style: CSSStyleDeclaration;
}

// Scroll event handler
window.addEventListener("scroll", (): void => {
    const header: HTMLElementWithClassList = document.querySelector("header");
    const logo: HTMLElementWithStyle = document.getElementById("logo");
    const name: HTMLElementWithStyle = document.getElementById("name");
    const scroll: number = (window as ScrollEventTarget).scrollY;

    if (scroll > 10) {
        header.classList.add("sticky");
        name.style.display = "none";
        logo.style.marginLeft = "46%";
    } else {
        header.classList.remove("sticky");
        name.style.display = "";
        logo.style.marginLeft = "0";
    }
});

// Hamburger menu event handler
document.getElementById("hamburger")?.addEventListener("click", (): void => {
    const navMenu: HTMLElementWithClassList = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
});

// Close menu when a menu item is clicked
const navItems: NodeListOf<Element> = document.querySelectorAll(".nav-menu a");

navItems.forEach((item: Element): void => {
    item.addEventListener("click", (): void => {
        const navMenu: HTMLElementWithClassList = document.getElementById("navMenu");
        navMenu.classList.remove("active");
    });
});
