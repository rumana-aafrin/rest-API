import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './country.css';

const Country = () => {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const response = await fetch(
                    `https://restcountries.com/v3.1/name/${name}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch country data');
                }
                const countryData = await response.json();
                setCountry(countryData);
                console.log(countryData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCountryData();
    }, [name]);

    return (
        <div>
            <Link to="/" className="btn btn-light">
                <i className="fas fa-arrow-left"></i> Back home
            </Link>
            <section className="country">
                {country.map((c) => {
                     const{numericCode, flag, name, Nativename, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = c
                    return (
                        <article key={numericCode}>
                            <div className="country-inner">
                            <div className="flag">
                                <img src={flag} alt={name} />
                            </div>

                            <div className="country-details">
                            <div>  
                                <h2>{name}</h2>
                           <h3>Native Name:<span>{Nativename}</span></h3>
                            <h3>Population: <span>{population}</span></h3>
                            <h3>Region: <span>{region}</span></h3>
                            <h3>Sub Region: <span>{subregion}</span></h3>
                            <h3>Capital: <span>{capital}</span></h3>
                            </div>
                            <div>
                            <h3>Top Level Domain: <span>{topLevelDomain}</span></h3>
                            <h3>Currencies <span>{currencies[0].name}</span></h3>
                            <h3>Region: <span>{languages[0].name}</span></h3>
                            </div>
                            </div>
                            <div>
                            </div>
                               <h3>Border Countries:</h3> 
                               <div className="borders">
                               {borders.map((border) =>{
                                return(
                                    <ul key= {border}>
                                        <li>{border}</li>
                                    </ul>
                                )
                               })}
                               </div>
                            </div>
                            {/* Display other country information */}
                        </article>
                    );
                })}
            </section>
        </div>
    );
};

export default Country;
