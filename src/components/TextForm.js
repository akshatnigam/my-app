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
    const [text, setText] = useState("Enter Text Here");
// text = "new Text"; wrong way to change the state
// setText("Hello World"); correct way to change the state
  return (
    <>
        <h1>{pageTitle}</h1>
            <div className="form-floating my-3">
                <textarea className="form-control" value={text} onChange = {handleOnChange} id="textBox" style={{height: "400px"}} ></textarea>
                <label htmlFor="textBox">{textBoxTitle}</label>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
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
