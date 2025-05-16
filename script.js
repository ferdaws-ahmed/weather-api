const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click",function(){
    const inputValue = document.getElementById("inputData").value;
    
    const apiKey = "51cd8c3ea024ef0e88d8a316a65d4537";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const city = data.name;
        const temp = data.main.temp;
        const tempCel = temp - 273.15;
        const humidity = data.main.humidity;
            const humidityForm = humidity + "%";
        const wind = data.wind.speed;
        const windSpeed = wind + "Kmh";

       


        document.getElementById("city").innerText = city;
        document.getElementById("temp").innerText = tempCel.toFixed(1);
        document.getElementById("humidity").innerText = humidityForm;
        document.getElementById("wind").innerText = windSpeed;
    })
})