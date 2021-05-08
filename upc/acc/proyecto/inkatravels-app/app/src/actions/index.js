import { URL_LOGIN, URL_USERS_POST, URL_CATEGORIES, URL_PRODUCTS_BYCATEGORY } from './../constants/endpoints'

export const getCategories = () => {
  return fetch(URL_CATEGORIES)
    .then( (data) => data.json() )
}

export const getProductsByCategory = (categoryId) => {
  const url = URL_PRODUCTS_BYCATEGORY.replace('{{category}}', categoryId)
  return fetch(url)
    .then( (data) => data.json() )
}