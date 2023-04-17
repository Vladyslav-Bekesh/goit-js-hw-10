import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import _ from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.getElementById('search-box'),
  countryList: document.querySelector('country-list'),
  countryInfo: document.querySelector('country-info'),
};

refs.input.addEventListener('input', _.debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  event.preventDefault();
  const countryName = refs.input.value;
  fetchCountries(countryName)
    .then(countries => {
      if (countries.status === 404) {
        Notify.failure('enter correct counry name please');
      }
      console.log(countries);
    })
    .catch(error => {
      
    });
}
