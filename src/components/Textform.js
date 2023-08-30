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


    const [text, setText]=useState("Write a story here");
    return (
        <div>
            <h2>{props.heading}</h2>
            
            <div className="mb-3">
                <textarea className="form-control" id="exampleformControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={Upper}>UpperCase</button>
            {/* <button className="btn btn-primary">LowerCase</button> */}
        </div>
    )
    }
