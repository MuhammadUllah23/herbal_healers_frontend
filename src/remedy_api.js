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
                name: nameValue.value,
                benefits: benefitsValue.value,
                ingredients: ingredientsValue.value,
                steps: stepsValue.value,
                illness_id: illnessIdValue.value
            }
        }

        fetch(this.port + `/remedies`)
        .then(r = r.json())
        .then(data => console.log(data)) 
    }
        
    
}
 