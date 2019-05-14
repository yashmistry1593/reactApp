import React, { useState,useEffect } from 'react'


function Hooks() {

  const [val, setValue] = useState('');
  const [steps, setSteps] = useState(0);
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    console.log("hiiiiiiiii")
    setValue(e.target.value)
  }

  //or

  // function handleChange(e){
  //   setValue(e.target.value)
  // }

  function increment() {
    const newSteps = steps + 1
    setSteps(newSteps)
  }

  function addRandomNum() {
    const a = Math.ceil(Math.random() * 100);
    const newItemList = [...items, a]
    setItems(newItemList)
    console.log(items)
  }

  // function handleAlertClick() {
  //   setTimeout(() => {
  //     alert('You clicked on: ' + steps);
  //   }, 3000);
  // }

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${steps} times`);
    }, 3000);
  });

 
  return (
    <div>
      <h3>Two way data bind using hooks</h3>
      <input type="text" onChange={handleChange} />
      {/* <input type="text" onChange={(e)=>handleChange(e)}/> */}
      <p>{val}</p>



      <br />
      <h3>Step calculator</h3>
      <button onClick={increment}>I took another step</button> Today you've taken {steps} steps!
      <br /> <br /> <br />


      <h3>Add random number to an array</h3>
      <button onClick={addRandomNum}>click</button>
      <ul>
        {items.map((i, index) => (<li key={index}>{i}</li>))}
      </ul>

      {/* <button onClick={handleAlertClick}>
        Show alert
      </button> */}

    </div>
  )
}

export default Hooks
