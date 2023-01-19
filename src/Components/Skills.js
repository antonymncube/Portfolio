import React, { Component } from 'react'
import '../Styles/skills.css'

export default class Skills extends Component {
    render() {
        return (
            <div className='skill' >
                <div className="card" >
                    <div className="card-body">
                        <img alt={this.props.skill} className='image' src={this.props.img} />
                        <h5 className="card-title">{this.props.skill}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
