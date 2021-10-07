class Remedy {
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
        debugger
    }
}