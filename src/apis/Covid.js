import axios from "axios";

const options = {
  // method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/country',
  // params: {name: 'italy'},
  headers: {
    'x-rapidapi-key': 'b8051a7856msh8c1b7e60d94a110p19734bjsne6759f9a7242',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
  }
};

export default axios.create(options);