import React, {useState} from 'react';
import {Card, CardTitle, CardBody, CardSubtitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './giftCard.css'
import APIURL from '../helpers/environment'

//import GiftCreate from './GiftCreate';


const GiftCard = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const {
        buttonLabel,
        className
      } = props;
  
    const deleteGift = (gifts) => {
        fetch(`${APIURL}/api/gift/delete/${gifts.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => {props.fetchGift()})
        .then(toggle())  
    }
  
    

    const giftMapper = () => {
        return props.gift.map((gifts, index) => {
            return(
              <Card id="eachCard">  
              <CardBody id="cardBody" key={index}>
               <CardTitle>Recipient: {gifts.recipient}</CardTitle>
               <CardText>Gift: {gifts.giftItem}</CardText>
               <CardText>Cost: ${gifts.cost}</CardText>
               <CardText>I stored it: {gifts.storagePlace}</CardText>
               <CardText>I bought it from: {gifts.purchaseAt}</CardText>
               <CardText>I wrapped it in: {gifts.wrappedIn}</CardText>
               <CardText>Delivered: {gifts.delivered}</CardText>
               <Button id="editButton" onClick={() => {props.editUpdateGift(gifts); props.updateOn()}}>Edit</Button>
               <Button id="firstDelete" onClick={toggle}>Delete Gift</Button>
               <Modal id="modalDelete" isOpen={modal} toggle={toggle} className={className}>
                   <ModalHeader id="deleteModal">Are You Sure?</ModalHeader>
                       <ModalBody id="deleteBody">
                       You are about to delete this gift. Once it has been deleted, it cannot be recovered. 
                        </ModalBody>
                    <ModalFooter id="deleteFooter">
                        <Button id="keepButton" onClick={toggle}>Keep This Gift</Button>
                        <Button id="yesDelete" onClick={() => {deleteGift(gifts)}}>Yes, Delete</Button>
                    </ModalFooter>
               </Modal> 
              </CardBody>
              </Card>
            )
        })
    }
    return(
        <div id="cardMapper">
            {giftMapper() }
        </div>
    )
}
export default GiftCard;
/* The .map on line 36 takes the props of the gift array and puts them into each card accordingly. So in the space for the recipient, it takes it from the gifts array that was created in the file GiftCreate and puts that string in the card text. */