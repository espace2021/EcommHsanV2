import React from 'react'
import axios from 'axios'
import Listproducts from '@/components/admin/Listproducts';
const getProducts=async()=>{
  const {data}=await axios.get(`${process.env.API_URL}/api/articles`)
  return data;
}
const AdminProducts  = async() => {
    const produits = await getProducts();
  return (
    <div>
      <Listproducts  produits={produits}/>
    </div>
  )
}

export default AdminProducts 

