class Illness {
    constructor({name, symptoms, id, remedies}) {
        // debugger
        this.name = name
        this.symptoms = symptoms
        this.id = id
        this.remedies = remedies
    }

    addToDropDown(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.name
        dropDown.appendChild(option)
    }
}