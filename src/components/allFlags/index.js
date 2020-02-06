import React,{ useEffect, useState } from 'react'
import api from '../../services/api'

import './styles.css'

export default function AllFlags(){
    const[countries, setCountries] = useState([])

    useEffect(() => {
        async function load(){
            const response = await api.get('/all')

            document.title = 'Countries Api'
            console.log(response.data[0])
            setCountries(response.data)
        } 
        
        load()
    },[])
    
    return (
        <>
            <div className="options">
                <input type="text" className="box" placeholder="search for a country..."/>

                <select name="countries" className="box">
                    <option selected>Filter By Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>

            <div className="flag-container">
                {countries.map(country => (
                    <div className="flag">
                        <img src={country.flag} alt={country.name}/>

                        <div className="info">
                            <h3>{country.name}</h3>
                            
                            <p><strong>Region: </strong>{country.region}</p>
                            <p><strong>Population: </strong>{country.population}</p>
                            <p><strong>Capital: </strong>{country.capital}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}