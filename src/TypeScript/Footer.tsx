// @ts-ignore
import React, {useEffect} from "react";

const Footer: React.FC = (): void => {
    useEffect((): void => {
        // Fetch and insert footer
        fetch('footer.html')
            .then((response: Response) => response.text())
            .then((data: string): void => {
                // @ts-ignore
                let footerPlaceholder: HTMLElement | null = document.getElementById('footer-placeholder');
                if (footerPlaceholder) {
                    footerPlaceholder.innerHTML = data;
                }
            })
            .catch((error): void => console.error('Error fetching footer:', error));
        }, []);
}

export default Footer;