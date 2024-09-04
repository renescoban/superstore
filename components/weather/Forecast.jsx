

const Forecast = ({ data }) => {
  //let DateX =new Date(data.list[0].dt * 1000).toLocaleDateString()
  const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
  let DateM = new Date().getMonth()
  let DateD = new Date().getDate()



  // {
  //   data.list.filter( (time )=> new Date(time.dt_txt).getHours() == new Date(data.list[0].dt_txt).getHours()).map(timi => <p>{timi.dt_txt}</p>    )
  // }
  return (

    <div >
      <h1 className="font-serif">{data.city.name}</h1>
      {
        data.list.filter((time) => new Date(time.dt_txt).getHours() == new Date(data.list[0].dt_txt).getHours()).map(timi =>
          <>
            <div className="flex items-center justify-between border-t-2 rounded-md font-Roboto hover:bg-slate-300">
              <div className="flex flex-col text-center  ">
                <p className=" " > {new Date(timi.dt * 1000).toLocaleDateString("tr-Tr", { day: "2-digit", month: "short", hour: "2-digit", })}</p>
              </div>

              <div className="flex items-center relative left-6 ">
                <h1 className=" ">{(timi.main.temp).toFixed()}°C</h1>
                &nbsp;
                <p>{timi.weather[0].main}</p>
                <div>
                  <img id="wicon" className="" width="60" src={`http://openweathermap.org/img/wn/${timi.weather[0].icon}@2x.png`} alt="weather icon">
                  </img>
                </div>
              </div>
              <div>
              </div>
            </div>
          </>)
      }
    </div>
  )
}

export default Forecast