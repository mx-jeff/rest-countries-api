import React,{ useEffect, useState } from 'react'
import api from '../../services/api'

import './styles.css'

export default function AllFlags(){
    const[countries, setCountries] = useState([])
    const[country, setCountry] = useState('') 
    const[region, setRegion] = useState('')
    

    useEffect(() => {
        async function load(){
            const response = await api.get('/all')

            document.title = 'Countries Api'
            setCountries(response.data)
        } 
        
        load()
    },[])

    useEffect(() => {
        async function searchCountry(name){
            
            let response
            try {
                response = await api.get(`/name/${name}`)
            } catch {
                response = await api.get(`/all`)
            }

            setCountries(response.data)
        }   
        
        if(country !== ''){
            searchCountry(country)
        }
    },[country])

    useEffect(() => {
        async function searchFlagByRegion(name){
            
            let response
            try {
                response = await api.get(`/region/${name}`)
            } catch {
                response = await api.get(`/all`)
            }

            setCountries(response.data)
        }   
        
        if(region !== ''){
            searchFlagByRegion(region)
        }
        
    },[region])
    
    return (
        <>
            <div className="options">
                <input 
                    type="text" 
                    className="box" 
                    placeholder="search for a country..."
                    onChange={e => setCountry(e.target.value)}
                />

                <select name="countries" className="box" onChange={e => setRegion(e.target.value)}>
                    <option value="filter">Filter By Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>

            <div className="flag-container">
                {countries.map(country => (
                    <div className="flag" key={country.numericCode}>
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