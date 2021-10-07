class RemedyApi {
    constructor(port){
        this.port = port
    }

    getRemedies(){
        fetch(this.port + `/remedies`) 
        //this.port = remedyApiCall = `http://localhost:3000`
        .then(r => r.json())
        .then(remedies => console.log(remedies))
    }
}
 