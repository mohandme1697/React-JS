import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap-icons/font/bootstrap-icons.css'

export const Sample=()=>
{
    const Click=()=>
    {
        alert("Hi There!")
    }
    return(
        <>
        <button className="btn btn-outline-info" onClick={Click}>
            Apple<i class="bi bi-apple"></i>
        </button>
        </>
    );
}