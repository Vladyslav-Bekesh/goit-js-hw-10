function createForManyMathes(countryNames) {
  console.log('creating markup');
  const markup = countryNames.reduce(
    (markup, countryName) => markup + createListELement(countryName),
    ''
  );
  return markup;
  // console.log(markup);
}

function createForOneMatch(countryName) {
  console.log('creating markup for one country');
  const { flags, name, languages, capital, population } = countryName[0];
  return `<div class="country__info">
  <div class="country__name">
    <img class="one-element__img" src="${flags.png}" alt="">
    <span>${name.official}</span>
  </div>
  <ul class="country__properties">
    <li class="country__properties--item">
      <p>languages:${getValues(languages)}</p>
    </li>
    <li class="country__properties--item">
      <p>capital:${capital}</p>
    </li>
    <li class="country__properties--item">
      <p>population:${population}</p>
    </li>
  </ul>
</div>`;
}

function createListELement({ flags, name }) {
  return `<li class="country__item">
    <img class="list-element__img" src="${flags.png}" alt="">
    <span class="country__svg">${name.official}</span>
  </li>`;
}

function createMarkup(markup, element) {
element.innerHTML = markup;
}

function getValues(object) {
  return Object.values(object).join(' ');
}

export { createForManyMathes, createForOneMatch, createMarkup };
