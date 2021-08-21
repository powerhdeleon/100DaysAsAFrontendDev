

class Game{

    size = 8;
    nameSquare = "square";
    actions = [
        this.bomb,
        this.space
    ];

    constructor(){
        
    }

    generateStage(element){
        let action = this.actions[0];

        for(let i=0; i< this.size * this.size; i++){
            let div = document.createElement("div");
            div.id = this.nameSquare+"-"+i;
            div.textContent = i;
            div.dataset.type = 1;

            div.addEventListener("click", ()=>{
                action(div);
            })
            document.getElementById(element).appendChild(div);
        }
    }

    bomb(div){
        alert("bomba "+div.dataset.type);
    }

    space(div){
        alert("blanco "+div.dataset.type);
    }

}
