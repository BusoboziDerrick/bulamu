import React from 'react';
import image from './download.jpg';
import Panel from './Panel';
import HworkerItem from './Hworker';
import Kys from './Kys';
import Appointment from './Appointment';


class Content extends React.Component{
    render(

        
    ){
           const Hworkers = [{ 
             timestamp: new Date().getTime(),
             text: "Amazing therapy.",
             patient:"Client 001", 
             avatar: "{image}",
             message: [{from: 'Arinda' , text : 'Liked it?' } ]
            },
            { 
             timestamp: new Date().getTime(),
             text: "Amazing therapy.",
             patient:"Client 002", 
             avatar: "{image}",
             message: [{from: 'Arinda' , text : 'Liked it?' },
                    {from: 'Martin' , text : 'Liked it too.' }
             ]
                }
        ] 
        
 return(
     <div className = "Content">
     <Panel title = "Clinician" />
     <Kys />
         {Hworkers.map((Hworker) => (<HworkerItem Hworker={Hworker} />))}
    </div>
        )
    }
}


export default Content;