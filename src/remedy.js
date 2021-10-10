class Remedy {
    static container = document.getElementById("remedies-cont")
    constructor({name, benefits, ingredients, steps, id, illness, illness_id}){
        this.name = name
        this. benefits = benefits
        this.ingredients = ingredients
        this.steps = steps
        this.id = id
        this.illness = illness
        this.illness_id = illness_id
        this.element = document.createElement('li');
        this.element.id = `remedy-${id}` 
        // debugger
    }

    displayInfo(){
        this.element.innerHTML = `
        <div id="remedy-${this.id}">
        <h3 class="remedy-name">${this.name}</h3>
        <p class="remedy-benfits">${this.benefits}</p>
        <p class="remedy-ingredients">${this.ingredients}</p>
        <p class="remedy-steps">${this.steps}</p>
        <button class="edit">Edit Remedy</button>
        <button class="delete">Delete Remedy</button>  
        </div>
        `
        return this.element
    }

    attachToDom() {
        Remedy.container.appendChild(this.displayInfo())
    }
}