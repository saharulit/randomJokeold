import React, { Component } from 'react'
import logo from '../images/boob.png';


class navBar extends Component {
    state = {  };
    render() { 
        return ( 
         <div className="divbar navbar-dark bg-dark p-3">
            <span className="navbar-brand " href="#">
              <img src={logo} width="40" height="40" className="d-inline-block" alt=""/>
              Random Joke
            </span> 
          </div>
         );
    }
}
 
export default navBar;