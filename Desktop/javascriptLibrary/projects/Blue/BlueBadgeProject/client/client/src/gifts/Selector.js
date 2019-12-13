import React, {Component} from 'react';
import GiftCard from '../gifts/GiftCard';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './selector.css';

// const Selector = (props) => {

//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [recipient, setRecipient] = useState('');
//     const [sortRecipient, setSortRecipient] = useState([]);
    
//     const toggle = () => setDropdownOpen(prevState => !prevState);
//     // this const is for the dropdown.

//     const sortGift = (recipient) => {
//       fetch(`http://localhost:3001/api/gift/all/${recipient}`, {
//         method: 'GET',
//         // body: JSON.stringify({gift: {recipient: sortRecipient}}),
//         headers: new Headers({
//           'Content-Type': 'application/json',
//           'Authorization': props.token
//         })
//       })//.then(() => {props.fetchGift()})
//     }

//      const recMapper = () => {
//        return props.recipient.map(() => {
//         //  return(
          
//         //  )
//        });
//      };

//     return(
//         <div>
          
//           <Dropdown id="selectorDropdown" isOpen={dropdownOpen} toggle={toggle} >
//             {/* commenting out key={recipient} it should go in above right after toggle */}
//           <DropdownToggle id="dropdownToggle" caret>Sort</DropdownToggle>
//           <DropdownMenu id="dropdownMenu">
//             <DropdownItem id="dropdownItem">{sortGift()}</DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//         </div>
//     );
// };
// export default Selector;

class Selector extends Component {
  state = { recipient: [],
            selectedRec: "",
            validationError: ""
          }

    
  selectorComponent() {
    fetch(`http://localhost:3001/api/gift/all/${recipient}`)
    .then((respons) => {
      return Response.json();
    })
    .then(data => {
      let recSel = data.map(recGift => { return {value: recipient, display: gift} })
      this.setState({ recipient: [{value: '', display: '(Sort by Recipient)'}].concat(recSel) });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
  return (
    <>
    <div>
      <select value={this.state.selectedRec}
              onChange={(e) => this.setState({selectedRec: e.target.value, validationError: e.target.value === "" ? "Please select a recipient to sort." : ""})}>
          {this.state.recipient.map((recGift) => <option key={recipient.value} value={gift.value}>{recGift.display}</option>)}
      </select>
    </div>
    <div style={{color: 'red', marginTop: '5px'}}>
      {this.state.validationError}
    </div>
    </>
    )
  }
}
export default Selector;