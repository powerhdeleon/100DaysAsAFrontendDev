

const memoization = (fn) =>{

    let results = {};

    return (arg) =>{

        if(!results[arg]){

            console.log(`resultado ${arg} no guardado`); 
            results[arg] = fn(arg);
        }
        return results[arg];
    }

}

const mul2 = memoization(a => a*2);

const request = memoization(async  id=>{

    console.log("se ejecuto");

    let res = await fetch("https://jsonplaceholder.typicode.com/todos/"+id)
    let json = await res.json();

    return json;
});


request(1).then(r=>console.log(r));
request(1).then(r=>console.log(r));
request(1).then(r=>console.log(r));
request(1).then(r=>console.log(r));
request(1).then(r=>console.log(r));
request(1).then(r=>console.log(r));
request(1).then(r=>console.log(r));