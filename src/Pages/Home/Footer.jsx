import { Link } from "react-scroll";
import React from "react";

function Footer() {
    return (
        <footer className="footer--container">
            <div className="footer--link--container">
                <div>
                    <img src="./img/KELLY_TON_LOGO.png" alt="Logoipsum" />
                </div>
                <div className="footer--items">
                    <ul>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="heroSection"
                                className="text-md"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="mySkills"
                                className="text-md"
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="AboutMe"
                                className="text-md"
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="MyPortfolio"
                                className="text-md"
                            >
                                Portfolio
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Same as Hero Section Links */}
                <div className="hero--section--links">
                        <div className="hero--section--links-icons">
                            <a
                                href="https://www.linkedin.com/in/kellytton/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero--section--links-1"
                            >
                                <i className="ri-linkedin-box-fill"></i>
                            </a>
                            <a
                                href="https://github.com/kellytton"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero--section--links-2"
                            >
                                <i className="ri-github-fill"></i>
                            </a>
                            <a
                                href="mailto:kthton@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero--section--links-3"
                            >
                                <i className="ri-mail-line"></i>
                            </a>
                        </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;