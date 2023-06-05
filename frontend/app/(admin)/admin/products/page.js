import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";

import Listproducts from '@/components/admin/Listproducts';

const getProducts=async()=>{

  const session = await getServerSession(authOptions);

  const res= await fetch(`${process.env.API_URL}/api/articles`,
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
    },
  });
const products = await res.json();

return products
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

