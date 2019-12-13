import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Elf from '../../assets/elf.png';
import Add from '../../assets/add.png';
import BubbleText from '../../assets/bubbleText.png';
import Tree from '../../assets/christmas-tree.png';



const Credits = () => {

   

    return(
        <div>
            <h1>Credits</h1>
          <p>This project would not have been possible without the use of images made by awesome artists. Thanks for these wonderful images that really brought my project some life!</p>
            {/* {Elf}
            {BubbleText}
            {Tree}
            {Add} */}
          
      </div>
    );
};

export default Credits;