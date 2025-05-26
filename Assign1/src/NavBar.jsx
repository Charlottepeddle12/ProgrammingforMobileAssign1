import { useState } from "react"

function NavBar(){
    let [buttontext, setText] = useState("Login");
    return(
        <>
        <h1>Assignment 1</h1>

        <button onClick={()=>{
            if(buttontext == "Login")
            {
                setText("Logout");
            }
            else{
                setText("Login");
            }
        }}>{buttontext}</button>
        </>
    )
}

export default NavBar