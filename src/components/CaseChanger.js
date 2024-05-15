import { useState } from "react"
import React  from 'react'



export default function CaseChanger(props) {
    const [text, setText] = useState("")
    const uppercase = ()=>{
        setText(text.toUpperCase())
        if(text !==''){
        props.displayMessage("Letters are Converted to UPPERCASE")}
    }
    const onchange = (event)=>{
        setText(event.target.value)

    }
    const lowercase = ()=>{
        setText(text.toLowerCase())
        if(text !==''){
        props.displayMessage("Letters are Converted to lowercase")}

    }
    const camelcase = ()=>{
        setText(text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, ''))
        if(text !==''){
        props.displayMessage("Letters are Converted to camelCase")}

    }
    const sentencescase = ()=>{
        setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
        if(text !==''){
        props.displayMessage("Letters are Converted to Sentence case")}

    }
    const clear = ()=>{
        setText("")
        if(text !==''){
        props.displayMessage("Text Cleared")}

    }

       
    const copyText = () => {
            navigator.clipboard.writeText(text)
            props.displayMessage("Text Copied")

    };

          

  return (
    <>

        <h1 className='heading my-4'style={{color: props.mode==="light"?'black':'white'}}>Case Changer</h1>
        <div className="container my-5 " >
                <textarea className="form-control" placeholder="Enter Your Text Here" value={text} onChange={onchange} id="floatingTextarea2"></textarea>

                <div className="container my-2">
                    <div className="row">
                        <div className="col-6 col-md">
                            <button type="button" className="btn btn-primary btn-block btn-sm my-1" onClick={uppercase}>UPPER CASE</button>
                        </div>
                        <div className="col-6 col-md">
                            <button type="button" className="btn btn-primary btn-block btn-sm my-1" onClick={lowercase}>lower case</button>
                        </div>
                        <div className="col-6 col-md">
                            <button type="button" className="btn btn-primary btn-block btn-sm my-1" onClick={camelcase}>Camel Case</button>
                        </div>

                        <div className="col-6 col-md">
                            <button type="button" className="btn btn-primary btn-block btn-sm my-1" onClick={sentencescase}>Sentence case</button>
                        </div>
                        <div className="col-6 col-md">
                            <button type="button" className="btn btn-primary btn-block btn-sm my-1" onClick={copyText}>Copy Text</button>
                        </div>
                        <div className="col-6 col-md">
                            <button type="button" className="btn btn-danger btn-block btn-sm my-1" onClick={clear}>Clear</button>
                        </div>
                    </div>
                </div>

            <h2 className="my-3" style={{color: props.mode==="light"?'black':'white'}}><b>Summary: </b></h2>
            <div className="d-flex justify-content-center gap-3">
                
                <h3 style={{color: props.mode==="light"?'black':'white'}}><b>Word Count: </b>{text.split(/\s+/).filter(word => word !== '').length}</h3>
                <h3 style={{color: props.mode==="light"?'black':'white'}}><b>Letter Count: </b> {text.length}</h3>
            </div>
        </div>
    
    </>
  )
}
