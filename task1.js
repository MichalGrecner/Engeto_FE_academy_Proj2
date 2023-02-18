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
  if(typeof country != "string" || country.length == 0){
    console.log(`Zadali jste neplatný dotaz: ${country}`);
    return
  } 
  
  //2) if country in countries -> return index, otherwise inform user
  if(countries.includes(country)){
    console.log(`Zadaná krajina ${country} se nachází v seznamu krajin na indexu: ${countries.indexOf(country)}`)
  } else {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`)
  }

}


//checkCountry("Germany", countries);
//checkCountry("Japan", countries);
//checkCountry(1000, countries);


// 2 část


