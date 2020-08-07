//Global scope
var globalName="Joe";

function something(){
    var globalName="Jack";
    console.log(globalName);
}
something();
console.log(globalName);

//Tombok

let cars = ["volkswagen", "Opel", "Audi"];
let user= [1, "Joe",33, true, null];//dinamikus, nem kell megmondanom h hany eleme  lesz
//user[3]->true, user[1]->Joe

//Tobb dimenzios tomb->Array.isArray(use2)->truet kapunk a consolon
let use2=[
    [1,"Joe",23,true],
    [2,"Maris",2, false],
    [4,"Karcsi",45, true]
];
cars.push("Trabi");
cars.pop();//eltavolitja a tomb uccso elemet es azt adja vissza
cars.unshift("Opel");//a tomb elejere teszi be az elemet
cars.shift();//elveszi a tomb legelso elemet es szemet lesz belole elveszlik az adat ha nem tarolom le
cars.slice(0,1);//csak az 1. elemet adja vissza, de ez nem modositja az eredeti tombot, ujat ad vissza
cars.splice(0,1);//igy az eredeti tombol is kiveszi az elet
cars.splice(0,0,"Volkswagen");//fent kivette az elemet de igy vissza tudom tenni bele
cars.splice(1,0, "Peugeot","BMW","Chevrolet");//az 1es idextol kezdve betesszi a beirt elemekt igy 3 elemmel tobb lesz a tombben
cars.join(",");// a tombot igy tudom egyesiteni egy vesszo karakterrel elvalsztva, egy stringet keszit belole

let varOne=10, varTwo=20;
function changeValues(one, two){
        one=100;
        two=200;
        console.log("From function", one, two);//100,200
}
changeValues(varOne,varTwo);
console.log(varOne,varTwo);//10,20->az eredeti erteket nem valtoztattam

function callByeRef(arr){
    arr[1]=200;
    console.log("From function",arr);
}
let fruits=["korte","avokado","alma"];
callByeRef(fruits);
console.log(fruits);//itt mar nem ertek alapjan kerul atadasra mint az alaptipusoknal, az arr nem a masolata lesz a fruits tombnek
//referencia szerinti masolas mert az index van atadva

for(let i=0;i<5;i++){
    console.log(i);
    continue;//a continue parancs utani resz mar nem hajtodik vegre igy visszaugrik a fejlechez ez ujraprobalkozik
    break;//ez rogton kilep a programbol
}

