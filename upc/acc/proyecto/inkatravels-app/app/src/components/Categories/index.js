import React from 'react'
import { Link } from 'react-router-dom';
import Category from './Category';

const Categories = ({ categories }) => {
  const strToComponents = (categories) => (
    categories.map( category => (
        <Link to={`/${category.CATEGORIES_ID}`}><Category key={category.CATEGORIES_ID} catName={category.NAME} /></Link>
      )
    )
  )

  return (
    <div className='navBarContainer'>
      { strToComponents(categories) }
    </div>
  )
}

export default Categories 