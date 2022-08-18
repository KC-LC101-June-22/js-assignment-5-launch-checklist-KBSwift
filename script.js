// Write your JavaScript code here!

window.addEventListener("load", function () {

    let form = document.querySelector("#launchForm");
    form.addEventListener("#launchForm", function(event) {
        let pilotNameInput = document.querySelector("#pilotName");
        if (pilotNameInput.value === "") {
            alert("All fields are required!");
        }
    });
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

});