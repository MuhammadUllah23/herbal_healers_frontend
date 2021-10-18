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
            const remedy = new Remedy(data)
            remedy.attachToDom()
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

    
    deleteRemedy(e){
        // debugger
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        // debugger
        fetch(`${this.port}/remedies/${id}`, {method: 'DELETE'})
        .then(r => r.json())
        .then(json => alert(json.message))
    }
        
    
}
 