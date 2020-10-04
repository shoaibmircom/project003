import React, {useState} from 'react';
import './shoaib.css';
function Room (){
    let [isLit, setLit]=useState(false);
    function updateLit(){
        console.log("Button Clicked");
        setLit(!isLit);
    }
    return(
        <div className={`room ${isLit ? "lit" : "dark"}`}>
            {isLit? "lit":"dark"};
            <br/>
            <button onClick ={updateLit}>Change State</button>
        </div>
    );

}
export default Room;