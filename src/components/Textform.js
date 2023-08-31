import React,{useState} from 'react'


export default function Texthtmlform(props) {
    const Upper=()=>{
        //setText("you have clicked uppercase")
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const lower=()=>{
        //setText("you have clicked uppercase")
        let newText=text.toLowerCase();
        setText(newText);
    }
    
    const clear=()=>{
        //setText("you have clicked uppercase")
        let newText="";
        setText(newText);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const [text, setText]=useState("Write a story here");
    return (
        <>
            <div>
                <h2>{props.heading}</h2>
                
                <div className="mb-3">
                    <textarea className="form-control" id="exampleformControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={Upper}>UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={lower}>LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>  
                <button className="btn btn-primary" onClick={speak}>speak</button>  
            </div>
            <div className="container my-3">
                <h1>your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>takes average {0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
    }
