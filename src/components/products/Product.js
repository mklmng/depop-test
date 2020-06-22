import React, { Component } from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types'

export class Product extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        size: PropTypes.string.isRequired,
        handleLike: PropTypes.func.isRequired,
        liked: PropTypes.bool.isRequired,
        sold: PropTypes.bool.isRequired
    }

    render() {
        const {id, img, title, brand, price, size, handleLike, liked, sold } = this.props;

        return (
        <div className="col-md-3">
            <div className="card mb-4 box-shadow">
                <div className={`image-wrapper ${sold ? "sold" : ""}`}>
                    <Icon 
                        id={id}
                        liked={liked}
                        handleLike={handleLike}    
                    />
                    <img className="card-img-top" src={img} alt={title} />
                </div>
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">{brand && brand}</p>
                    <p className="card-text">{size}</p>
                    <p className="card-text bold">£{parseFloat(price)}</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Product
