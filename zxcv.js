const arr=[{ name:"make dinner",
duedate:"2022-12-10"},{name:"wash cloths",
duedate:"2022-11-10"}];
render();
function render(){
    let todolisthtml="";
    arr.forEach((abcd,index)=>{
        const { name,duedate}=abcd 
        const html=`
        <div>${name}</div>
        <div>${duedate}</div>
        <button class="del-but js-del">
        delete</button>`;
        todolisthtml+=html;
    })
    document.querySelector(".perform").innerHTML=todolisthtml;
    document.querySelectorAll('.js-del')
        .forEach((deletebutton,index)=>{
            deletebutton.addEventListener('click',()=>{
                arr.splice(index,1);
                render();
            })
        })
};
document.querySelector('.js-todo')
    .addEventListener('click',()=>{
        addtodo();
    });
function addtodo(){
    const name=document.querySelector(".results");
    const valuee=name.value;
    const dateinput=document.querySelector(".js-duedate");
    const due=dateinput.value;
    arr.push({name:valuee,duedate:due});
    name.value="";
    render();
}
function enterbutton(event){
    if(event.key==='Enter'){
        addtodo();    
    }
}