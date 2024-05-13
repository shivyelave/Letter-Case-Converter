import { useState } from "react"
import React  from 'react'



export default function CaseChanger() {
    const [text, setText] = useState("")
    const uppercase = ()=>{
        setText(text.toUpperCase())
    }
    const onchange = (event)=>{
        setText(event.target.value)
    }
    const lowercase = ()=>{
        setText(text.toLowerCase())
    }
    const camelcase = ()=>{
        setText(text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, ''))
    }
    const sentencescase = ()=>{
        setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
    }
    const clear = ()=>{
        setText("")
    }




    console.log(text)
  return (
    <>
        <h1 className='heading my-4'>Case Changer</h1>
        <div className="container my-5">
                <textarea className="form-control" placeholder="Enter Your Text Here" value={text} onChange={onchange} id="floatingTextarea2"></textarea>

            <div className='d-flex justify-content-evenly my-2'>
                <button type="button" className="btn btn-primary m-1" onClick={uppercase} >UPPER CASE</button>
                <button type="button" className="btn btn-primary m-1"  onClick={lowercase}>lower case</button>
                <button type="button" className="btn btn-primary m-1"  onClick={camelcase}>Camel Case</button>
                <button type="button" className="btn btn-primary m-1"  onClick={sentencescase}>Sentence case</button>
                <button type="button" className="btn btn-danger m-1"  onClick={clear}>Clear</button>
            </div>
            <h2 className="my-3"><b>Summary: </b></h2>
            <div className="d-flex justify-content-center gap-3">
                
                <h3><b>Word Count: </b>{text.split(" ").length}</h3>
                <h3><b>Letter Count: </b> {text.length}</h3>
            </div>
        </div>
    
    </>
  )
}
