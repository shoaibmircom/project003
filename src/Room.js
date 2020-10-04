import React, {useState} from 'react';
function Room (){
    let [isLit, setLit]=useState(false);
    function updateLit(){
        console.log("Button Clicked");
        setLit(!isLit);
    }
    return(
        <div>
            This Room is {isLit? "lit":"dark"};
            <br/>
            <button onClick ={updateLit}>Change State</button>
        </div>
    );

}
export default Room;