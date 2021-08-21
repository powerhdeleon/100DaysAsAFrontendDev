function init(){
    let divParent = document.getElementById("div2");
    let divSon = document.getElementById("square2");

    divSon.style.position = "relative";
    divSon.style.left = 
        (divParent.offsetWidth / 2) -
        (divSon.offsetWidth /2) +"px";
    divSon.style.top = (divParent.offsetHeight / 2) - 
        (divSon.offsetHeight /2) + "px";
}