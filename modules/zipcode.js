export default (zip,callback) => {
    const key = "AIzaSyA-FD7UmxJXC2NjReClIbSv-BFjfELmqN4";
    let zCode = `${zip.value}`;
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zCode}&key=${key}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data.results[0].formatted_address);
        console.log(data.results[0].address_components[1].long_name)
        console.log(data.results[0].address_components[2].short_name)
        callback(data.results[0].address_components[1].long_name,data.results[0].address_components[2].short_name)
    })
    .catch(err => console.warn(err.message))
};