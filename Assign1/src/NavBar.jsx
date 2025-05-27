import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function NavBar(){
    let [buttontext, setText] = useState("Login");
    return(
        <>
        <h1>Assignment 1</h1>

        <button type="button" class="btn btn-primary" onClick={()=>{
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