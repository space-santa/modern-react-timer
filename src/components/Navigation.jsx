import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

class Navigation extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <NavLink
                to="/timer"
                activeClassName="active-link"
                activeStyle={{fontWeight: 'bold'}}
              >Timer</NavLink>
            </li>
            <li>
              <NavLink
                to="/countdown"
                activeClassName="active-link"
                activeStyle={{fontWeight: 'bold'}}
              >Countdown</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
             Created by <a href="https://github.com/space-santa">space-santa</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
