import React, { Component } from 'react'
import '../Styles/about.css'

export default class About extends Component {
    render() {
        return (

            < div className='container  '>
                <div className='row my-5 d-flex justify-content-around'>
                    <div className='col-8 text center'>
                        <h1 className='aboutme text-center md-3' >About ME</h1>
                    </div>
                    <div className='col-8  '>
                        <p className='p'>
                            I enjoy developing web-based apps because of the ease of use they provide. My interest in software development began in 2015, while I was in high school. I've always been interested by how the internet has made life easier, which led me to pursue information technology at Vaal University of Technology. Studying information technology enabled me to be more creative in software development, where I experimented with building projects that would make my life simpler and potentially make the world a better place for everyone.
                            I am constantly eager to learn new things and challenge myself to create better web applications
                        </p>
                    </div>
                </div>

            </div>

        )
    }
}
