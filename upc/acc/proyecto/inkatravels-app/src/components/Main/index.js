import React, { Component } from 'react';
import Header from '../Header';
import Products from '../Products';
import { getProductsByCategory } from '../../actions';

// const Main = ({categories}) => {

//   const products = async () => {
//     return await getProductsByCategory();
//   }

//   return (
//     <div>
//       <Header categories={categories}></Header>
//       <Products products={products}></Products>
//     </div>
//   );
// };



class Main extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentWillMount() {
    getProductsByCategory(this.props.catId).then((result) => {
      this.setState({products: result})
    })
  }

  render() {
    if (this.state.products.length === 0) {
      return (
        <div>
          <Header categories={this.props.categories}></Header>
          Cargando...
      </div>  
      )
    }
    return (
      <div>
        <Header categories={this.props.categories}></Header>   
        <Products products={this.state.products}></Products>
      </div>
    );
  }
}

export default Main;