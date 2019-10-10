const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/609ab6d87b923568f1885959f2776e98/${latitude},${longitude}?units=si`

    request({ url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to the weather service!')
        } else if (response.body.error) {
            callback('Unable to find location')
        } else {
            const current = response.body.currently
            const daily = response.body.daily.data[0]
         
            callback(undefined, `${daily.summary} it is currently ${current.temperature} degrees out. There is a ${current.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast