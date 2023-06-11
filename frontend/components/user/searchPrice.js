
import React from 'react'
import "./style.css"

const SearchPrice = ({price,setPrice,maxPrice}) => {

  const optionsData=()=>{
    for (let i=0; i<maxPrice; i+=50){
      <option value={i} label={i} key={i}></option>
     }
  }

  return (
    <div>
    {'   '} 
<div>
 
 <input type="range" id="price" name="price" list="values" 
  onChange={(event) => {setPrice(event.target.value)}}
  defaultValue={maxPrice}
  min="0" max={maxPrice} step="50" 
  />
    <label htmlFor="price">Prix MAX { price }</label>
  
</div>

<datalist id="values">
 {optionsData()}
</datalist>
    </div>  
  )
}

export default SearchPrice
