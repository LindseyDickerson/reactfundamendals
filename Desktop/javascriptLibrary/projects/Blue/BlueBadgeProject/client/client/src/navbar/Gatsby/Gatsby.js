import React, {useState, useEffect} from 'react';
import {Media, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Tree from '../../assets/christmas-tree.png';
import './gatsby.css';

const Gatsby = (props) => {

    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

    return(
        <div>
            <Media>
                <Media src={Tree} id="treePic" onClick={toggle} style={{ cursor: "pointer" }}/>
            </Media> 
            
            {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
             <Modal id="treeModal" isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader id="treeModalHeader" toggle={toggle}><p id="modalHeaderText">Hi! I'm Gatsby, the Gifting Elf!</p></ModalHeader>
               <ModalBody id="treeModalBody">
                   It's my job to help you keep track of the gifts you will be giving this Christmas season! Enter the details of your gift to help you remember what you bought for whom, where you are stashing it, and so much more! Let's get started!
                </ModalBody>
                <ModalFooter id="treeModalFooter">
                    {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
                    <Button id="closeButton" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
export default Gatsby;