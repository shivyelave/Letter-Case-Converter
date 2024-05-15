import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: 50}}>
      {props.message && <div className="alert alert-success" role="alert">
      Success! {props.message}
      </div>}
    </div>
    )
}
