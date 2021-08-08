import axios from "axios";
import { xRapidApiHost, xRapidApiKey } from "../../keys";

const options = {
  // method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/country',
  // params: {name: 'italy'},
  headers: {
    'x-rapidapi-key': xRapidApiKey, 
    'x-rapidapi-host': xRapidApiHost
  }
};

export default axios.create(options);