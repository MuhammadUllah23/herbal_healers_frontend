class RemedyApi {
    constructor(port){
        this.port = port
    }

    getRemedies(){
        fetch(this.port + `/remedies`) 
        //this.port = remedyApiCall = `http://localhost:3000`
        .then(r => r.json())
        .then(remedies => {
            for(const remedy of remedies){
                let x = new Remedy(remedy)
            }
        })
        .catch()
    }
}
 