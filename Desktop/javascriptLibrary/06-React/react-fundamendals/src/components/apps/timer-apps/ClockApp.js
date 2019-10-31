import React, { useState, useEffect } from 'react';

const ClockApp = () => {
        const getTimeString = () => {
        const date = new Date(Date.now()).toLocaleTimeString();
        return date;
    }

    const [time, setTime] = useState(getTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            var date = getTimeString();
            setTime(date);
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div>
            <h1 className="section-title">React Clock</h1>
            <h3 className="description">Eastern Time Zone - Indianapolis</h3>
            <hr className="explanation"/>
            <p>{time}</p>
            <br />
            {/* <h3 className="description">Central Time Zone - Chicago</h3>
            <hr />
            <p>{time.toLocaleTimeString('America/Chicago')}</p> */}
        </div>
    );
}

export default ClockApp;