import Listcategories from '@/components/admin/categories/Listcategories';
import React from 'react'
import axios from 'axios';
const getCategories=async()=>{
  const {data}=await axios.get(`${process.env.API_URL}/api/categories`)
  return data;
}
const AdminCategories  = async() => {
    const categories = await getCategories();
  return (
    <div>
      <Listcategories  categories={categories}/>
    </div>
  )
}

export default AdminCategories 