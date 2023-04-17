const ENDPOINT = 'https://restcountries.com/v3.1/name/';

function fetchCountries(countryName) {
  return fetch(
    `${ENDPOINT}${countryName}?fields=name,capital,flags,population,languages`
  )
    .then(data => {
      return data.json();
    });
    
}

export { fetchCountries };


// name, capital, population, flags, languages; 