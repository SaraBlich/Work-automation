import axios from 'axios';
import {showResults}  from './js/search-results';
import './scss/style.scss';

//DOM

const searchFormEl = document.querySelector('#search-form');
const searchInputEl = document.querySelector('#search-input');
const searchOptionEl = document.querySelector('#search-option');


const apiBaseURL = 'https://swapi.co/api';

//default searchOption value
let searchOption = 'films';

searchOptionEl.addEventListener('change', function(e)
{
    searchOption = this.value;
});
//window.checkAxios = axios;
searchFormEl.addEventListener('submit', function(e)
{

    e.preventDefault();

    const searchValue = searchInputEl.value;

    // ES6 concatenation
    const apiURL = `${apiBaseURL}/${searchOption}/?search=${searchValue}`;

    axios.get(apiURL)
    //just data wanted
    .then(res => res.data)
    .then(data => showResults(searchOption, data.results))
    .catch(err => console.log(err));

});
