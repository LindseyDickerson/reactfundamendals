import React from 'react';
import {BrowserRouter as Router,} from 'react-router-dom';
import {Route, Link, Switch} from 'react-router-dom';
import GiftIndex from '../gifts/GiftIndex';
import Story from '../navbar/Gatsby/Story';
import Credits from '../sidebar/Credits';
import Auth from '../auth/Auth';
import './sidebar.css'
import Signup from '../auth/Signup';
//import Credits from 

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/story">Gatsby's Story</Link></li>
                    <li><Link to="/credits">Credits</Link></li>
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/">{(props.token === localStorage.getItem('token') ?  <GiftIndex token={props.token}/> : <Auth updateToken={props.updateToken}/>)}
                         </Route>
                    <Route exact path="/story"><Story/></Route>
                    <Route exact path="/credits"><Credits/></Route>
                </Switch>
            </div>
        </div>
    );
};
export default Sidebar;