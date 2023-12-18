import React from "react";
import {Helmet} from 'react-helmet';
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import Span from "./Span";
import Project from "./Project";
import profilePhoto from './res/varun-portrait-2-try.jpg';

function App(): React.JSX.Element {
    return (
        <div>
            <Helmet>
                <meta charSet="UTF-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"/>
                <title>Varun Tulsiyani</title>
                <link crossOrigin="anonymous"
                      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                      rel="stylesheet"/>
            </Helmet>

            <Header/>

            <div className="name-photo">
                <h1 className="intro" id="intro">Hey I'm</h1>
                <h2 className="name" id="name">Varun Tulsiyani</h2>
                <img alt="My Photo" id="profile-photo" src={profilePhoto}/>
            </div>
            <section className="about" id="about">
                <h2>About Me</h2>
                <p>A student at the University of Wollongong in Dubai.</p>
                <div className="button">
                    <a className="link color-red" href="">
                        {/*suppress XmlDuplicatedId*/}
                        <Span/>
                        Find out more about Varun
                    </a>
                </div>
            </section>

            <section className="project" id="project">
                <h2>Projects</h2>
                <div className="projects">
                    <Project
                        imageSrc=""
                        readMoreLink=""
                        gitHubLink=""
                        title=""
                        description=""
                    />
                    <Project
                        imageSrc=""
                        readMoreLink=""
                        gitHubLink=""
                        title=""
                        description=""
                    />
                </div>

                <div className="button">
                    <a className="more-info-button" href="Projects.html">
                        <Span/>
                        More Projects
                    </a>
                </div>
            </section>

            <section className="career" id="career">
                <h2>Career</h2>
                <div id="bachelors">
                    <h3 className="company">University of Wollongong in Dubai</h3>
                    <h4 className="position">Bachelor of Computer Science (Big Data)</h4>
                    <h4 className="date">Jan 2023 - Present</h4>
                </div>
                {/* Additional career information can be added here */}
                <div className="button">
                    <a className="more-info-button" href="">
                        <Span/>
                        Get CV
                    </a>
                </div>
            </section>

            <section className="blog" id="blog">
                <h2>Blog</h2>
                <p>Here's my latest blog post</p>
                <div className="button">
                    <a className="more-info-button" href="">
                        <Span/>
                        Blog Page
                    </a>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default App;