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
      <h2>Simple route</h2>
      <input type="text" value={p.height} onChange={event => {}}/>
      <input type="submit" value={p.name}/>
      <SubComp name={p.match.url}/>
    </div>
  )
}
