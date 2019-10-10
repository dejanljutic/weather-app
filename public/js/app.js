const getForecast = async (address) => {
    const response = await fetch(`http://localhost:3000/weather?address=${address}`)
    const forecast = await response.json()
    
    if (forecast.error) 
        return locationMessage.textContent = forecast.error
    
    locationMessage.textContent = forecast.location
    forecastMessage.textContent = forecast.forecast

}

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const locationMessage = document.querySelector('#location-msg')
const forecastMessage = document.querySelector('#forecast-msg')
const errorMessage = document.querySelector('#error-msg')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value.trim()

    locationMessage.textContent = 'Loading...'
    forecastMessage.textContent = ''

    getForecast(location)
})
