import React from 'react';
import './Pie.css';
import {CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap';

const Pie = (props) => {
    console.log(props);
    return(
        
        <CardBody>
            <CardTitle>{props.tryPie.nameOfPie} Pie</CardTitle>
            <CardText>{props.tryPie.crust} crust</CardText>
            <CardText>{props.tryPie.timeToBake} minutes to bake!</CardText>
            <CardText>{props.tryPie.baseOfPie} base</CardText>
            <CardText>{props.tryPie.servings} Servings</CardText>
            <CardSubtitle>{props.tryPie.rating} out of 5!</CardSubtitle>
        </CardBody>
    )
}
export default Pie;