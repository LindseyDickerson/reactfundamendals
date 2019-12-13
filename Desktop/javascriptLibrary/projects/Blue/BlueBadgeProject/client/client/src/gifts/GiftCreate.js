import React, {useState} from 'react';
import {Card, CardImg, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Alert, Dropdown } from 'reactstrap';
import Add from '../assets/add.png';
import './giftCreate.css';
import APIURL from '../helpers/environment'
//import PropTypes from 'prop-types';
import SnowStorm from 'react-snowstorm';

const GiftCreate = (props) => {
    const [gift, setGift] = useState([]);
    const [recipient, setRecipient] = useState('');
    const [giftItem, setGiftItem] = useState('');
    const [cost, setCost] = useState('');
    const [storagePlace, setStoragePlace] = useState('');
    const [purchaseAt, setPurchaseAt] = useState('');
    const [wrappedIn, setWrappedIn] = useState('');
    const [delivered, setDelivered] = useState('');
    const [modal, setModal] = useState(false); //for modal
    const [dropdownOpen, setDropdownOpen] = useState(false); //for dropdown button
    const [closeAll, setCloseAll] = useState(false);// for modal
    const [selector, setSelector] = useState('Select');
    //const [visible, setVisible] = useState(true); //for Alert
    console.log(setSelector);
    // const [setDropdownNo] = useState('No');
    // const [setDropdownYes] = useState('Yes');
    // Modal toggle
    const toggle = () => setModal(!modal);
    const closeModal = () => setCloseAll(true);
    //dropdown for delivered toggle
    const toggledropdown = () => setDropdownOpen(prevState => !prevState);
    
    //Need this for the ModalHeader
    const {
        buttonLabel,
        className
    } = props;

    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/gift/wrap`, {
            method: 'POST',
            body: JSON.stringify({gift: {recipient: recipient, giftItem: giftItem, cost: cost, storagePlace: storagePlace, purchaseAt: purchaseAt, wrappedIn: wrappedIn, delivered: delivered}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((gift) => {
            //console.log('hello');
            setRecipient('');
            setGiftItem('');
            setCost('');
            setStoragePlace('');
            setPurchaseAt('');
            setWrappedIn('');
            setDelivered('');
            props.fetchGift();
        })
        
    }

//     const deliveredChoice = (e) => {
//         onClick={(e) => setDelivered(e.target.value)}  "value" == "Yes" ? 'Yes' : "value" == "No" ? 'No' 
// };
    // const [changeValue] = useState(DropdownItem.value);

    // let deliveredChoice = setDelivered('') ? 'Select' : setDelivered();
    // let deliveredChoice = 'Select'

    return(
        <div id="divCreate">
            <Card tag="a" src={Add} id="createCard" onClick={toggle} style={{ cursor: "pointer" }} >
                <CardImg id="addImg" src={Add} alt="add image icon"/>
            </Card>
            <Modal id="addModal" isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} className={className} id="modalHeader"><p id="addGiftText">Add a Gift</p></ModalHeader>
                <ModalBody id="modalBody">
                <Form onSubmit={handleSubmit} id="formBody">
                        <FormGroup id="addFormgroup">
                            <Label htmlFor="recipient" id="createModalLabels">Recipient:</Label>
                            <Input name="recipient" id="recInput" value={recipient} onChange={(e) => setRecipient(e.target.value)}/> 
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="giftItem">Gift:</Label>
                            <Input name="giftItem" id="giftInput" value={giftItem} onChange={(e) => setGiftItem(e.target.value)}/> 
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="cost">Cost(numbers only):</Label>
                            <Input name="cost" id="costInput" value={cost} onChange={(e) => setCost(e.target.value)}>
                            </Input> 
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="storagePlace">I'm storing it in:</Label>
                            <Input name="storagePlace" id="storageInput" value={storagePlace} onChange={(e) => setStoragePlace(e.target.value)}/> 
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="purchaseAt">Purchase Location:</Label>
                            <Input name="purchaseAt" id="buyInput" value={purchaseAt} onChange={(e) => setPurchaseAt(e.target.value)}/> 
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="wrappedIn">Wrapping Paper Used:</Label>
                            <Input name="wrappedIn" id="wrapInput" value={wrappedIn} onChange={(e) => setWrappedIn(e.target.value)}/> 
                        </FormGroup>
                        <FormGroup id="deliveredGroup">
                            <Label htmlFor="delivered">Has it Been Delivered?</Label>
                            <Dropdown id="theDropdown" direction="up" isOpen={dropdownOpen} toggle={toggledropdown}>
                                <DropdownToggle id="dropdownwithCarat" caret>{selector == 'Select' ? selector : delivered === 'Yes' ? 'Yes' : 'No'}</DropdownToggle>
                                    <DropdownMenu id="dropdownMenu" value={delivered}>
                                     <DropdownItem id="dropdownItem" name='delivered' value='Yes' onClick={(e) => {setDelivered(e.target.value);setSelector(undefined)}}>Yes</DropdownItem>
                                     <DropdownItem id="dropdownItem" name='delivered' value='No' onClick={(e) => {setDelivered(e.target.value); setSelector(undefined)}}>No</DropdownItem>
                            
                            </DropdownMenu>
                            </Dropdown>
                        </FormGroup>
                        {/* <FormGroup>
                            <Label htmlFor="delivered">Has it Been Delivered?</Label>
                            <Input name="delivered" id="delvInput" value={delivered} onChange={(e) => setDelivered(e.target.value)}/> 
                        </FormGroup> */}
                        <Button id="formSave" type="submit" onClick={toggle}>Save</Button>
                        <SnowStorm/>
                        </Form>
                </ModalBody>
            </Modal>
        </div>
    );    
}
export default GiftCreate;