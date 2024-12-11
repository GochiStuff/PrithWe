document.getElementById("calculator-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Inputs
    const carKm = parseFloat(document.getElementById("car-km").value) || 0;
    const flightMiles = parseFloat(document.getElementById("flight-miles").value) || 0;
    const electricityKwh = parseFloat(document.getElementById("electricity-kwh").value) || 0;
    const gasGallons = parseFloat(document.getElementById("gas-gallons").value) || 0;
    const wasteLbs = parseFloat(document.getElementById("waste-lbs").value) || 0;

    // Conversion factors (approximate and India-specific where possible)
    const carEmissionFactor = 0.2; // kg CO2 per km
    const flightEmissionFactor = 0.09; // kg CO2 per mile
    const electricityEmissionFactor = 0.8; // kg CO2 per kWh
    const gasEmissionFactor = 2.31; // kg CO2 per gallon
    const wasteEmissionFactor = 0.75; // kg CO2 per lb

    // Calculations
    const carEmissions = carKm * carEmissionFactor;
    const flightEmissions = flightMiles * flightEmissionFactor;
    const electricityEmissions = electricityKwh * electricityEmissionFactor;
    const gasEmissions = gasGallons * gasEmissionFactor;
    const wasteEmissions = wasteLbs * wasteEmissionFactor;

    const totalEmissions = (
        carEmissions +
        flightEmissions +
        electricityEmissions +
        gasEmissions +
        wasteEmissions
    ).toFixed(2);

    // Display result
    document.getElementById("result").innerHTML = `
        <h2>Your Total Carbon Emissions:</h2>
        <p><strong>${totalEmissions} kg CO2</strong></p>
        <ul>
            <li>Car Travel: ${carEmissions.toFixed(2)} kg CO2</li>
            <li>Air Travel: ${flightEmissions.toFixed(2)} kg CO2</li>
            <li>Electricity Usage: ${electricityEmissions.toFixed(2)} kg CO2</li>
            <li>Gasoline Usage: ${gasEmissions.toFixed(2)} kg CO2</li>
            <li>Waste Generated: ${wasteEmissions.toFixed(2)} kg CO2</li>
        </ul>
    `;
});
