class RemedyApi {
    constructor(port){
        this.port = port
    }

    getRemedies(){
        fetch(this.port + `/remedies`) 
        .then(r => r.json())
        .then(remedies => console.log(remedies))
    }
}
 