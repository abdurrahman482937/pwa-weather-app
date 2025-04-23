import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

export default function App() {
    let [query, setQuery] = useState("")
    let [weather, setWeather] = useState("")
    const search = async (e) => {
        if (e.key === "Enter") {
            const data = await fetchWeather(query)
            setWeather(data);
            setQuery("");
        }
    }
    return (
        <div className='main-container'>
            <input type='text' className='search' placeholder='Search...' value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                }}
                onKeyDown={search}
            />
        </div>
    );
}
