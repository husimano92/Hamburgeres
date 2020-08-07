//Osszegzo algoritmus
let NumericArray=[1,3,4,5,6,7,8,9];

let osszeg= 0;
for (let i=0;i<NumericArray.length;i++){
   
   osszeg+=NumericArray[i];
}
console.log(osszeg);

//Szamlalas
let db=0;
for(let i=0;i<NumericArray.length;i++){
   // if(NumericArray[i]!=null){
    if(NumericArray[i] % 2 ==0){//paros szam
        db++;
    }
}
console.log(db);

//legnagyobb elem keresese

let legnagyobb=NumericArray[0];
for(let i=1;i<NumericArray.length;i++) {
    
    if(legnagyobb<NumericArray[i]){
        legnagyobb=NumericArray[i];
    }
}
console.log(legnagyobb);

//legkisebb elem keresese
let legkisebb=NumericArray[0];
for(let i=1;i<NumericArray.length;i++) {
    
    if(legkisebb>NumericArray[i]){
        legkisebb=NumericArray[i];
    }
}
console.log(legkisebb);

//az adott elem benne van e a listaban vagy nincsen
let elem=false;
for(let i=0;i<NumericArray.length && elem==false;i++) {
    
    if(NumericArray[i]==8){
        elem=true;
    }
    else{
        elem=false;
    }
}
console.log(elem);

let user={
            name:"Kiss Ramona",
            age:22,
            city:"Bp"
        };
let admin= new Object();
let customer={};
//user.name az elerese
Object.keys(user);//megadja h a user objektumban milyen kulxsok vannak
Object.values(user);//az ertekeket tudom lekerni
Object.entries(user);//mind 2t megkapom
Object.entries(user)[1];
Object.entries(user)[1][0];// az aget kapom vissza
Object.entries(user).length;//a neretet tudom lekerdezni

//Objektumokat igy jarunk be, de tombre is lehet hasznalni
for(let k in user){
    console.log("Key:", k, "name:",user[k]);
}
//user.name==user["name"] ez a 2 megeyezik
for(let car of cars){
    console.log(car);
}//itt az erteken megy keresztul a for ciklus
let str="Hello";
for (let char of str){
    console.log(char);// H e l l o->kiirja a karaktereket
}
for(let k of Object.keys(user)){//name, age,city
    console.log(k);
}
for(let k of Object.keys(user)){
    console.log(user[k]);//Pisti,33,Bp//console.log(k,user[k]);
}
for(let val of Object.values(user)){
    console.log(val);
}
for(let entry of Object.entries(user)){
    console.log(entry[0],entry[1]);
}
//user.sayHi();
let userketto = {
    name="John Doe",
    age:32,
    sayHi: function(){
        console.log("Hi");
    }
}
//console.log(user.sayHi());
let userketto = {
    name="John Doe",
    age:32,
    sayHi: function(){
        return "Hi";
    }
}
//user.name="Ivan"
//user.saiHi();->Ivan lesz
let userharom = {
    name="John Doe",
    age:32,
    sayHi: function(){
        return `Hi my name is ${this.name}`;//FN+fent az 1es elotti gomb
    }
}
//onclick selector megvaltoztasa
 let btn=document.querySelector('form button.btn-primary');//a fromban van egy gombom ami a btn-primary osztalyhoz tartozik.
//esemenykezelo, a this magat azt a cselekvest jelenti amikor az esement vegbe ment, pl kattintott a megrendeles gombra
 btn.onclick = function(){
     console.log(this);
 }
 //itt eltuntettuk a gombot
 btn.onclick = function(){
    console.log(this.style.display="none");
}

let usernegy={
    "id":"njfknjvjrfjkebjfef1154546546",
    index:0,
    isActive: true,
    balance:"$1.241.291",
    picture: "http://placeholder.it/32x32"
}
usernegy.minusBalance= function(amount){
    this.balance -= amount;
}
usernegy.balance=1241291;//szamkent adom meg a balanceot

usernegy.plusBalance = function(amount){
    this.balance += amount;
}

//usernegy.getBalance();
//igy hivom meg es igy adja ki:"$ 1141292"
user.getBalance= function(){
    return `$ ${this.balance}`;
}

//adder(5,8);
let adder= function(n1,n2){
    return n1+n2;
}
//vagy
let adder= (n1,n2)=>{
    return n1+n2;
}
//vagy
let adder= (n1,n2) => n1+n2;
//vagy greeter("Jancsi");
let greeter=name =>`Hello ${name}`;
