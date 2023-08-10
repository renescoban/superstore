

const Current = ({ data }) => {
  return (
    <div>
      <div className=' '>
        <div className=" w-full   flex justify-between">
          {data.city ?

            <div className='TEMP flex items-center relative right-5'>
              <div>
                <img id="wicon" className="" width="60" src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} alt="weather icon">
                </img>
              </div>
              <h1 className=" relative right-1">{(data.list[0].main.temp).toFixed()}°C</h1>
              <p>{data.list[0].weather[0].main}</p>
            </div> : null}
          <div className="LOCATION self-center">
            {data.city ? <p className=""> {data.city.name} </p> : null}
          </div>
        </div>

        {data.list ? <div className=" mt-4 flex justify-between text-sm">
          <div className="feels block ">
            <p>Feels Like: </p>
            <p className=''>{data.list[0].main.feels_like.toFixed()}°C</p>
          </div>
          <div className="humidity">
            <p>Humidity: </p>
            <p className=''>{data.list[0].main.humidity}%</p>
          </div>
          <div className="wind">
            <p>Wind Speed: </p>
            <p className=''>{data.list[0].wind.speed * 1.60934.toFixed()} KPH</p>
          </div></div> : null
        }

      </div>
    </div>
  )
}

export default Current