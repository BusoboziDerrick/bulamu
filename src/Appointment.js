import React from 'react';
import Panel from './Panel';
import Kys from './Kys';
import './Appointment.css'

class Appointment extends React.Component{
    render(){
        return(
            <div className = "Appointment">
                <Panel title = "Clinician" />
                {/* <Kys /> */}
                <div className = "keys">
                <button className = "btn btn-inquiry">INQUIRIES</button>
                <button className = "btn btn-appointment">APPOINTMENTS</button>
                </div> 

                <div className = "apoint">
                <button className = "btn btn-upcome">Upcoming</button>
                <button className = "btn btn-past">Past</button>
                </div>
                <div className = "report">
                    <p className = "duration">In 3 days</p>
                    <h5 className = "reason">Consultation from Eric</h5>
                    <p className = "date"><span className = "fa fa-calendar"></span> &nbsp; November 13</p>
                    <p className = "Atime"><span className = "fa fa-clock"></span> &nbsp; 12:56 PM</p>
                    <p className = "location"><span className = "fa fa-map-marker"></span> &nbsp; Lira University Hospital</p>
                    <p className = "Contact"><span className = "fa fa-phone"></span> &nbsp; +256 711 1111 111</p>
                </div>
            </div>
        )
    }
}

export default Appointment;