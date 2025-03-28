import data from "../../data/index.json";

export default function MySkills() {
    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">
                    My Skills
                </p>
                <h2 className="skills-section--heading">
                    My ToolKit
                </h2>
            </div>
            <h3>Development</h3>
            <div className="skills--section--container">
                {data?.skills_development?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} alt={item.title}/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            <h3>Database</h3>
            <div className="skills--section--container">
                {data?.skills_database?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} alt={item.title}/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}