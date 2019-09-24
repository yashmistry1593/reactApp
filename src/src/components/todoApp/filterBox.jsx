import React, { useState, useEffect } from 'react'

function FilterBox(props) {

  const [val, setVal] = useState('');
  useEffect(() => props.filterByValue(val));

  const handleSelectChange = (e) => {
    setVal(e.target.value)
    //props.filterByValue(e.target.value)
  }
  return (
    <div>
      <select name="" id="" onChange={(e) => handleSelectChange(e)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Active">Active</option>
      </select>
    </div>
  )
}

export default FilterBox
