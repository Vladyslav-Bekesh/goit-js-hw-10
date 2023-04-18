const ENDPOINT = 'https://restcountries.com/v3.1/name/';

function fetchCountries(countryName) {
  return fetch(
    `${ENDPOINT}${countryName}?fields=name,capital,flags,population,languages`
  ).then(data => {
    if (!data.ok) {
      throw new Error(data.status);
      return;
    }

    return data.json();
  });
}

export { fetchCountries };

// name, capital, population, flags, languages;
