import React from 'react'

const getCategories=async()=>{

 
    const res= await fetch(`${process.env.API_URL}/api/categories`,
    {
      method: "GET",
      cache: "no-store"
    });
  const categories = await res.json();
 
  return categories
  }

const CategoriesList = async() => {
    const categories = await getCategories()
  return (
    <div>
      {
        categories.map((category) => {
            return(
                 <div key={category._id}>
                    {category.nomcatgorie}
                    </div>
                  )}
                  )
      }
    </div>
  )
}

export default CategoriesList
