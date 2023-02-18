const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

//_______________1 část______________\\

function checkCountry(country, countries) {
  //1) string and length > 0
  if (typeof country != "string" || country.length == 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
    return;
  }
  //2) country in countries?
  console.log(
    countries.includes(country)
      ? `Zadaná krajina ${country} se nachází v seznamu krajin na indexu: ${countries.indexOf(
          country
        )}`
      : `Zadaná krajina ${country} se nenachází v seznamu krajin.`
  );
}

//checkCountry("Germany", countries);
//checkCountry("Japan", countries);
//checkCountry(1000, countries);

//_____________2 část________________\\

function addCountry(country, countries) {
  //check if country is valid
  if (typeof country != "string" || country.length == 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
    return;
  }
  //check if country is already in array, if not -> add and display info message
  if (countries.includes(country)) {
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na indexu: ${countries.indexOf(
        country
      )}`
    );
  } else {
    countries.push(country);
    console.log(
      `Zadaná krajina ${country} byla úspěšně přidaná do seznamu krajin na indexu ${countries.indexOf(
        country
      )}. Celkový počet krajin v seznamu je ${countries.length}`
    );
  }
}

// console.log("countries before adding:")
// console.table(countries)

// addCountry("Vietnam", countries);
// addCountry("Mexico", countries);
// addCountry("Poland", countries);
// addCountry("", countries);

// console.log("countries after adding: ")
// console.table(countries)

//_____________3 část_________________\\

function removeCountry(country, countries) {
  //check if input country is valid
  if (typeof country != "string" || country.length == 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
    return;
  }
  // check if country is in array? remove it and display message:
  if (countries.includes(country)) {
    const countryIndex = countries.indexOf(country);
    countries.splice(countryIndex, 1);
    console.log(
      `Zadaná krajina ${country} byla odstraněná ze seznamu krajin na indexu ${countryIndex}. Aktuální počet krajin v seznamu je ${countries.length}`
    );
  } else {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu.`);
  }
}

// console.log("countries before removing:")
// console.table(countries)

//removeCountry("", countries);
//removeCountry("Vietnam", countries);
//removeCountry("Laos", countries);
//removeCountry("Thailand", countries);

// console.log("countries after removing: ")
// console.table(countries)
