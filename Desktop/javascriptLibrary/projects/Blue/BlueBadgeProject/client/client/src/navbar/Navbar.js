import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router,} from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';
import './Navbar.css';
import Elf from '../assets/elf.png';
import Gatsby from './Gatsby/Gatsby';
import Comment from '../assets/flippedBubblePS.png';
import SnowStorm from 'react-snowstorm';
// import Story from './Gatsby/Story';
// import GiftCreate from '../gifts/GiftCreate';
// import GiftIndex from '../gifts/GiftIndex';



const Navbar = (props) => {

    const clearToken = () => {
        localStorage.clear(props.token);
        
    }

   return (
        <div id="navDiv">
            <nav className="navBar">
                <img id="elf" src={Elf} alt="cartoon elf"/>
                    <div className="bubble">
                     <img id="commentBubble" src={Comment} alt="cartoon speech bubble"/>
                     <p id="click">Click</p>
                     <p id="the">the</p>
                     <p id="treeText">tree!</p>
                    </div>
                <div id="treeDiv">
                    <Gatsby id="tree"/>
                </div>
                <p id="title">Gifting with Gatsby</p>
                <Button type="button" onClick={props.clearToken} id='logout' >Logout</Button>
                {/* commenting this out, was right after the button, seeing ifthis changes anything{' '} */}
                
            </nav>
        </div>
    );
};
export default Navbar;