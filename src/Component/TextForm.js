import React, { useState } from 'react';
export default function TextForm(props) {
    const handleOnclick = () => {
        //console.log('onclick was clicked');
        const new_text = text.toUpperCase();
        setText(new_text)
        props.showAlert("Text is converted in UpperCase", "success")
    }
    const handlelowclick = () => {
        //console.log('onclick was clicked');
        const new_text = text.toLowerCase();
        setText(new_text)
        props.showAlert("Text is converted in LowerCase", "success")
    }

    const handleclear = () => {
        //console.log('onclick was clicked');
        const new_text = '';
        setText(new_text)
        props.showAlert("Text are cleared", "success")
    }
    const copyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text are copied", "success")
    }
    const capitalFirstLetter = () => {
        let tempText = text.split(/[  ]+/);
        let newText = "";
        tempText.forEach((e) => {
            e = e.charAt(0).toUpperCase() + e.slice(1);
            newText = newText + e + " ";

        })
        setText(newText);
        props.showAlert("First letter convert in upperCase", "success")
    }


    const handleonchange = (event) => {
        //console.log('onChange was clicked');
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className="container my-3">
                <h1 className="my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#1c326a' : 'white', color: props.mode === 'dark' ? '#ebf5ff' : 'black' }} onChange={handleonchange} id="Mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnclick}>Convert in upperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlelowclick}>Convert in lowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleclear}>Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={capitalFirstLetter}>capital First Letter</button>



            </div >
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Text summary</h1>
                <p>{text.split(/\s+/).filter(() => { return text.length !== 0 }).length} wrods  and {text.length} charactors</p>
                <p>{.008 * text.split(" ").filter(() => { return text.length !== 0 }).length}  minute read </p>
                <h2>Preview</h2>
                <p >{text.length > 0 ? text : "enter something in the text box above to preview it here"}</p>
            </div>
        </>
    );
}
