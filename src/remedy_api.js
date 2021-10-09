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
                x.attachToDom()
            }
        })
        .catch()
    }

    createRemedies(){
        const remedyInfo = {
            remedy: {
                name:,
                benefits:,
                ingredients:,
                steps:,
                illness_id
            }
        }

        fetch(this.port + `/remedies`)
        .then(r = r.json())
        .then(data => console.log(data)) 
    }
        
    
}
 