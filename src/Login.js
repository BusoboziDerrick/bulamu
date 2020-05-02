import React from 'react';
import Panel from './Panel';
import './Profession.css';

class Login extends React.Component{
    render(){
        return(
            <div className = "Profession">
            <Panel title = "Health Worker" />
                <p className = "continue">continue as...</p>
                <div><button className = "btn btn-client">Clinician</button></div>
                <div><button className = "btn btn-client">Nurse</button></div>
                <div><button className = "btn btn-client">Health Educator</button></div>
            </div>
        )
    }
}
    export default Login;