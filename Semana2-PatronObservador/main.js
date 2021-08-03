class Subject{
    constructor(){
        this.observers = [];
    }

    subscribe(obs){
        this.observers.push(obs);
    }

    unsubscribe(obs){
        this.observers = this.observers.filter(e=>e !=obs);
    }

    notify(o){
        this.observers.forEach(obs =>{
            obs.notify(o);
        })
    }
}

class ItemSubject extends Subject{

    constructor(){
        super();
        this.items = [];
    }

    notify(item){
        this.items.push(item);

        super.notify(this);
    }
}

class ListObserver{

    constructor(tag){
        this.tag = tag;
    }

    notify(subject){
        this.tag.innerHTML = "";

        subject.items.forEach(e=>{
            let div = document.createElement("div");

            div.innerHTML =
                `<p>${e.description} <b>${e.amount}</b></p> `;

            this.tag.appendChild(div);
        });
    }
}
class TotalObserver{

    constructor(tag){
        this.tag = tag;
    }

    notify(subject){
        let total=
         subject.items.reduce(
             (ac, current) =>
                ac + parseFloat(current.amount),
             0);
        
        this.tag.innerHTML = total;
    }
}

class DynamicObserver{
    constructor(tag, fn){
        this.tag = tag;
        this.fn = fn;
    }

    notify(subject){
        this.fn(subject, this.tag);
    }
}