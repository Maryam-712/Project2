import React, {useState, useEffect} from 'react'
import './style/style.css'

const Temp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Karachi");

  useEffect( () => {

    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0ececeb527beaec1cb1cd6294c82b6da`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
}, [search])


  return (
    <>
        <div className="box">
            <div className="inputData">
            <input 
            type="search"
            value = {search} 
            className='inputField'
            onChange={(event) => { setSearch(event.target.value)}}
            />
            </div>
            

            {! city ? 
              (<p className='errorMsg'>not Found</p>)
            : 
             ( 
              <div>
                <div className="info">
            <h2 className="location">
            <i className="fa-solid fa-street-view"></i > 
            {search} </h2>
            
            <h1 className='temp'>{city.temp} °Cel</h1>

            <h3 className="tempin"></h3>

        </div>

              </div>
             )
            }

      
        </div>
    </>
  )
}

export default Temp