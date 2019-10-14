const request = require('request')

const forecast = (forecastType, latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/609ab6d87b923568f1885959f2776e98/${latitude},${longitude}?units=si`

    request({ url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to the weather service!')
        } else if (response.body.error) {
            callback('Unable to find location')
        } else {
            const current = response.body.currently
            const daily = response.body.daily.data[0]
            
            if (forecastType === 'daily')
                callback(undefined, `${daily.summary} It is currently ${current.temperature} degrees Celsius. The high today is ${daily.temperatureMax} with a low of ${daily.temperatureMin}. There is a ${current.precipProbability*100}% chance of rain.`)
            else 
                callback(undefined, `${response.body.daily.summary}`)
        }
    })
}

module.exports = forecast