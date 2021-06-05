import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const putCommas = (x) => {
    x = x.toString();
    let b;
    if(x.length>3){
        b = [x.slice(0,x.length-3),x.slice(x.length-3)];
        return b[0].replace(/\B(?=(\d{2})+(?!\d))/g, ",")+','+b[1];
    } else{
        return x;
    }
    
}

const DisplayCountryData = ({searchTerm}) => {
    const [res, setRes] = useState({country: 'Not Found'});
    const [got, setGot] = useState(false);
    let jsx = <div></div>;
    useEffect(
        ()=>{
            (async searchTerm => {
                var axios = require("axios").default;

                var options = {
                method: 'GET',
                url: 'https://covid-19-data.p.rapidapi.com/country',
                params: {name: searchTerm.toLowerCase()},
                headers: {
                    // 'x-rapidapi-key': 'b8051a7856msh8c1b7e60d94a110p19734bjsne6759f9a7242',
                    // 'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
                    "x-rapidapi-key": "6d748d7ba2msh1161ff63d1da89bp15490ejsn6803ea0b9d2a",
	                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                }
                };
                axios.request(options).then(function (response) {
                    setRes(response.data[0]);
                    setGot(true);  
                }).catch(function (error) {
                    console.log(error);
                    setGot(true);
                    setRes({country: 'Not Found'}); 
                });
            })(searchTerm)
        },
        [searchTerm]
    );
    if(!got){
        return <div className="ui active centered inline loader"></div>
    }
    // if(res.country === 'Not Found'){
    //     jsx = (
    //         <div className = "ui container">
    //             <div style={{marginBottom: '15px'}} className="border-2 border-custom-border rounded-3xl h-100 mt-16 mb-20 flex justify-center">
    //                 <div className="content items-center mr-auto ml-auto">
    //                     <div className="header text-center text-8xl mb-12 mt-32">{res.country}</div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // } else 
    if(res.country!=='Not Found'){
        jsx = (
            <div className = "ui container">
                <div style={{marginBottom: '15px'}} className="border-2 border-custom-border rounded-3xl h-100 mt-16 mb-20 flex justify-center">
                    <div className="content items-center mr-auto ml-auto">
                        <div className="header text-center text-8xl mb-12 mt-32">{res.country+' '}<img alt={`${res.country}'s flag`} className="inline" src={`https://www.countryflags.io/${res.code}/flat/64.png`}></img></div>
                        <div className="description text-4xl">
                            <p>Confirmed: <span className="text-custom-yellow">{putCommas(res.confirmed)}</span></p>
                            <p>Deaths: <span className="text-custom-red">{putCommas(res.deaths)}</span></p>
                            <p>Recovered: <span className="text-custom-green">{putCommas(res.recovered)}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else{
        jsx = (
            <div className = "ui container">
                <div style={{marginBottom: '15px'}} className="border-2 border-custom-border rounded-3xl h-100 mt-16 mb-20 flex justify-center">
                    <div className="content items-center mr-auto ml-auto">
                        <div className="header text-center text-8xl mb-12 mt-32">{res.country}</div>
                   </div>
                </div>
            </div>
        );
    }
        
    return jsx;
}

// const mapStateToProps = (state) => {
//     return { searchTerm: state.searchTerm };
// }

export default connect(null)(DisplayCountryData);