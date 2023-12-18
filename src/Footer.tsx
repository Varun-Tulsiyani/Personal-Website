import React from "react";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="social-media">
                <ul>
                    <li className="twitter">
                        <a href="https://www.twitter.com/varuntulsiyani" target="_blank" rel="noreferrer"
                           title="Twitter (@varuntulsiyani)">
                            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="instagram">
                        <a href="https://www.instagram.com/varuntulsiyani" target="_blank" rel="noreferrer"
                           title="Instagram (@varuntulsiyani)">
                            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="linkedin">
                        <a href="https://www.linkedin.com/in/varun-tulsiyani" target="_blank" rel="noreferrer"
                           title="LinkedIn (@varun-tulsiyani)">
                            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="github">
                        <a href="https://www.github.com/Varun-Tulsiyani" target="_blank" rel="noreferrer"
                           title="GitHub (@Varun-Tulsiyani)">
                            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;