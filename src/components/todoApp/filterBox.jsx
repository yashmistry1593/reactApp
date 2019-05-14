import React from 'react'

function FilterBox(props) {

  const handleSelectChange=(e)=>{
   props.filterByValue(e.target.value)
  }

  return (
    <div>
      <select name="" id="" onChange={(e)=>handleSelectChange(e)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Active">Active</option>
      </select>
    </div>
  )
}

export default FilterBox
