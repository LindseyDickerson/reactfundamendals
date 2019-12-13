import React, {useState} from 'react';
import { Row, Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import './footer.css';


// const Footer = (props) => {

//     // const {
//     //     buttonLabel,
//     //     className
//     //   } = props;
    
//     //   const [modal, setModal] = useState(false);
    
//     //   const toggle = () => setModal(!modal);

//     return (
//         <footer>
//             {/* <hr id="footerBar"/> */}
//             <Row>
//                 <div id="footerSidebar"></div>
//                 <p id='closingTextName'>©Lindsey Dickerson 2019</p>
//                 <br/>
//                 <p id='closingTextSchool'>Eleven Fifty Academy Blue Badge Project</p>
//             </Row>
//         </footer>
//     );
// };

// export default Footer;

const Footer = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar id="footer" light expand="md">
          <NavbarBrand id="closingTextName">©Lindsey Dickerson || <a href="https://elevenfifty.org/" target="_blank" id="footer1150">Eleven Fifty Blue Badge Project</a></NavbarBrand>
        </Navbar>
      </div>
    );
  }
  
  export default Footer;