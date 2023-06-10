
import React from 'react'


const SearchItem = ({word,setWord}) => {
  return (
    <div>
      <input 
      type="search" 
      placeholder="Search" 
      value={word} 
      onChange={(e) =>setWord(e.target.value)}
      />
    </div>
  )
}

export default SearchItem
