import React, { useState } from 'react';
// import PropType from 'prop-types'
// let a = document.getElementById("selectOpe.")
//     let str = a.value;
//     alert(str);

function TextContainer(props) {
    const [text, setText] = useState("");

    function changeUpperCase() {
        let newText = text.toUpperCase();
        setText(newText);
    }
    function handleChanges(event) {
        setText(event.target.value);

    }
    function changeLowerCase() {
        setText(text.toLowerCase());
        
    }
    function clearText() {
        setText("");
    }
    function handleExtraSpaces() {
        let s = document.getElementById("exampleFormControlTextarea1").value;
        let reg = /[ ]+ /g
        // reg =/g/g
        if (reg.test(s)) {
            setText(s.replace(reg, ' '));
        }
    }
    function copyText() {
        var Text = document.getElementById("exampleFormControlTextarea1");
        console.log("I am copied");
        Text.select();
        navigator.clipboard.writeText(Text.value);
    }


    return (
        <>
            <div className= {`container my-3"`}>
                {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea className={`form-control form-control1 bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`} placeholder="Start Typing Here......" id="exampleFormControlTextarea1" rows="10" onChange={handleChanges} value={text}></textarea>
            </div>
            <div className="container">
                <button type="button" onClick={changeUpperCase} className="btn btn-primary">UpperCase</button>
                <button type="button" onClick={changeLowerCase} className="btn btn-primary mx-2 my-2">LowerCase</button>
                <button type="button" onClick={clearText} className="btn btn-primary mx-2 my-2">Clear</button>
                <button type="button" onClick={copyText} className="btn btn-primary mx-2 my-2">Copy</button>
                <button type="button" onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Extra Space</button>
            </div>
            <div className="container">
                <h2 className = {`text-${props.mode === 'light'?'dark':'light'}`}>Your Text Summary </h2>
                <p className = {`text-${props.mode === 'light'?'dark':'light'}`}>you typed <b> {text.length} </b> letters and <b> {text.split(" ").length-1} </b> Words</p>
            </div>
        </>
    )

}
export default TextContainer;
