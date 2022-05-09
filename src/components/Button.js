import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button onClick={props.testFunc} className={`btn ${props.class}`}>{props.value}</button>
    </div>
  )
}
