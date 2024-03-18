// Code Keypad Component Here

function Keypad (){

    function evenhandler(){
        
        console.log("Entering password...");
    }
    return (
        <div>
            <form> <input type="password" onChange={evenhandler}></input></form>
           
        </div>
    )
}

export default Keypad;
// / //In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the change event.
// When that event fires, use console.log to print out the text 'Entering password...'.