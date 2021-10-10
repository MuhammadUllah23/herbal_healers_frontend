class RemedyApi {
    constructor(port){
        this.port = port
    }

    getRemedies(){
        fetch(this.port + `/remedies`) 
        //this.port = remedyApiCall = `http://localhost:3000`
        .then(r => r.json())
        .then(remedydata => {
            for(const remedy of remedydata){
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
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(remedyInfo) 
        } 

        fetch(this.port + `/remedies`, configObject)
        .then(r => r.json())
        .then(data => {
            const remedy = Remedy.new(data)
            remedy.attachToDom()
        }) 
    }
        
    
}
 