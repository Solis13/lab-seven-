let weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

let weatherDataTable = document.querySelector('#weather-forecast')

fetch(weatherUrl).then( function( response ) {
    return response.json()

    // todo convert to JSON
  }).then( function( actualJsonData) { // this then function
      // has a callback that is called once the data has been converted into JSOn
      // that our program can use
    
  

      let propertiesObject = actualJsonData.properties

      let periodsArray = propertiesObject.periods
      console.log(periodsArray)

      periodsArray.forEach(function(oneForecastPeriodObject){
        console.log(oneForecastPeriodObject)
        let timeForForecast = oneForecastPeriodObject.name
        
        let temperature = oneForecastPeriodObject.temperature
        let newTableRow = document.createElement('tr') 


        // make new td element

        let timeTableData  = document.createElement('td')
        timeTableData.innerHTML = timeForForecast

        let temperatureTableData = document.createElement('td')    
        temperatureTableData.innerHTML = temperature

        // we need to add new td to the new table row

        newTableRow.appendChild(timeTableData)
        newTableRow.appendChild(temperatureTableData)

        weatherDataTable.appendChild(newTableRow)


      })
        
      })

