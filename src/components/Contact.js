import React from 'react'

const SubComp = (x) => {
  return (
    <div>
      {x.name}
    </div>
  )
}

export default (p) => {
  return (
    <div className='thumbnail'>
      <b> Contact </b>
      <input type="text" value={p.height}/>
      <input type="submit" value={p.name}/>
      <SubComp name={p.name}/>
    </div>
  )
}
