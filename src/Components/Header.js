import React, { Component } from 'react'
import '../Styles/Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="headerContainer row m-0">
                    <div className='col-7 text-center text-white col1'>
                        <div className="col1Info">
                            <h1 className='heading' id='home'>I'M A WEB DEVELOPER</h1>
                            <div className="line"></div>
                            <p
                                className='firstpara p-4 about'
                                id='about'>
                                <mark>I am a motivated</mark> university graduate <mark>seeking</mark> to begin my path to a long and <mark>illustrious career</mark> with a reputable organization.
                                <mark>I'm searching</mark> for a challenging role that will allow me to <mark>grow</mark> and <mark>contribute</mark> to the progress of the organisation, the IT sector, and society as a whole.
                            </p>
                            <p className='speaker'>
                                <span className='leftLine'></span>
                                <i id="aboutme">Antony</i>
                                <span className='rightLine'></span>
                            </p>
                        </div>
                    </div>
                    <div className='col-5' >
                        <img alt={"main"} className='main-image' src={this.props.profileImage} />
                    </div>
                </div>
            </div>
        )
    }
}
