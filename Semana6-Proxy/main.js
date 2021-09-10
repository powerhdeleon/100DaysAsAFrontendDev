(function(){
    let names = ["Juan","PedRo","Héctor"];

    let proxy = new Proxy(names,{
        get: function(target, property){
            return property === 'length' ? 
                target.length :
                target[property].toUpperCase();
        },
        set: (target, property, value)=>{
            if(typeof(value) ==='string'){
                target.push(value);
            }
        }
    });

    proxy[5] = "Camila";
    for(let i = 0; i < proxy.length; i++){
       console.log(proxy[i])
    }

    let proxyT =
         new Proxy(document.getElementById("txt"), {
             get: (target, property)=>{
                if(property === "content")
                    return target.value;
                
                return target[property];
             },
             set: (target, property, value)=>{
                if(property === "value")
                  target[property] = value.toUpperCase();
            
            }
         })
    console.log(proxyT.content);

    proxyT.value ="pepito";
    proxyT.id = "soyalgo";
})();