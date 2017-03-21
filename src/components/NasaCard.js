import React, { Component } from 'react'

import './NasaCard.css'

class NasaCard extends Component {

    render() {

        const {title, explanation, picture } = this.props

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image nasa-img-container">
                    <img alt="city" className="nasa-img" src={ picture } />
                    <span className="card-title" style={ { fontSize: 10 } }>
                        { title }
                    </span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="nasa-data">
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ explanation }</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default NasaCard
