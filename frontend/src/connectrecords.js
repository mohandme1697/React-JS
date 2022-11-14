import { useState,useEffect } from "react";
import { Myrecord } from "./ArrayValue";

export const Connectdata=()=>
{
    const[Process,setProcess]=useState([])

    useEffect(()=>
    {
        setProcess(Process)
    },[])
    return(
        <>
        <table className="table table-bordered col-lg-8 col-md-10 col-sm-12 shadow">
            <thead>
                <tr>
                    <th>studentName</th>
                    <th>studentDept</th>
                    <th>studentMobileNo</th>
                </tr>
            </thead>
        <tbody>
            {
                Myrecord.map((ele,ind)=>(
                    <tr>
                        <td>{ele.studentName}</td>
                        <td>{ele.studentDept}</td>
                        <td>{ele.studentMobileNo}</td>
                    </tr>
                ))
            }
        </tbody>
        </table>
        </>
    );
}

