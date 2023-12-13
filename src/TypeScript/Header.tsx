// @ts-ignore
import React, {useEffect} from "react";

const Header: React.FC = (): void => {
    useEffect((): void => {
        // Fetch and insert header
        fetch('header.html')
            .then((response: Response) => response.text())
            .then((data: string): void => {
                // @ts-ignore
                let headerPlaceholder: HTMLElement | null = document.getElementById('header-placeholder');
                if (headerPlaceholder) {
                    headerPlaceholder.innerHTML = data;
                }
            })
            .catch((error): void => console.error('Error fetching header:', error));
    },  []);
}

export default Header;