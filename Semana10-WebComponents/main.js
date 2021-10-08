class List extends HTMLElement{
    constructor(){
        super();

        let shadow = this.attachShadow({mode: 'open'});

        this.divHeader = document.createElement("div");
        this.divContent = document.createElement("div");
        this.modePicture = false;

        shadow.appendChild(this.divHeader);
        shadow.appendChild(this.divContent);
    }

    connectedCallback(){

        this.divHeader.innerHTML= `<strong>
            ${this.getAttribute("data-title")}
        </strong>`

        let url = this.getAttribute("data-url");
        let field = this.getAttribute("data-field");
        if(this.getAttribute("modePicture")){
            this.modePicture=this.getAttribute("modePicture");
        }
        
        console.log(this.modePicture)

        this.divContent.innerHTML = "";
        fetch(url)
        .then(response=>response.json())
        .then(json=>json.forEach(element=>{
            if(this.modePicture === 'true'){
                this.divContent.innerHTML += `<img
                src='${element[field]}'>
                </img>`
            }else{
                this.divContent.innerHTML += `<div>
                ${element[field]}
                </div>`
            }
           
        }));
           
    }
}

customElements.define("app-list", List);