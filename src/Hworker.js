import React from 'react';
import './Hworker.css';


class HworkerItem extends React.Component{
    render(){
        const {Hworker} = this.props;
        return (
        <div className = "Content">
                <div className = "Item">
                    <span className = "commentcount"><span>{Hworker.message.length}</span></span>
                    <div className = "avatar">
                        <img src={Hworker.image} alt = <span className = "fa fa-user-plus"></span> />
                    </div>
                    <h6 className = "name">{Hworker.patient}</h6>
                    <span className = "time">{Hworker.timestamp}</span>
                    <p className = "comment">{Hworker.text}</p>
                    

                </div>

                
        </div>        
        
        );
    }
}

export default HworkerItem;