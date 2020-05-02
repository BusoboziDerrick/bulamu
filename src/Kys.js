import React from 'react';
import './Kys.css';

class Kys extends React.Component{
    render(){
        return(
            <div className = "Kys">
            {/* <table className = "Table">
                <thead>
                    <th className = "t1"><button className = "btn btn-defaulty">INQUIRIES</button></th>
                    <th className = "t2"><button className = "btn btn-default">APPOINTMENTS</button></th>
                </thead>
            </table>  */}
                {/* <div className = "inquiry"><p className = "key1">INQUIRIES</p></div>
                <div className = "appoint"><p className = "key2">APPOINTMENTS</p></div> */}
                <button className = "btn btn-defaulty">INQUIRIES</button>
                <button className = "btn btn-default">APPOINTMENTS</button>
        
            </div>
        )
    }
}
export default Kys;