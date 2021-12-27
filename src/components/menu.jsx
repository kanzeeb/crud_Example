import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faSitemap, faDollarSign, faEnvelope, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "./styles/menu.css";

class Menu extends Component {
    render() {
        return(
          <>
            <section className="menu">
                <ul>
                    <li><FontAwesomeIcon className='fas' icon={faTachometerAlt}></FontAwesomeIcon><a href="#">Dashboard</a></li>
                    <li><FontAwesomeIcon className='fas' icon={faUser}></FontAwesomeIcon><a href="#">Users</a></li>
                    <li><FontAwesomeIcon className='fas' icon={faSitemap}></FontAwesomeIcon><a href="#">Site</a></li>
                    <li><FontAwesomeIcon className='fas' icon={faDollarSign}></FontAwesomeIcon><a href="#">Sales</a></li>
                    <li><FontAwesomeIcon className='fas' icon={faEnvelope}></FontAwesomeIcon><a href="#">Emails</a></li>
                    <li><FontAwesomeIcon className='fas' icon={faCogs}></FontAwesomeIcon><a href="#">Settings</a></li>
                    <li><FontAwesomeIcon className='fas' icon={faSignOutAlt}></FontAwesomeIcon><a href="#">Logout</a></li>
                    
                </ul>
            </section>
          </>

        );
    }
}

export default Menu;