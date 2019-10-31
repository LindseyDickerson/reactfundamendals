import React, { useState } from 'react';
import NytResults from './NytResults';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'DXeLGrY5jGzBoTcUaZgq4U5e5IRpAdgp';

const NytApp = () => {
    const [ search, setSearch ] = useState('');
    const [ startDate, setStartDate ] = useState('');
    const [ endDate, setEndDate ] = useState('');
    const [ pageNumber, setPageNumber ] = useState(0);
    const [ results, setResults ] = useState([]);

    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
        url = startDate ? url + `&begin_date=${startDate}` : url;
        url = endDate ? url + `&end_date=${endDate}` : url;

        fetch(url)
        .then(res => res.json())
        .then(data = setResults(data.response.docs))
        .catch(err => console.log(err));
    };

    const handleSubmit = (event) => {
        fetchResults()
        event.preventDefault()
    }

    return(
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <span>Enter a single search term (required) : </span>
                    <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
                    <br />
                    <span>Enter a start date: </span>
                    <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setStartDate(e.target.value) } />
                    <br />
                    <span>Enter an end date: </span>
                    <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setEndDate(e.target.value) } />
                    <br />
                    <button className="submit">Submit Search</button>
                </form>
                {
                    this.StaticRange.results.length > 0 ? <NytResults resutls={results} /> : null
                }
            </div>
        </div>
    )
};

export default NytApp;