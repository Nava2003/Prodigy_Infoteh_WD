document.addEventListener("DOMContentLoaded", function() {
    var apikey = "3777d792b23840eaa9255106241210";
    var apiendpoint = "http://api.weatherapi.com/v1/current.json";
    var loc = document.getElementById("inp");
    var infob = document.getElementById("weather");
    var info = document.getElementById("info");

    infob.addEventListener("click", function(event) {
        event.preventDefault(); 

        var location = loc.value.trim();
  
        if (!location) {
            info.innerHTML = `<p style="color: red;">Please enter a valid location.</p>`;
            return;
        }

        var url = `${apiendpoint}?key=${apikey}&q=${location}`;

        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");  
            }
            return response.json();
        })
        .then(data => {
            var infodata = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Current Weather: ${data.current.condition.text}</p>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind Speed: ${data.current.wind_kph} kph</p>
            `;
            info.innerHTML = infodata;
        })
        .catch(error => {
            console.error(error);
            info.innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
    });
});
