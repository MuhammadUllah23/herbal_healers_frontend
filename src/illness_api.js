class IllnessApi {
    constructor(port){
        this.port = port
    }

    getIllnesses(){
        fetch(this.port + `/illnesses`)
        .then(r => r.json())
        .then( illnessdata => {
            debugger
        })
        .catch()
    }
}