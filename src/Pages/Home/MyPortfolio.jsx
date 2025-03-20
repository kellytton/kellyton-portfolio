import data from "../../data/index.json";

export default function MyPortfolio() {
    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="section--title">Recent Projects</p>
                    <h2 className="section--heading">My Portfolio</h2>
                </div>
                <div className="portfolio--container-box--button">
                    <a
                            href="https://github.com/kellytton"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="btn btn-primary">
                                <i className="ri-github-fill"></i> Visit My GitHub
                            </button>
                    </a>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">
                                    {item.title}
                                </h3>
                                <p className="txt-md">
                                    {item.description}
                                </p>
                            </div>
                            <div>
                                <p className="txt-md portfolio--section--tools">
                                    <b>Tools:</b> {item.tools}
                                </p>
                            </div>
                            {item.link_view && (
                                <a 
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio--link-title"
                                >
                                    <p className="text-sm portfolio--link">
                                        {item.link_view}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 20 19"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                                stroke="currentColor"
                                                strokeWidth="2.66667"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </p>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}