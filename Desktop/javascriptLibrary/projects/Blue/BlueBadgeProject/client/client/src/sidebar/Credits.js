import React from 'react';
import './credits.css';
import Elf from '../assets/elf.png';
import Bubble from '../assets/flippedBubblePS.png';
import Tree from '../assets/christmas-tree.png';
import Add from '../assets/add.png';
import SnowIcon from '../assets/snowfallIcon.png';

const Credits = () => {
    return(
        <div id="creditDiv">
            <h1 id="credith1">Credits</h1>
            <h3 id="h4Text">Thank you to the amazing artists who created the fun icons and graphics!</h3>
            <div id="divSnowstormCredit">
                <img src={SnowIcon} id="creditSnowIcon"/>
                <p id="creditSnowstormText">Snowstorm effect by <a href="http://burakcan.github.io/react-snowstorm/" target="_blank">Burak Can</a> from <a href="http://https://github.com/burakcan" target="_blank">Github</a>.</p>
            </div>
            <div id="divCreditElf">
                <img src={Elf} id="creditElf"/>
                <p id="creditElfText">Icon made by <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a>  from <a href="http://www.flaticon.com" target="_blank">Flaticon</a>.</p>
            </div>
            <div id="divCreditBubble">
                <img src={Bubble} id="creditBubble"/>
                <p id="creditBubbleText">Icon made by <a href="https://www.flaticon.com/authors/dave-gandy" target="_blank">Dave Gandy</a>  from <a href="http://www.flaticon.com" target="_blank">Flaticon</a>.</p>
            </div>
            <div id="divCreditTree">
                <img src={Tree} id="creditTree"/>
                <p id="creditTreeText">Icon made by <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a>  from <a href="http://www.flaticon.com" target="_blank">Flaticon</a>.</p>
            </div>
            <div id="divCreditAdd">
                <img src={Add} id="creditAdd"/>
                <p id="creditAddText">Icon made by <a href="https://www.flaticon.com/authors/smashicons" target="_blank">Smashicons</a>  from <a href="http://www.flaticon.com" target="_blank">Flaticon</a>.</p>
            </div>
            {/* <div id="divSnowstormCredit">
                <p id="creditSnowstormText">Snowstorm effect by <a href="http://burakcan.github.io/react-snowstorm/" target="_blank">Burak Can</a> from <a href="http://https://github.com/burakcan" target="_blank">Github</a>.</p>
            </div> */}
            <div id="divCreditSnowflakeIcon">
                <img src={SnowIcon} id="creditAddSnowFlake"/>
                <p id="creditAddSnowflake">Icon made by <a href="https://www.flaticon.com/authors/flat-icons" target="_blank">Flat Icons</a>  from <a href="http://www.flaticon.com" target="_blank">Flaticon</a>.</p>
            </div>

        </div>
    )
}
export default Credits;