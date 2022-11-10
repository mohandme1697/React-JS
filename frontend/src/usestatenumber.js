import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export const Justnumber=()=>
{
    const[count,setCount]=useState(0)
    
    const fun=()=>
    {
        setCount(count+1)
    }
    const funs=()=>
    {
        setCount(0)
    }
    return(
        <>
        <button className="btn btn-outline-primary" onClick={fun} ondoubleClick={funs}>
            once click a button count plus one,doubleclick-that time value is null -
            <span style={{backgroundcolor:"red"}}>{count}</span>

        </button>
        </>
    );
}