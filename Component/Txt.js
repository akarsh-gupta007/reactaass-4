import React,{useState} from 'react'
export default function Textform (props) {

    const [text,setText]=useState()
    const handleclick=()=>{
let newtxt=text.toUpperCase()
setText(newtxt)
}
const handleclick2=()=>{
    let newtxt2=text.toLowerCase()
    setText(newtxt2)
}
const handleclickclear=()=>{
  let newtxt2=''
  setText(newtxt2)
}
   const handleonchange=(event)=>{
      setText(event.target.value)
}

  return (
    <>

<div className="container">

<h1>{props.headings}</h1>


<div className="mb-3">
  <label htmlFor="textarea" className="form-label"></label>
  <textarea className="form-control" placeholder='Type Something to see result' value={text} onChange={handleonchange} id="textarea" rows="3"></textarea>

   <button className='btn btn-primary my-2 mx-2' onClick={handleclick} >convert to Uppercase</button>
  <button className='btn btn-primary my-2 mx-2'  onClick={handleclick2}>convert to Lowercase</button>
  <button className='btn btn-primary my-2 mx-2'  onClick={handleclickclear}>clear</button>

  </div>

</div>
<div className="container">
  <h2>YOUR TEXT SUMMARY Preview</h2>
 
  <p>{text}</p>
</div>




</>

  )
}

