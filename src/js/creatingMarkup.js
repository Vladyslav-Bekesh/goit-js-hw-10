function createForManyMathes(countryNames) {
  console.log('creating markup');
  const markup = countryNames.reduce(
    (markup, countryName) => markup + createListELement(countryName),
    ''
  );
  // console.log(markup);
}

function createForOneMatch(countryName) {
  console.log('creating markup for one country');
  const { flags, name, languages, capital, population } = countryName[0];
  return `<div class="country__info">
  <div class="country__name">
    <svg class="" width="20" height="20">
      <use href="${flags.png}"></use>
    </svg>
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
    <svg class="country__svg" width="100" height="80">
      <use href="${flags.png}"></use>
    </svg>
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
