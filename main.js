

// Get the users IP Address
function getIP() {

    fetch('https://api.ipify.org/?format=json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let ipAddr = data.ip;
            document.getElementById("IP").innerHTML = ipAddr; 
        })
}

function getLocation(ipAddr) {
    fetch('http://ip-api.com/json/', ipAddr)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let status = data.status;
            let country = data.country;
            let city = data.city;

            if (status == "success") {
                document.getElementById("Location").innerHTML = country + ", " + city
            }
        })
}   

