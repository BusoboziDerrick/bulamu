import React from 'react';
import Panel from './Panel';
import './Profession.css';

class Profession extends React.Component{
    render(){
        return(
            <div className = "Profession">
            <Panel title = "Bulamu" />
                <p className = "continue">continue as...</p>
                <div><button className = "btn btn-healthWorker">Heath Worker</button></div>
                <div><button className = "btn btn-client">Heath Worker</button></div>
            </div>
        )
    }
}
    export default Profession;