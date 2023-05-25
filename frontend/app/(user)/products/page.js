import React from 'react'
import ProductCard from '../../../components/user/ProductCard'
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

import axios from 'axios'

const getProducts=async()=>{
const session = await getServerSession(authOptions);
console.log(JSON.stringify(session, null, 2))
  const res= await axios.get('http://localhost:3001/api/articles',
  {
    
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
    },
  });
 
  const products = await res.json();
  console.log(products)
return products
};



/*const getProducts=async()=>{
  const session = await getServerSession(authOptions);
  console.log (session)
  return await axios.get("http://localhost:3001/api/articles",
    { headers: {"Authorization" : `Bearer ${session?.user.token}`} 
  });
    
}*/
const ProductPage = async() => {
  const produits = await getProducts();
  return (
    <div className="flex flex-wrap gap-4 p-2">
      
<ProductCard produits={produits}/>

    </div>
  )
}

export default ProductPage
