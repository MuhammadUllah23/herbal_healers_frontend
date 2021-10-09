const port = `http://localhost:3000` ;
const remedyApiCall = new RemedyApi(port);
// to call different fetch requests. remedyApiCall is an instance to call an instance method
const form = document.getElementById("remedy-form");
const dropDown = document.getElementById("illness-dropdown");


remedyApiCall.getRemedies()

form.addEventListener('submit' handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    
}