export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Kelly</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">Passionate about <b>clean code</b> and elegant <b>software solutions.</b>
                        <br/> Code with clarity, design with purpose.
                    </p>
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
                        <div className="hero--section--links-button">
                            <a
                                href="/Kelly_Ton_Resume.pdf"
                                download
                                aria-label="Download Resume"
                                className="hero--section--links-4"
                            >
                                <button className="btn btn-primary">
                                    <i className="ri-download-line"></i> Download Resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/my_drawing.png" alt="Hero Section"/>
            </div>
        </section>
    );
}