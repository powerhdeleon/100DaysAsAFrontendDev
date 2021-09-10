
let fn = function(){
    console.log("hola soy una función");
}

let fn2 = function(f){
    console.log("se hace algo");
    f();
    console.log("al final se hace esto");
} 

// fn2(fn);
let a = 1;
let fn3 = f => {
    console.log("se hace algo "+a);
    f();
    console.log("al final se hace esto");
}

fn3(fn);

// la parte de arreglos
let numbers = [3,4,1,11,7,60];

// filter
let numbersFilter = numbers.filter(e => e > 10);
console.log(numbersFilter);

// map
let numbersMap = numbers.map(e => e*2);
console.log(numbersMap);

// reduce
let resultReduce = numbers.reduce((ac, e)=> ac+e, 0);
console.log(resultReduce);

// filter Evil
Array.prototype.filterEvil = function(f){
    let newArray= [];

    for(let i=0; i<this.length; i++){
        if(f(this[i]))
            newArray.push(this[i])
    }

    return newArray;
}
let numbers2Filter = numbers.filterEvil(e => e > 10);
console.log(numbers2Filter);

// map Evil
Array.prototype.mapEvil = function(f){
    let newArray= [];

    for(let i=0; i<this.length; i++){
        let element = f(this[i]);
        newArray.push(element);
    }

    return newArray;
}
let numbers2Map = numbers.mapEvil(e => e*2);
console.log(numbers2Map);

// reduce Evil
Array.prototype.reduceEvil = function(f, init){
    let result = init ? init : 0;

    for(let i=0; i<this.length; i++){
        result = f(result, this[i]);
    }

    return result;    
}
let result2Reduce = numbers.reduceEvil((ac, e)=> ac+e, 0);
console.log(result2Reduce);

console.log("colección original"); 
console.log(numbers);
