
const showData = (state) => ({
    showData: ()=>{
        console.log(state.data);
    }
})

const requestService = (state) => ({
    requestService: async ()=>{
        const response = await fetch(state.url);
        state.data = await response.json();
    }
})

const showInHtml = (state) => ({
    showInHtml: ()=>{
        state.htmlElement.innerHTML="";
        state.data.forEach(element=>{
            state.htmlElement.innerHTML += `
                <div>
                    <b>${element.title}</b>
                </div>
            `
        })
    }
});

const usersModel = (url, htmlElement) =>{
    let state ={
        data: null,
        url: url,
        htmlElement: htmlElement
    }

    return Object.assign(state,
         showData(state),
         requestService(state),
         showInHtml(state)
         )
}

let users = usersModel("https://jsonplaceholder.typicode.com/todos",here);
users.requestService().then(()=>{
    users.showData();
    users.showInHtml();
});