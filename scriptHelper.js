// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTargetResponse = document.querySelector("#missionTarget");
    missionTargetResponse.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`;
    
}

function validateInput(testInput) {
    if (isNaN(Number(testInput))) {
        return 'Not a Number';
    } else if (testInput === "") {
        return "Empty";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.querySelector('#pilotStatus');
    let copilotStatus = document.querySelector('#copilotStatus');
    let fuelStatus = document.querySelector('#fuelStatus');
    let cargoStatus = document.querySelector('#cargoStatus');
    let launchStatus = document.querySelector('#launchStatus');

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
        return;
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" ||
        validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("You must enter valid information in each field!");
        return;
    } else {
        // fuelLevel = Number(fuelLevel);
        // cargoLevel = Number(cargoLevel);
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }

    if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        fuelStatus.style.color = "red"
    } else if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        cargoStatus.innerHTML = `Cargo mass too high for launch`;
        cargoStatus.style.color = "red";
    } else {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
