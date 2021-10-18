const port = `http://localhost:3000` ;
const remedyApiCall = new RemedyApi(port);
const IllnessApiCall = new IllnessApi(port);
// to call different fetch requests. remedyApiCall is an instance to call an instance method
const form = document.getElementById("remedy-form");
const dropDown = document.getElementById("illness-dropdown");
const nameValue = document.getElementById("remedy-name");
const benefitsValue = document.getElementById("remedy-benefits");
const ingredientsValue = document.getElementById("remedy-ingredients");
const stepsValue = document.getElementById("remedy-steps");
const illnessIdValue = document.getElementById("illness-dropdown");
const illnessFilter = document.getElementById("filter-options");


remedyApiCall.getRemedies()
IllnessApiCall.getIllnesses()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    // debugger
    e.preventDefault();
    remedyApiCall.createRemedies()
    e.target.reset();
}

