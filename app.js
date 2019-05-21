// import { request } from "https";

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'https://api.darksky.net/forecast/d4f04af4b82768fa21e6e695d25c82ce/37.8267,-122.4233'

// request({ 'url': url, json: true }, (error, response) => {
//     console.log('starting now')
//     if (error) {
//         console.log('Unable to fetch weather details')
//         console.log('PLEASE CHECK')
//         console.log('your network connection')
//         console.log('try after some time')
//     }
//     else if (response.body.error) {
//         console.log('unable to fetch location')
//     }
//     else {

//     }
//     temp = response.body.currently.temperature
//     apparentTemp = response.body.currently.apparentTemperature
//     summary = response.body.currently.summary
//     console.log('temp:', temp)
//     console.log('apparentTemp:', apparentTemp)
//     console.log('summary:', summary)

// })
// console.log('   ')

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWNleDAwN3giLCJhIjoiY2p2dDRxN2NvMzJsMDQ0cnRidjNnbTA3byJ9.VbBfwZYW0l4c8mSs0Vw4FQ'
// console.log('   ')
// console.log('   ')

// request({ 'url': geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to fetch weather details')
//         console.log('PLEASE CHECK')
//         console.log('your network connection')
//         console.log('try after some time')
//     }
//     else if (response.body.error) {
//         console.log('please enter the right coordinates')
//     }

//     const longitude = response.body.features[0].center[0]
//     const latitude = response.body.features[0].center[1]
//     console.log(`latitude is: ${latitude}, longitude is: ${longitude}`)

// })

// const geocode = (add, callback) => {
//     setTimeout(() => {
//         const data = {
//             lat: 0,
//             log: 0
//         }
//         callback(data)
//     }, 2000)
// }
// geocode('noida', (data) => {
//     console.log(data)
// })



// const add = (a, b, callback) => {
//     setTimeout(() => {
//         callback(a + b)
//     }, 2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum)
// })
const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}
