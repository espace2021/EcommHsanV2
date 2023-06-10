'use client';
import React,{useState,useEffect} from 'react'
import SearchItem from "./SearchItem"
import SearchResult from "./SearchResult"
import SearchPrice from './searchPrice';
import SearchCategories from './searchCategories';

const SearchComponent = ({produits}) => {
   
    const maxPrice =  Math.max(...produits.map(o => o.prix))

    const [productSearched,setProductSearched] = useState(produits);
    const [word, setWord] = useState("");
    const [price, setPrice] = useState(maxPrice);

    
    const search=()=>{
     return produits
      .filter(item => item.designation.indexOf(word) > -1)
      .filter(item => item.prix<=price)
      
  }

  useEffect(() => {
    const res = search()
    setProductSearched(res)
  }, [productSearched,search]);

  return (
    <div className="grid grid-cols-2 gap-4">
    <div>

        <SearchItem word={word} setWord={setWord} />
   
        <SearchPrice price={price} setPrice={setPrice} maxPrice={maxPrice}/>

        <SearchCategories />

    </div>
    <div><SearchResult productSearched={productSearched} /></div>
   </div>
  )
}

export default SearchComponent
