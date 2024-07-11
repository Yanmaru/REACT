import React from "react";

// function Greet(props){
//    console.log(props.name);
//     return (
//         <div>
//         <h1>Hello{props.name}vous avez {props.age}</h1>
//         </div>
//     )
// }


// composant par fonction


function Greet({name, age, children}){
    return(
        <div>
            <h1>Hello {name} vous avez {age} !</h1>
        </div>
    )
}


export default Greet;