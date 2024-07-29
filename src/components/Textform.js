import React , { useState } from 'react';

export default function Textform(props) {
    const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text); we dont need this
    let newText = text.toUpperCase();
    setText(newText) 
}
    const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text); we dont need this
    let newText = text.toLowerCase();
    setText(newText) 
}
    const clearText = () => {
    // console.log("Uppercase was clicked" + text); we dont need this
    let newText ='';
    setText(newText) 
}
    
    const handleonChange = (event) => {
        // console.log("On change"); we dont need this
        setText(event.target.value)
   }
    const [text, setText] = useState('Enter text here2');
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            

                <div className="mb-3">
                    
                    <textarea className="form-control" value={text} onChange ={handleonChange} style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}
 id="myBox" rows="3"></textarea>
                </div>
            <button className="btn btn-primary"onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3"onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2"onClick={clearText}>Clear all</button>
        </div>
        <div className="container">
            <h1>This is the text Summery</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} 
                 words and {text.length} Characters</p>
            <p>This is preview</p>
            <p>{text}</p>
        </div>

        </>
        

        
    )
}
