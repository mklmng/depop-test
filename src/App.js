import React, { Component } from 'react';
import axios from 'axios';
import Product from './components/products/Product';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      loading: false,
      showLikes: false,
      showSold: true
    }
}  

componentDidMount() {
  if (!this.state.products.length){
    this.setState({ loading: true}, () => {
      axios.get('https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products')
      .then(response => {
        let updatedProducts = response.data;
        updatedProducts.forEach(product => {
          product.liked = false
        }); 
        
        this.setState({
          loading: false,
          products: updatedProducts
        })
      })
      .catch(error => {
        this.setState({ loading: false })
      })
    });
  }
}

handleLike = (id) => {
  let updatedProducts = [...this.state.products];
  updatedProducts.forEach((p) => {
    if (p.id === id) {
        p.liked = !p.liked;
    }
  });

  this.setState({ products: updatedProducts})
}

toggleSold = () => {
  this.setState({ showSold: !this.state.showSold })
}

render(){
  let likedItems = this.state.products.filter(p => p.liked).length;
  let filteredProducts = this.state.products;

  if (!this.state.showSold){
      filteredProducts = filteredProducts.filter(p => !p.sold);
  }

  return (
    <div className="App">
    <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
    />

      <div className="top-bar align-right">
        <button type="button" className="btn btn-sm btn-outline-secondary" >Liked {likedItems}</button>
      </div>  
      <div id="product-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <div id="results">
                <h2>{filteredProducts.length} results.</h2>
              </div>
            </div>
            <div className="col align-center-right">
                <button 
                  type="button" 
                  className="btn btn-sm btn-outline-secondary"                 
                  onClick={() => this.toggleSold()}
                >
                {this.state.showSold ? 'Hide sold items' : 'Show sold items'}  
                </button>
            </div>
          </div>
          <div className="row">
          {
              filteredProducts.map((product, index) => {

              return (
                  <Product key={index}
                    id={product.id}
                    img={product.img}
                    title={product.title}
                    brand={product.brand}
                    price={product.price}
                    size={product.size}
                    liked={product.liked}
                    sold={product.sold}
                    handleLike={this.handleLike}
                  />
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;