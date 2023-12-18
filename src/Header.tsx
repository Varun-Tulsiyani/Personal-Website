import React, { useEffect, useRef } from 'react';

const Header: React.FC = () => {
    const headerRef: React.MutableRefObject<any> = useRef(null);
    const navMenuRef: React.MutableRefObject<any> = useRef(null);

    useEffect(() => {
        const handleHamburgerClick = (): void => {
            navMenuRef.current.classList.toggle('active');
        };

        const handleNavItemClick = (): void => {
            navMenuRef.current.classList.remove('active');
        };

        // @ts-ignore
        document.getElementById('hamburger').addEventListener('click', handleHamburgerClick);
        document.querySelectorAll('.nav-menu a').forEach((item: Element): void => {
            item.addEventListener('click', handleNavItemClick);
        });

        return (): void => {
            // @ts-ignore
            document.getElementById('hamburger').removeEventListener('click', handleHamburgerClick);
            document.querySelectorAll('.nav-menu a').forEach((item: Element): void => {
                item.removeEventListener('click', handleNavItemClick);
            });
        };
    }, []);

    return (
        <header className="sticky" ref={headerRef}>
            <nav className="navbar">
                <div className="hamburger" id="hamburger">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <nav className="nav-menu" id="navMenu" ref={navMenuRef}>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Career</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </nav>
            </nav>
        </header>
    );
};

export default Header;