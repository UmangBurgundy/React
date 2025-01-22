import React ,{useState} from 'react'


export default function TextForm(props){

    const UpClick=()=>{
        console.log("Uppercase was clicked")
        setText("You have clicked on upclick")
    }
    const OnChange=(event)=>{
        console.log("On Change")
        setText(event.target.value)
    }
    
    const [text,setText] = useState('Enter text here');
  return (
    <div>
        <div class="mb-3">
            <h1>{props.heading}</h1>
            <textarea class="form-control" value={text} onChange={OnChange} id="mybox" rows="16"></textarea>
            <button className="btn btn-primary" onClick={UpClick} >Convert to upper case</button>  
        </div>
    </div>
  )
}
