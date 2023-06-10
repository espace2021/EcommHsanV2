import React from 'react'
import SearchComponent from '@/components/user/searchComponent'

const getProducts=async()=>{

 
    const res= await fetch(`${process.env.API_URL}/api/articles`,
    {
      method: "GET",
      cache: "no-store"
    });
  const products = await res.json();
  
  return products
  }
  
const SearchPage = async() => {

    const produits = await getProducts();

  return (
   <SearchComponent produits={produits} />
  )
}

export default SearchPage
