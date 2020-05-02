import React from 'react';
import ReactDOM from 'react-dom';
import Bulamu from './Bulamu';
import Panel from './Panel';
import Content from './Content';
import Hworkers from './Hworker';
import Kys from './Kys';
import Login from './Login';
import Profession from './Profession';
import Appointment from './Appointment';

//ReactDOM.render(<bulamu />,document.getElementById('root'));

//  var mount = document.querySelector('#root');
//  ReactDOM.render(<Content Hworkers={Hworkers} /> , mount);

//ReactDOM.render(<Kys />,document.getElementById('root'));

ReactDOM.render(<Profession />,document.getElementById('root'));

// ReactDOM.render(<Login />,document.getElementById('root'));
ReactDOM.render(<Appointment />,document.getElementById('root'));