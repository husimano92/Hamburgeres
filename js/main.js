//Keys of users, igy rendezem sorba a serverrol jovo adatokat
let keys=["id", "email","name"];

//Get data from server
function getServerData(url) {// agetServerData var egy urlt ahonnan az adatokat lekeri
    let fetchOptions = {
        method: "GET",//lekerem az adatot a serverrol
        mode: "cors",// h tobbfele domain kozott is mukodjon
        cache: "no-cache"//nem menti az adatokat
    };
    return fetch(url, fetchOptions).then(
        response => response.json(),//itt jasonnel ter vissza, egy json parseolt adathalmaz lesz, ezert erre a thenre is megtudok hivni egy masik thent.
        err => console.error(err)
    );
}
function startGetUsers() {//kattintasra le fog futni egy fv
    getServerData("http://localhost:3000/users").then(
        data => fillDataTable(data,"userTable")
    );
}
document.querySelector("#getDataBtn").addEventListener("click", startGetUsers);

//Fill table with server data
function fillDataTable(data,tableID){
    let table = document.querySelector(`#${tableID}`);//~jel+alt
    if (!table){//hibakezeles!!, ha nincs tablazat
        console.error(`Table "${tableID}"is not found`);
    return;
}

//Add new user to table
let tBody= table.querySelector("tbody");
tBody.innerHTML='';//kiuritjuk a tablazatot h mindig frissen legyenek benne az adatok
let newRow= newUserRow();
tBody.appendChild(newRow);

for (let row of data){
   let tr= createAnyElement("tr");//nem adok meg attributomokat, mivel nincsenek attributomok, a ciklus egyszer sem fog lefutni
   for(let k of keys){ //van egy belso cilkusom ami bejarja az egyes objektumokat, vegig megyek kulcs szerint rown es ott letrehozom a tdket, a tablazat cellakat
    let td=createAnyElement("td");
    let input = createAnyElement("input",{
        class: "form-control",
        value: row[k],
        name: k
    });
    if(k=="id"){//igy az id fix lesz nem lehet arni h a felhasznalok ne szurjak el
       input.setAttribute("readonly",true);
        
    }
    td.appendChild(input);
    tr.appendChild(td);
   }
   
   let btnGroup = createBtnGroup();
   tr.appendChild(btnGroup);
   tBody.appendChild(tr);
}
}

//Ezzel tudok barmilyen html elemet gyartani
function createAnyElement(name,attributes){
    let element= document.createElement(name);
    for(let k in attributes){//bejarom az attributumokat
        element.setAttribute(k,attributes[k]);
    }
    return element;
}

function createBtnGroup(){
    let group =createAnyElement("div", {class:"btn btn-group"});
    let infoBtn= createAnyElement("button", {class:"btn btn-info", onclick: "setRow(this)"});
    infoBtn.innerHTML= '<i class="fa fa-refresh" aria-hidden="true"></i>';
    let delBtn= createAnyElement("button", {class:"btn btn-danger",onclick: "delRow(this)"});//ezeket a gombokat kesobb hozzaadom a goruphoz es kesobb visszaadom a groupot
    delBtn.innerHTML= '<i class="fa fa-trash-o" aria-hidden="true"></i>';

    group.appendChild(infoBtn);
    group.appendChild(delBtn);

    let td=createAnyElement("td");
    td.appendChild(group);

    return td;
}

function delRow(btn){
    let tr=btn.parentElement.parentElement.parentElement;//btn.parentElement=btn-group;;;btn.parentElement.parentElement=td;;;btn.parentElement.parentElement.parentElement=tr
    let id= tr.querySelector("td:first-child").innerHTML;//az id megkeresese, igy mar tudom h melyik adatot tudom torolni az adatbazisbol, megvan az adat egyedi azonositoja
    let fetchOptions={
        method: "DELETE",
        mode: "cors",
        cache: "no-cache"
    };
    fetch(`http://localhost:3000/users/${id}`, fetchOptions).then(
        resp=> resp.json(),
        err=> console.error(err)
    ).then(
        //itt kapom meg a szerverrol az adatot, de frissitenem kell a tablazatot, szinkronban kell lenni az adatbazissal ezert a getes userses fvt kell lefutattani
        data=>{
            startGetUsers();
        }
    
    );//fetchOptionssal tudom neki megomdani h delete lesz e
}

//Creat new user

function newUserRow(row){//row=kap egy adatsort es azzal fog dolgozni, vegig megy az adat soron
    let tr= createAnyElement("tr");
    for(let k of keys){
        let td= createAnyElement("td");
        let input=createAnyElement("input",{
            class:"form-control",//a bs megformazza
            name: k
        });
        td.appendChild(input);
        tr.appendChild(td);
    }
    let newBtn= createAnyElement("button",{
        class: "btn btn-success",
        onclick: "createUser(this)"
    });
    newBtn.innerHTML='<i class="fa fa-plus-circle" aria-hidden="true"></i>';
    let td=createAnyElement("td");
    td.appendChild(newBtn);
    tr.appendChild(td);
    return tr;
 
}

function createUser(btn){//ha rakattintanak a gombra akk a tr osszes inputjat meg kell keresni, ki kell olvasni az adatokat es az input nevevel ellatva kell beloluk kesziteni kulcs ertek parokkal  egy objektumot es aztan ezt az objektumot elkuldeni a szervernek h hozza letre az uj usert
    let tr=btn.parentElement.parentElement;
    let data=getRowData(tr);
    delete data.id;//az idt kivettem neh veletlenul elkuldje, mert az idt akkor fogja megkapni amikor az uj letrejon. A jason server figyeli h hanyas idnel jarunk es egyel tobbet ad hozza automatikusan
    let fetchOptions={
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers:{
            'Content-type': 'application/json' //a tartalom tipusa amit kuldok, igy a masik oldalon a fogado fel tudni fogja h neki parseolnia kell az adatokat
        },
        body: JSON.stringify(data) // apostnal tudok kuldeni adatot es az a bodyban megy, stringge alakitom a data objektumot mert azt akarom elkuldeni
    };
   fetch(`http://localhost:3000/users`,fetchOptions).then(// a keres a fetchoptions alapjan menjen
        resp => resp.json(),//kapok egy valaszt es azt feldolgozom olyan formaban, json valaszt kapok
        err => console.error(err)
           ).then(//mivel visszaterek a jasonnal arra is meghivok egy thent.
                data => startGetUsers()  //megkapom az adatot amit megkapok a szerverrol
           );
}
function getRowData(tr){
    let inputs= tr.querySelectorAll("input.form-control");
    let data={};
    for (let i=0;i<inputs.length;i++){
        data[inputs[i].name]=inputs[i].value;
    }
    return data;
}
//set data
function setRow(btn){
    let tr=btn.parentElement.parentElement.parentElement;
    let data= getRowData(tr);//nincs id azt en ltiltottam elozoleg
    let fetchOptions={ //itt kuldjuk az adatokat a servernek
        method:"PUT", //innen tudja h adatot akarunk frissiteni
        mode: "cors",
        cache: "no-cache",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    }
   fetch(`http://localhost:3000/users/${data.id}`,fetchOptions).then(
       resp=> resp.json(),
       err => console.error(err)
   ).then(
       data=>startGetUsers()
   );
}