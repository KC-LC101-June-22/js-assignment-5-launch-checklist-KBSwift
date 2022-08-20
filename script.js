const { formSubmission } = require("./scriptHelper.js");
this.document.querySelector("#faultyItems").style.visibility = "hidden";

window.addEventListener("load", function () {

    this.document.querySelector("#faultyItems").style.visibility = "hidden";
    const form = document.querySelector("#launchForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilotNameInput = document.querySelector("#pilotName").value;
        let copilotNameInput = document.querySelector('input[name=copilotName]').value;
        let fuelLevelInput = document.querySelector('input[name=fuelLevel]').value;
        let cargoMassInput = document.querySelector('input[name=cargoMass]').value;
        let faultyList = document.querySelector('#faultyItems');

        // if (pilotNameInput.value === "" || copilotNameInput.value === "" ||
        //     fuelLevelInput.value === "" || cargoMassInput.value === "") {
        //     alert("All fields are required!");
        //     event.preventDefault();
        // }

        formSubmission(document, faultyList, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })

});