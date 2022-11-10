import { useState } from "react";

export const TernaryOperator=()=>
{
    const[wish,setwish]=useState("nothing")
    const[result,setresult]=useState("")
    const[change,setchange]=useState({color:"red",backgroundcolor:"blue"})

    const trigger=(tmp)=>
    {
        setwish(tmp.target.value)
    }
    const ternary=()=>
    {
        (wish==='spring')?
        setchange({color:"white",background:"red"}):
        (wish==='summer')?
        setchange({color:"white",background:"black"}):
        (wish==='winter')?
        setchange({color:"white",background:"green"}):
        (wish==='rainy')?
        setchange({color:"white",background:"seagreen"}):

        setchange({color:"black",background:"yellow"})
        setresult(wish)

    }
    return(
        <>
        <input type="text" placeholder="tell your fav season" onChange={trigger}/>
        <button onClick={ternary} className="btn btn-outline-danger">
            climate
        </button>
        <p style={change}>
            {result}

        </p>

        
        </>

    );

}