import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm({pageTitle= 'Enter your title here:', textBoxTitle='Enter Text Here'}) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
        //console.log("LowerCase was Clicked" + text)
        let newtext = text.toLocaleLowerCase();
        setText(newtext);
    }
    const [text, setText] = useState("");
// text = "new Text"; wrong way to change the state
// setText("Hello World"); correct way to change the state
  return (
    <>
    <div className="container my-3">
        <h1>{pageTitle}</h1>
            <div className="form-floating my-3">
                <textarea className="form-control" value={text} onChange = {handleOnChange} id="textBox" style={{height: "200px"}} ></textarea>
                <label htmlFor="textBox">{textBoxTitle}</label>
            </div>
                <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>

            </div>
    <div className='container my-4'>
        <h2>Your Text Summary:</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h2>Preview:</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
// pts -> PropTypes.string
TextForm.propTypes = {
    pageTitle: PropTypes.string,
    textBoxTitle: PropTypes.string,
};
// TextForm.defaultProps = {
//     pageTitle: 'Enter your title here',
//     textBoxTitle: 'Enter Text Here',
// }
