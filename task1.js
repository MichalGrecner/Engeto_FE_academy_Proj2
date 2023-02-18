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

//1 část

function checkCountry(country, countries){
  //1) string and length > 0
  if(typeof country != "string" || country.length == 0) return (`Zadali jste neplatný dotaz: ${country}`);
  //2) if country in countries -> return index, otherwise inform user
  if(countries.includes(country)){
    return (`Zadaná krajina ${country} se nachází v seznamu krajin na indexu: ${countries.indexOf(country)}`)
  } else {
    return `Zadaná krajina ${country} se nenachází v seznamu krajin.`
  }

}

console.log(checkCountry("China", countries))