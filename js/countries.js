// load countries api
const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}


const displayCountries = countries =>{
    const CountriesHTML = countries.map(country => getCountryHTML(country));
    
    const container = document.getElementById('countries');
    container.innerHTML = CountriesHTML.join(' ');

}


const getCountryHTML = country =>{
    return `
        <div class="single-item">
            <h1>Name: ${country.name.common}</h1>
            <h2>Capital: ${country.capital}</h2>
            <img src="${country.flags.png}" />
        </div>
    `
}

loadCountries();