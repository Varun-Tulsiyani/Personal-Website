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
    // @ts-ignore
    const header: HTMLElementWithClassList | null = document.querySelector("header");
    // @ts-ignore
    const logo: HTMLElementWithStyle | null = document.getElementById("logo");
    // @ts-ignore
    const name: HTMLElementWithStyle | null = document.getElementById("name");
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
    // @ts-ignore
    const navMenu: HTMLElementWithClassList = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
});

// Close menu when a menu item is clicked
const navItems: NodeListOf<Element> = document.querySelectorAll(".nav-menu a");

navItems.forEach((item: Element): void => {
    item.addEventListener("click", (): void => {
        // @ts-ignore
        const navMenu: HTMLElementWithClassList = document.getElementById("navMenu");
        navMenu.classList.remove("active");
    });
});