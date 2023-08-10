

const Forecast = ({ data }) => {
  //let DateX =new Date(data.list[0].dt * 1000).toLocaleDateString()
  const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
  let DateM = new Date().getMonth()
  let DateD = new Date().getDate()



  // {
  //   data.list.filter( (time )=> new Date(time.dt_txt).getHours() == new Date(data.list[0].dt_txt).getHours()).map(timi => <p>{timi.dt_txt}</p>    )
  // }
  return (

    <>
      {
        data.list.filter((time) => new Date(time.dt_txt).getHours() == new Date(data.list[0].dt_txt).getHours()).map(timi =>
          <>
            <div className="flex items-center justify-between ">
              <div className="flex flex-col text-center ">
                <p className=" " ></p>
                <p className=" " > {new Date(timi.dt * 1000).toLocaleDateString("tr-Tr", { hour: "2-digit", minute: "2-digit", })}</p></div>
              <div className="flex  items-center">
                <h1 className=" ">{(timi.main.temp).toFixed()}°C</h1>
                <p>{timi.weather[0].main}</p>
                <div>
                  <img id="wicon" className="" width="60" src={`http://openweathermap.org/img/wn/${timi.weather[0].icon}@2x.png`} alt="weather icon">
                  </img>
                </div>
              </div>
              <div>
              </div>
            </div>
          </> )
  }
    </>
  )
}

export default Forecast