import React from 'react'

const SubComp = (x) => {
  return (
    <div>
      {x.name}
    </div>
  )
}

export default (props) => {
  return (
    <div className='thumbnail'>
      <h2>Simple route</h2>
      <input type="text" value={props.height} onChange={event => {}}/>
      <input type="submit" value={props.name}/>
      <SubComp name={props.match.url}/>
    </div>
  )
}
