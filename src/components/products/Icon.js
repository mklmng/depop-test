import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Icon extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        liked: PropTypes.bool.isRequired,
        handleLike: PropTypes.func.isRequired
    }

    render() {
        const { id, liked, handleLike } = this.props;

        return (
            <div className="like-icon" onClick={() => handleLike(id)}>
                <svg 
                    viewBox="0 0 100 100" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill={liked ? 'red' : 'rgba(0,0,0,.2)'} 
                    stroke={liked ? 'red' : 'black'}
                >
                    <path d="M 10,30
                            A 20,20 0,0,1 50,30
                            A 20,20 0,0,1 90,30
                            Q 90,60 50,90
                            Q 10,60 10,30 z"/>
                    </svg>
            </div>
        )
    }
}

export default Icon
