import React from 'react';
import Elf from '../../assets/elf.png';
import './story.css'
import SnowStorm from 'react-snowstorm';

const Story = () => {

    

    return(
        <div id="main">
           <SnowStorm/>
        <img tag="a" src={Elf} id="elfStory" style={{ cursor: "pointer"}}></img>
        <h1 id="storyh1">Gatsby's Story</h1>
        <div id="textStoryDiv">
            <p id="pTagStory">Hi! My name is Gatsby, the Great Gifting Elf. I've always had a knack for organizing, and I can't think of something that brings me joy more than presents! So putting the two together makes me like a kid on Christmas morning!</p> 
            <br/>
            <p id="pTagStory2">When I'm not helping Santa, I love to read, and my favorite author is F. Scott Fitzgerald. I take my cat, Jingles, for walks around Santa's Village where we hunt for candy canes! I also love to cook. Have you ever had a peanut butter burger? They're the best!</p>
            <br/>
            <p id="pTagStory3">I do enjoy a good TV show binge. I enjoy The Great British Baking Show, The Masked Singer, and A Series of Unfortunate Events. That Sunny Baudelaire sure is adorable!</p>
        </div>
        
        </div>
    );
};
export default Story;