import React from 'react'
import Image from 'next/image'

const SearchResult = ({productSearched}) => {
   
  return (
    <div className="grid grid-cols-2 gap-2">
     {productSearched && productSearched.length > 0 ? productSearched.map((product) =>
      <section key={product._id}>
     
       <div className="md:col-span-2">
          <Image
            src={product.imageart}
            alt={product.designation}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.designation}</h1>
            </li>
            <li>Brand: {product.marque}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>{product.prix} TND</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status : {product.qtestock > 0 ? 'In stock' : 'Unavailable'}</div>
            </div>
           </div>
        </div>
    
    </section>
     )
   :null}
    </div>
  )
}

export default SearchResult
