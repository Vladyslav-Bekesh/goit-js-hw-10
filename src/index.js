import './css/styles.css';
//*own func
import { fetchCountries } from './js/fetchCountries';
import {
  createForManyMathes,
  createForOneMatch,
  createMarkup,
} from './js/creatingMarkup';

//*libr
import _ from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.getElementById('search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', _.debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  event.preventDefault();

  const countryName = refs.input.value;
  fetchCountries(countryName).then(countries => {
    checkAndCreateCountries(countries);
  })
  .catch(error => {
    Notify.failure('Oops, there is no country with that name');
    return;
  });
}

function checkAndCreateCountries(countries) {
  if (countries.length === 1) {
    createMarkup(createForOneMatch(countries), refs.countryInfo);
    refs.countryList.innerHTML = "";
    console.log("deleted li");
    return;
  } else if (countries.length <= 10 && countries.length > 1) {
    createMarkup(createForManyMathes(countries), refs.countryList);
    refs.countryInfo.innerHTML = "";
    console.log("deleted el");
    return;

  } else {
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
}
