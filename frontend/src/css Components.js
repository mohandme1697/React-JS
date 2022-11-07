import './Tablecss.css'

export const Custom=()=>
{
    const Match={
        borderRadius:'20px',
    }
    return(
        <>
        <a href="http://www.oracle.com">oracle</a>
        <table style={Match}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Contact Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mohan</td>
                <td>Mechanical</td>
                <td>9876543210</td>
                </tr>
                <tr>
                <td>Priya</td>
                <td>EEE</td>
                <td>9876543000</td>
                </tr>
            </tbody>
        </table>

        </>


    );
}