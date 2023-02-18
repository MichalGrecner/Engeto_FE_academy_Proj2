const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];

const populationTotal = 8000000000;

//____________1) make function of counting percentage of total population
function countPercent(population, totalPopulation){
  const result =((population/totalPopulation)*100).toFixed(2);
  return parseFloat(result);
}
//console.log(countPercent(countriesPopulation[0].population, populationTotal))

//____________2) Make copy of countriesPopulation
const copyCountries = JSON.parse(JSON.stringify(countriesPopulation));

// console.table(copyCountries)
// copyCountries[0].country = "Czech"
// console.table(copyCountries)
// console.table(countriesPopulation)

//______________3) sort array by population from small to large. 

copyCountries.sort((a, b) => a.population - b.population);
//console.table(copyCountries)


//______________4) add "id" property 

copyCountries.forEach((element, index) => {element.id = element.country.slice(0,3) + index;
});
//console.table(copyCountries)

//______________5) add "percentage" property

copyCountries.forEach(element => {element.percentage = countPercent(element.population, populationTotal)
});
//console.table(copyCountries)

//_____________6) create new array with countries which meet defined requirements

function filterCountries(e){
  return e.country.length >4 && e.country.length <= 8 && e.percentage > 1.5 && e.percentage < 10
}
const filteredCountries = copyCountries.filter(filterCountries);

// console.table(copyCountries)
// console.table(filteredCountries)
