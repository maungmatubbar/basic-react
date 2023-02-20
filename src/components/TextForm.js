import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUppercaseClick = ()=>{
        let newText= text2.toUpperCase()
        setText(newText)
        props.showAlert('Converted to uppercase','success');
    }
    const handleOnchange = (event)=>{
        setText(event.target.value)
    }
    const handleLowerClick = () => {
        let newText= text2.toLowerCase()
        setText(newText)
        props.showAlert('Converted to lowercase','success');
    }
    const handleClearText = () => {
        setText("")
        props.showAlert('Cleared text','success');
    }
    const handleCopyText = () => {
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert('Copied to clipboard','success');
        
    }
    const handleRomoveSpace = () => {
            let newText = text2.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert('Removed extra space','success');
    }
    const [text2, setText] = useState('');
  return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className='my-3'>
                    <label htmlFor="myBox">Example Textarea</label>
                    <textarea style={{ backgroundColor:props.mode==='dark'?'#74b2ed':'white'}} className={`form-control text-${props.mode ==='dark'?'light':'dark'}`} name="my_box" id="myBox" cols="30" rows="10" value={text2} onChange={handleOnchange}></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUppercaseClick}>Convert To Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowerClick}>Convert To Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopyText}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleRomoveSpace}>Remove Extra Space</button>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text2.split(" ").length} words and {text2.length} characters</p>
                <p>{text2.split(" ").length * 0.008} Minutes</p>
                <h1>Text Preview</h1>
                <p>{text2}</p>
            </div>
        </>
  )
}
