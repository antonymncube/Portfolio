import "./Styles/App.css";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Education from "./Components/Education";
import Navigation from "./Components/Navigation";

import python from "./images/python.png";
import javascript from "./images/javascript.webp";
import html from "./images/html.png";
import vb from "./images/vb.webp";
import css from "./images/css.png";
import bootstrap from "./images/bootstrap.png";
import communication from "./images/communication.png";
import problemsolving from "./images/problem.jfif";
import critical from "./images/criticalt.jfif";
import time from "./images/time.jpg";
import team from "./images/team.jpg";
import leadership from "./images/leadership.jfif";
import profile from "./images/profilpic.png";

function App() {
    const skills = [
        {
            skill: "HTML",
            img: html,
        },
        {
            skill: "CSS",
            img: css,
        },
        {
            skill: "JAVASCRIPT",
            img: javascript,
        },
        {
            skill: "BOOTSRAP",
            img: bootstrap,
        },
        {
            skill: "PYTHON",
            img: python,
        },
        {
            skill: "VB.NET",
            img: vb,
        },
    ];

    const softskills = [
        {
            skill: "COMMUNICATION",
            img: communication,
        },
        {
            skill: "PROBLEM SOLVING",
            img: problemsolving,
        },
        {
            skill: "CRITICAL THINKING",
            img: critical,
        },
        {
            skill: "TIME MANAGEMENT",
            img: time,
        },
        {
            skill: "TEAM-WORK",
            img: team,
        },
        {
            skill: "LEADERSHIP",
            img: leadership,
        },
    ];

    return (
        <>
            <Navigation />
            <Header profileImage={profile} />
            <About />
            <div id="linebreak">
                <i className="fa-solid fa-arrow-down-long"></i>
            </div>
            <div className="container-fluid p-0 skillscontainer" id="skill">
                <div className="text-center p-3 techskills">
                    <h2 className="text-center">TECHNICAL SKILLS</h2>
                    <div className="skillsContainer">
                        {skills.map((value, index) => {
                            return (
                                <Skills
                                    skill={value.skill}
                                    img={value.img}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="text-center p-3 softskills">
                    <h2 className="text-center">SOFT-SKILLS SKILLS</h2>
                    <div className="skillsContainer">
                        {softskills.map((value, index) => {
                            return (
                                <Skills
                                    skill={value.skill}
                                    img={value.img}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
                <div id="linebreak2">
                    <i className="fa-solid fa-arrow-down-long"></i>
                </div>
                <Education />
            </div>
        </>
    );
}

export default App;
