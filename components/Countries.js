import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
             
    const fetchCountryData = async () => {
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries);
    };
    
       fetchCountryData();
    }, []);

    const removeCountry = (numericCode) =>{
        const newCountry = countries.filter(
            (country) => country.numericCode !== numericCode
        )
        setCountries(newCountry);
    }

    return (
        <div>
            <section className='grid'>
            {countries.map((country) => {
                const { numericCode, name, population, region, capital, flags} = country;

                return (
                    <article key={numericCode}>
                        <div>
                            <img src={flags.svg} alt={name} />
                             <div className="details">
                            <h3>Population: <span>{population}</span></h3>
                            <h3>Region: <span>{region}</span></h3>
                            <h3>Capital: <span>{capital}</span></h3>
                            </div>
                            <div className="buttons">
                            <Link to ={`/countries/${name}`} className="btn">Learn More</Link>
                            <button className="btn" onClick={() =>
                                removeCountry(numericCode)}
                             >Remove Country</button>
                        </div>
                        </div>
                    </article>
                );
            })}
            </section>
        </div>
    );  
};

export default Countries;

