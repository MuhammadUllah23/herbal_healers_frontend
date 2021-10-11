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
        this/this.element.addEventListener('click', this.handleClick);
        // debugger
    }

    displayInfo(){
        this.element.innerHTML = `
        <div id="remedy-${this.id}">
        <h3 class="remedy-name">${this.name}</h3>
        <p class="remedy-illness">${this.illness.name}</p>
        <p class="remedy-benefits">${this.benefits}</p>
        <p class="remedy-ingredients">${this.ingredients}</p>
        <p class="remedy-steps">${this.steps}</p>
        </div>
        <button class="edit">Edit Remedy</button>
        <button class="delete">Delete Remedy</button>  
        
        `
        return this.element
    }

    handleClick = (e) => {
        if(e.target.innerText === "Edit Remedy"){
            e.target.innerText = "Save Remedy"
            this.createEditForm()

        }else if(e.target.innerText === "Delete Remedy"){
            console.log(e.target)
        }else if(e.target.innerText === "Save Remedy"){
            // console.log(e.target)
            e.target.innerText === "Edit Remedy"
            this.updateRemedyData()
        }     
    }

    createEditForm(){
        const remedy = this.element.querySelector("div");
        // debugger
        for(const element of remedy.children){
            let inputValue = element.innerText;
            let name = element.classList[0];
            // debugger
           if (element.tagName === "P"){
            element.outerHTML = `<input type="textarea" class="edit-${name}" value="${inputValue}" />`
           } else {
               element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}" />`
            
           }
            
        }    
    }

    updateRemedyData(){
        // debugger
        this.name = this.element.querySelector(".edit-remedy-name").value;
        this.benefits = this.element.querySelector(".edit-remedy-benefits").value;
        this.ingredients = this.element.querySelector(".edit-remedy-ingredients").value;
        this.steps = this.element.querySelector(".edit-remedy-steps").value;
        remedyApiCall.updateRemedy(this)
        // debugger
    }

    attachToDom() {
        Remedy.container.appendChild(this.displayInfo())
    }
}