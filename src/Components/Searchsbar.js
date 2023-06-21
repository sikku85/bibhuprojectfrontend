import React from 'react'
import "./Searchbar.css"

export const Searchsbar = () => {
  return (

<div className='searchitem'>
    <label class="search-label">
    <input type="text" name="text" class="input" required="" placeholder="Type here..."/>
    <kbd class="slash-icon">/</kbd>
    </label>
</div>    
    )
}
