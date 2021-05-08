import React from 'react'

import LOGO from '../../images/logo.jpeg'
import Categories from '../Categories'

const Header = ( {categories} ) => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={LOGO} alt="inkatravels"></img>
      </div>
      <Categories categories={categories}></Categories>
    </div>
  )
}

export default Header