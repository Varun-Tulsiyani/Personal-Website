import React from "react";
import Span from "./Span";

interface ProjectProperties {
    imageSrc: string;
    readMoreLink: string;
    gitHubLink: string;
    title: string;
    description: string;
}

const Project: React.FC<ProjectProperties> = (x: ProjectProperties) => {
    return (
        <div className="project">
            <div className="project-image">
                <img alt="project-image" src={x.imageSrc}/>
                <div className="project-overlay">
                    <div className="project-overlay-text">
                        <div className="button">
                            <a href={x.readMoreLink}>
                                <Span/>
                                Read More
                            </a>
                            <a href={x.gitHubLink}>
                                <Span/>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-text">
                <h3>{x.title}</h3>
                <p>{x.description}</p>
            </div>
        </div>
    )
}

export default Project;