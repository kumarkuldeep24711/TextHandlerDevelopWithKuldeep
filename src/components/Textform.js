import React,{useState} from 'react'

export default function Textform(props) {
 const handeUpclick = ()=>{
     //console.log("Uppercase was clicked " +text);
     let newText=text.toUpperCase();
     setText(newText);
     props.showAlert("converted to upperCase","success");
 }
 const handLoclick = ()=>{
  //console.log("Uppercase was clicked " +text);
  let newText=text.toLowerCase();
  setText(newText);
}
const handeClearclick = ()=>{
  //console.log("Uppercase was clicked " +text);
  let newText=" ";
  setText(newText);
}
const CopyText = ()=>{
  //console.log("Uppercase was clicked " +text);
  const newText = document.getElementById("myBox");
  newText.select();
  setText(newText);
  props.showAlert("Copid","Success");
  navigator.clipboard.writeText(newText.value);

}
const handleSpace = ()=>{
let newText=text.split(/[ ]+/);
setText(newText.join(" "));
}
 const handleOnchanged=(event)=>{
    // console.log("On changed");
     setText(event.target.value);
 }

    const [text, setText] = useState(" ");
    //text="new text";  //wrong way to change the state
    //setText("new text"); // Correct way to change the state    
  return (
<>
    <div className="container">
 <h3>{props.heading}</h3>      
<div className="mb-3">
  
  <textarea className="form-control" value={text}  onChange={handleOnchanged} rows="8" id="myBox"></textarea>
  <button className="btn btn primary mx-2" onClick={handeUpclick}>Convert to uppercase</button>
  <button className="btn btn primary " onClick={handLoclick}>Convert to Lowercase</button>
  <button className="btn btn primary " onClick={handeClearclick}>Clear Text</button>
  <button className="btn btn primary " onClick={CopyText}>Copy</button>
  <button className="btn btn primary " onClick={handleSpace}>Romve Space</button>
</div>
    </div>
    <div className="container my-3">
      <h3>your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} chareacters</p>
      <p >{ 0.008 *  text.split(" ").length} Minutes read </p>
      <h3> Preview</h3>
      <p>{text.length>0?text:"Enter somthing in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
