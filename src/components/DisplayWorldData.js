import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import { fetchCovidData } from '../actions/index';

const DisplayWorldData = () => {
    const [res, setRes] = useState(null);
    useEffect(
        ()=>{
            (async () => {
                var axios = require("axios").default;

                var options = {
                method: 'GET',
                url: 'https://covid-19-data.p.rapidapi.com/totals',
                headers: {
                    'x-rapidapi-key': 'b8051a7856msh8c1b7e60d94a110p19734bjsne6759f9a7242',
                    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
                }
                };

                axios.request(options).then(function (response) {
                    setRes(response.data[0]);
                }).catch(function (error) {
                    console.error(error);
                });
            })()
        },
        []
    );
    if(res===null){
        return <div className="ui active centered inline loader"></div>
    }
    return (
        <div className = "ui container">
            <div className="border-2 border-custom-border rounded-3xl h-100 mt-16 mb-20 flex justify-center">
                <div className="content items-center mr-auto ml-auto">
                    <div className="header text-center text-8xl mb-12 mt-32">World</div>
                    <div className="description text-4xl">
                        <p>Confirmed: <span className="text-custom-yellow">{res.confirmed}</span></p>
                        <p>Deaths: <span className="text-custom-red">{res.deaths}</span></p>
                        <p>Recovered: <span className="text-custom-green">{res.recovered}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(null, {fetchCovidData})(DisplayWorldData);