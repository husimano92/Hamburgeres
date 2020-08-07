console.log("Hello, this is a console message");
let price1 = 5;
let price2=6;
let total =price1+price2;/*csak a bongeszobe a consoloon beirom a parancsokat ha meg akarom tudni az ertek csak a valtozo nevet irom be pl total es ennyi*/
let name;
const a=12; /*ha definialom akk utanna nem lehet megvaltoztatni az erteket, mint a javaban a final*/
typeof a; /*lekerdezem a tipusat a valtozonak*/
/*.->le tudom hivni h megtudom nezni h mit tudok vele csinalni mint a sugo; username + " Kroly"*/
/*Number(userAge) konverzio*/
let amount=15.5896544411;
amount.toFixed(2);/*az eredmeny 15.58 lesz 2 tizedesig ment es stringge alakitotta */
amount.toPrecision(5);/*az eredmny 15.289 lesz mert az egesz szamra nezi */

document.querySelector("input[name='amount-input']");
let amountInput= document.querySelector("input[name='amount-input']");
/*amountInput.value;a consolom igy tudom lekerdezni az ereteket de itt nem lepek ki kitoltott mezobol benne van az ertek, a 3as*/
let price =1200;
let amount52 = parseInt(price)*amountInput;
