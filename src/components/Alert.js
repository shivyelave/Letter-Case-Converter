import React from 'react'

export default function Alert(props) {
  return (
    props.message && <div className="alert alert-success" role="alert">
    Success! {props.message}
    </div>  
    )
}
