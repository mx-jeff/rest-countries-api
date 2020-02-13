import React,{ useEffect, useState } from 'react'
import './style.css'

import api from '../../services/api'

export default function FlagDetails(){
    const[detailFlag, setDetailFlag] = useState([])

    useEffect(() => {
        async function loadFlag(name='brazil'){
            const response = await api.get(`/name/${name}`)
            setDetailFlag(response.data)
        }

        loadFlag()
    }, [])

    console.log(detailFlag)

    return (
        <>
            {detailFlag.map(flag => (
                <div className="flag-detail-container" key={flag.name}>
                    <img src={flag.flag} className="flag-image" alt={flag.name}/>

                    <div className="flag-detail">
                        <h2>{flag.name}</h2>
                        
                        <div className="flag-detail-info">
                            <div>
                                <p><strong>Native name: </strong> {flag.nativeName}</p>
                                <p><strong>Population: </strong> {flag.population}</p>
                                <p><strong>Region: </strong>{flag.region} </p>
                                <p><strong>Subregion: </strong>{flag.subregion}</p>
                                <p><strong>Capital: </strong>{flag.capital}</p>
                            </div>       
        
                            <div>
                                <p><strong>Top level domain: </strong> {flag.topLevelDomain} </p>
                                <p><strong>Currencies: </strong> {flag.currencies.map(currency => currency.name)}</p>
                                <p><strong>Languagues: </strong> {flag.languages.map(language => language.name)}</p>
                            </div>
                        </div>
        
                        <nav className="btn-container">
                            <strong>Border contries: </strong> 
                            {flag.borders.map(border => (
                                <span className="btn"> {border} </span> 
                            ))}
                        </nav>        
                    </div>
                </div>
            ))}
        </>
    )
}