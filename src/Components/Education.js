import React, { Component } from "react";
import "../Styles/education.css";

export default class Education extends Component {
    render() {
        return (
            <div className="text-center educationcard">
                <h2 className="educationHeader">Education</h2>
                <ul className="list2">
                    <li>2022 - 2023 Hyperion dev Full Stack Web development</li>
                    <li className="p-2">
                        2019 - 2022 VAAL UNIVERSITY of TECHNOLOGY DIPLOMA IN
                        INFORMATION TECHNOLOGY
                    </li>
                    <li className="p-2">
                        2019 - CISCO NETWORKING ACADEMY CCNA SWITCHING AND
                        ROUTING
                    </li>
                    <li className="p-2">
                        2013 - 2017 KAALFONTEIN SECONDARY SCHOOL MATRIC
                    </li>
                </ul>
            </div>
        );
    }
}
