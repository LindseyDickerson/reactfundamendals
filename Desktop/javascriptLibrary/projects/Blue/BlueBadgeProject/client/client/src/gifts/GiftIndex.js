import React, {useState, useEffect} from 'react';
import {Card} from 'reactstrap';
import { Switch, Route } from 'react-router-dom'
import GiftCard from './GiftCard';
import GiftCreate from './GiftCreate';
import GiftEdit from './GiftEdit';
import './giftIndex.css';
// import Story from '../navbar/Gatsby/Story';
// import Selector from '../gifts/Selector';
import APIURL from '../helpers/environment';


const GiftIndex = (props) => {

    const [ gift, setGift ] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [giftToUpdate, setGiftToUpdate] = useState({});
    const [recipient, setRecipient] = useState('');
    // const [giftItem, setGiftItem] = useState('');
    // const [cost, setCost] = useState('');
    // const [storagePlace, setStoragePlace] = useState('');
    // const [purchaseAt, setPurchaseAt] = useState('');
    // const [wrappedIn, setWrappedIn] = useState('');
    // const [delivered, setDelivered] = useState('');

    const fetchGift = () => {
        fetch(`${APIURL}/api/gift/all`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((giftData) => {
            console.log(giftData);
            setGift(giftData)
        })
    }

    const editUpdateGift = (gift) => {
        setGiftToUpdate(gift);
        console.log(gift);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchGift();
    }, [])

    return (
        <>
        {/* <Selector id="selector"/> */}
        <Card id="cards">
            <GiftCreate fetchGift={fetchGift} token={props.token}/>
            <GiftCard gift={gift} editUpdateGift={editUpdateGift} updateOn={updateOn} fetchGift={fetchGift} token={props.token}/>
            {updateActive ? <GiftEdit giftToUpdate={giftToUpdate} updateOff={updateOff} token={props.token} fetchGift={fetchGift}/> : <></>}
        </Card>
        </>
    );
};
export default GiftIndex;