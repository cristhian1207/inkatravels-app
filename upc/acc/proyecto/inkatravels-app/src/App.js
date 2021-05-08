import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { getCategories, getProductsByCategory } from './actions';
import './App.css';
import Main from './components/Main';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: []
    }
  }

  componentWillMount() {
    getCategories().then( (result) => {
      this.setState({categories: result});
    })
  }

  firstRoute() {
    const firstCategory = this.state.categories[0];
    return (
      <Route exact path='/' key={firstCategory.CATEGORIES_ID} component={props => <Main categories={this.state.categories}></Main>}></Route>
    )
  }

  routeComponent() {
    const routes = this.state.categories.map(category => (
        <Route exact path={`/${category.CATEGORIES_ID}`} key={category.CATEGORIES_ID} component={props => <Main catId={category.CATEGORIES_ID} categories={this.state.categories}></Main>}></Route>
      )
    )
    return routes
  }

  render() {
    if (this.state.categories.length === 0) {
      return (
        <span>Cargando ...</span>
      )
    } else {
      return (
        <div className="App">
            <Router>
              <div>
                {this.firstRoute()}
                {this.routeComponent()}
              </div>
            </Router>
        </div>
      )
    }
    
  }
}

export default App;
