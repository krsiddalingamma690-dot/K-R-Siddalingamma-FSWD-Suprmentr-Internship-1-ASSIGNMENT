async function getWeather() {

    let city = document.getElementById("city").value;
    let status = document.getElementById("status");
    let result = document.getElementById("result");

    // Loading state
    status.textContent = "Loading...";
    result.textContent = "";

    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=d582432da9b2feac3821b7566d44e40d&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found!");
        }

        let data = await response.json();

        // Success
        status.textContent = "Success ✅";
        result.textContent = `Temperature in ${data.name}: ${data.main.temp}°C`;

    } catch (error) {
        // Error
        status.textContent = "Error ❌";
        result.textContent = error.message;
    }
}