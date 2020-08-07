function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price,amountNumber);
}

function showSumPrice(price=1000, amountNumber=1) {
    amountNumber= amountNumber || 0;
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 termeket vasarolhat");
    }
    else if (amountNumber < 1) {
        alert("Minimum 1 termeket vasarolhat");
    }
    else {
        let amount = amountNumber * price;
        /* alert("Fizetendo:" + amount + "Ft")*/
        showAmount.innerHTML = amount;
    }

}
function hider() {
    document.body.innerHTML = "";
}
/*hider();igy hivom meg az eljarast*/

function adder(x, y) {
    return x + y;
}
/*adder(2,5);igy hivom meg a fuggvenyt*/

//help
let helpText= document.createElement("small"); //letrehoz egy uj html elemet a memoriaban
helpText.className="from-text text-muted";
helpText.innerHTML="Adja meg a felteteket";
//console.log(helpText);
let parent=document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

parent.removeChild(helpText);//igy veszem el a gyerek elemet

//Window events
let sendButton = document.querySelector("form .btn.btn-primary");
//egy felugro ablak lesz alerttel:
/*sendButton.onclick= function(){
   alert("Hello JS");
}*/

//ennel megtortenik az alert es a szamitas is, es nem irodik flul a beallitas ujat adok hoza
//-sendButton.addEventListener("click", function(){
    //-alert("Kabbe");
//-});

//szeretnem figyelni ah a dokumentumon scrolloznak vagy atmeretezik
window.addEventListener("resize",function(){
    console.log(this.innerHeight,this.innerWidth);//beslo magassag es belso szelesseg
});

//Urlap esemenyek

let orderForm= document.querySelector("#orderForm");//elmentem a valtozoba az oderform urlapot, tehat van egy valtozom ami erre az urlapra mutat
orderForm.addEventListener("submit", function(ev){
    ev.preventDefault;//ha rakattintanak a kuldes gombra akk, befrissul az oldal es a folyamatot ujra kellene csinalni, de ezt meg tudom elozni
//ne az alapertelmezett mukoedes menjen vegbe azt megelozom, majd en megmondom h mi tortenjen, a preventdefault erre valo
//console.log(this);
    let inputs=this.querySelectorAll("input");
    let values={};//objektum
    for(let i=0;i<inputs.length;i++){
        values[inputs[i].name]=inputs[i].value;
    }
    console.log(values);
});//elkuldes

//Parent element kezelese
let alertCloseButtons= document.querySelectorAll(".close[ data-dismiss='alert']");
let alertCloseEventHandlerFunction= function (ev){
    this.parentElement.style.display="none";
 }
for(let i=0;i<alertCloseButtons.lenght;i++){
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction);
}

//Select elem kitoltese

let toppings=[
    "Szalonna",
    "Hagyma",
    "Tukortojas",
    "Sajt",
    "Uborka",
    "Paradicsom"
];
let toppingSelect= document.querySelector("#topInput");//#id alapjan valo kivalasztas
let index=0;
while (index <toppings.length) {
    let option=document.createElement("option");// a dokument createlement metodusaval foglalkozom es azzal letrehozok egy uj optipnt.Ki lehessen valasztani a feltetet
    option.value=index; //beallitom az indexet
    option.innerHTML=toppings[index];//beallitom a tartalmat
    toppingSelect.appendChild(option);//hozzaadom a selecthez
    index++;
}