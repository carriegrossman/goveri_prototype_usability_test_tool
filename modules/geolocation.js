import {apiKey} from "./config.js"

// export default params => {
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?${params}&key=${apiKey}`, {
//         method: "GET",
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
// }

export let lat
export let lng

export default () => {
    fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`, {
        method: "POST",
        body:JSON.stringify({
            "location": {
                "lat": 51.0,
                "lng": -0.1
            },
            "accuracy": 1200.4
        })
    })
        .then(response => response.json())

        //THIS ISN'T STORING LAT AND LNG...
        .then(data => {
            lat = data.location.lat
            lng = data.location.lng
            console.log(lat,lng)
        })
}







// var request = new XMLHttpRequest()

// request.open('GET', 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyA-FD7UmxJXC2NjReClIbSv-BFjfELmqN4', true)
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach((movie) => {
//       console.log(movie.title)
//     })
//   } else {
//     console.log('error')
//   }
// }

// request.send()