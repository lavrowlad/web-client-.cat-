class Light {
    constructor(_id, _description){
        this.id = _id;
        this.type = "lighting";
        this.description = _description;
    }
    
    get DOMelement(){
        var element = document.createElement("div");
        element.setAttribute("class", this.type);
        /*element.innerHTML = this.description;*/
        
        return element;
    }
}