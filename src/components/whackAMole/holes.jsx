import React from 'react'

function Holes(props) {
  return (
    <React.Fragment>
      <div className={`hole hole${props.index} ${props.item == 1 ? 'up' : ''}`}>
        <div className="mole" onClick={()=>props.incrementPoints(props.index)}></div>
      </div>
    </React.Fragment>
  )
}

export default Holes
