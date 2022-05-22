import React, { useEffect, useState } from "react";

const TempApp = () => {
    const [city,setCity]= useState(null);
    const [search,setSearch] = useState("delhi");

    useEffect( () => {
        const fetchApi = async () => {
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c1c841ce834c2dae16f1b9cda76eae6c`
            const response= await fetch(url);
            const resJson= await response.json();
            console.log(resJson);
            setCity(resJson.main);
        };
        fetchApi();
    } , [search] );

    return (
        <>
            <div className="container">
                <div className="box-div">
                    <div className="input-div">
                        <input
                        className="inputField"
                        type='text'
                        placeholder="Search"
                        name='search'
                        value={search}
                        onChange={ (event) => {setSearch(event.target.value)} }
                        />
                    </div>
                    {
                        !city ?
                        (<p className="no-data">No Data Found</p>) :
                                (
                                    <div>
                                    <div className="print-info-div">
                                        <div className="info">
                                            <h2 className="location">
                                                <i className="fa fa-map-marker fa-bounce" aria-hidden="true"></i>{search}
                                            </h2>
                                            <h1>{city.temp}°C</h1>
                                            <h3 className="tempmin_max">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                                        </div>
                                    </div>
                                    <div className="waveone"></div>
                                    <div className="wavetwo"></div>
                                    <div className="wavethree"></div>
                                    </div>
                                )
                    }
                </div>
            </div>
        </>
    );
}

export default TempApp;