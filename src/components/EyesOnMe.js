// Code EyesOnMe Component Here
import React from "react";

export default function EyesOnMe(){
    function eventhandleronfucos(){
        console.log("Good!");
    }
    function eventhandleronblur(){
        console.log("Hey! Eyes on me!");
    }
    return(
        <div>
            <button  onBlur={eventhandleronblur} onFocus={eventhandleronfucos}>Eyes on me</button>
        </div>
    );

}

// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button with the text 'Eyes on me'.
// On that button, add event handlers that listen for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.