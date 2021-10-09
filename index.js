const port = `http://localhost:3000` ;
const remedyApiCall = new RemedyApi(port);
const form = document.getElementById("remedy-form")
const dropDown = document.getElementById("illness-dropdown")
// to call different fetch requests. remedyApiCall is an instance to call an instance method

remedyApiCall.getRemedies()