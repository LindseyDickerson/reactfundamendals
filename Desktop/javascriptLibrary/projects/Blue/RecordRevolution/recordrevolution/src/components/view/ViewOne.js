import React from 'react';

import styled from 'styled-components';
import Disc from '../../assets/discCopy.png';

const Resize = styled.img`
    width: 65vw;
    height: auto;
    display: block;
    margin: 0 auto;
`
/*when using styled components, use backticks!*/

const ViewOne = () => {
    return (
        <div>
            <Resize src={Disc} />
        </div>
    );
};
export default ViewOne;