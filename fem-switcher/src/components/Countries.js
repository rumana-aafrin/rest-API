import React, { useEffect, useState } from 'react';

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
    const [countries, setCountries] = useState([]);
     
    const fetchCountryData = async () => {
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries);
        console.log(countries);
    };

    useEffect(() => {
       fetchCountryData();
    }, []);

    return (
        <div>
            <section className='grid'>
            {countries.map((country) => {
                const { numericCode, name, population, region, capital, flags } = country;

                return (
                    <article key={numericCode}>
                        <div>
                            <img src={flags.svg} alt={name} />
                             <div className="details">
                            <h3>Population: <span>{population}</span></h3>
                            <h3>Region: <span>{region}</span></h3>
                            <h3>Capital: <span>{capital}</span></h3>
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
