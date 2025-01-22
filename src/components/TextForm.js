import React ,{useState} from 'react'


export default function TextForm(props){

    const UpClick=()=>{
        console.log("Uppercase was clicked")
        let newText =text.toUpperCase();
        setText(newText)
    }
    const LowClick=()=>{
        console.log("Lowercase was clicked")
        let newText =text.toLowerCase();
        setText(newText)
    }    
    const OnChange=(event)=>{
        console.log("On Change")
        setText(event.target.value)
    }
    const ClearText=()=>{
        console.log("Clear Text was clcicked")
        let newText ='  ';

        setText(newText)
    }
    
    const [text,setText] = useState('Enter text here');
  return (
    <>
    <div>
        <div class="mb-3">

            <h1>{props.heading}</h1>

            <textarea class="form-control" value={text} onChange={OnChange} id="mybox" rows="12"></textarea>

            <p></p>

            <button className="btn btn-primary" onClick={UpClick} >Convert to upper case</button>
            <button className="btn btn-primary mx-2"  onClick={LowClick} >Convert to lower case</button>
            <button className="btn btn-primary" onClick={ClearText}>Clear the Chat</button>

        </div>
    </div>
    <div className="container">
        <h1>Your text Summary</h1>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
    </div>
    </>
  )
}
