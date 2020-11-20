// Get Location from IP
function getLocation(ipAddr) {
    fetch('http://ip-api.com/json/')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let status = data.status;
            let country = data.country;
            let city = data.city;
            let ip = data.query;

            if (status == "success") {
                document.getElementById("Location").innerHTML = country + ", " + city;
            }
            else {
                document.getElementById("Location").innerHTML = "ERROR"
            }
        })
}   

