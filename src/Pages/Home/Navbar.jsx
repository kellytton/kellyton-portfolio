import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
    // nav is not active by default (indicated by false)
    const [navActive, setNavActive] = useState(false);

    // toggle navbar
    const toggleNav = () => {
        // toggle state of navActive
        setNavActive(!navActive);
    };

    // close navbar
    const closeMenu = () => {
        setNavActive(false);
    };

    /* ensures that when the user resizes the window while on the page, 
    the navbar will close if the screen size is small enough */
    useEffect(() => {
        const handleResize = () => {
            // check if width is less than or equal to 500 pixels
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        // cleanup function
        return () => {
            // remove event listener when the component unmounts
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    /* ensures that when the page initially loads and the window is
    small, the navbar will start in a closed state */
    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="./img/KELLY_TON_LOGO.png" alt="Logoipsum" />
            </div>
            <a className={`nav__hamburger ${navActive? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="heroSection" className="navbar--content">Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="mySkills" className="navbar--content">Skills</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar--content">About Me</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="MyPortfolio" className="navbar--content">Portfolio</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;