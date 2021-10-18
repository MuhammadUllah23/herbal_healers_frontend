class IllnessApi {
    constructor(port){
        this.port = port
    }

    getIllnesses(){
        fetch(this.port + `/illnesses`)
        .then(r => r.json())
        .then( illnessdata => {
            for(const illness of illnessdata){
                let x = new Illness(illness)
                x.addToDropDown()
            }
        })
        .catch()
    }

    
}

