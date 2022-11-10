import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export const Firsthooks=()=>
{
    const [User,Setuser]=useState("")

    const print=()=>
    {
        alert(User+" has add successfully!")

    }
    const result=(name)=>
    {
        Setuser(name.target.value)
    
    }
    return(
        <>
        <input type="text" placeholder="enter the name" name={User} onChange={result}/>
        <button onClick={print} classname="btn btn-outline-secondary">
            click...!
        </button>

        </>
        
    );

}
