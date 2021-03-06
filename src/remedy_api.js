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
        // debugger
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
            if (data.message){
                alert(data.message)
            } else{
                const remedy = new Remedy(data)
                remedy.attachToDom()
            }
            
        }) 
        .catch()
    }

    updateRemedy(remedy){
        const {name, benefits, ingredients, steps, id} = remedy
        
        const remedyInfo = {
            name,
            benefits,
            ingredients,
            steps
        }
        // debugger
        const configObject = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(remedyInfo) 
        } 
        fetch(this.port + `/remedies/${id}`, configObject)
        .then(remedy.displayInfo())
        .catch()
        // debugger
    }

    

    
}
 