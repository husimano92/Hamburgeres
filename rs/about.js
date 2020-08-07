/*<tr>
<td>1</td>
<td>Kiss</td>
<td>Janos</td>
<td>55</td>
<td>
    <div class="btn group">
        --.btn.group--
        <button class="btn-info btn">
            --button.btn-info.btn--
            <i class="fas fa-sync"></i>
            --ikon a fonts awesome oldalrol, a modositasos szoveg helyett--
        </button>
        <button class="btn btn-danger">
            --button.btn.btn.danger--
            <i class="far fa-trash-alt"></i>
            --a font awesome oldalrol a torles helyett--
        </button>

    </div>
</td>
</tr>*/

//Lemodelleztem itt h ez az adat jon egy tavoli geprol a szerverrol es mindig mas
let user = [
        { surname: "Choi ", firstname: " Seung Hyun", age: 35 },
        { surname: "Park", firstname: " Seung Hyun", age: 35 },
        { surname: "Dong", firstname: " Taeyang", age: 35 },
        { surname: "G", firstname: " Dragon", age: 35, },
        { surname: "D", firstname: " Lite", age: 35 },
        { surname: "Big", firstname: " Bang", age: 35 },
        { surname: "Black", firstname: " Pink", age: 35 },
        { surname: "I", firstname: " Kon", age: 35 },
        { surname: "Win", firstname: " Ner", age: 35 },
        { surname: "Chae", firstname: " Lin", age: 35 }
    ];
    
    
    let tableBody = document.querySelector("#userTable tbody");
    let createTD = (html, parent) => {
        let td = document.createElement("td");
        td.innerHTML = html;
        parent.appendChild(td);
    };
    
    let createButtonGroup = parent => {
        /*<div class="btn group">
            --.btn.group--
            <button class="btn-info btn">
                --button.btn-info.btn--
                <i class="fas fa-sync"></i>
                --ikon a fonts awesome oldalrol, a modositasos szoveg helyett--
            </button>
            <button class="btn btn-danger">
                --button.btn.btn.danger--
                <i class="far fa-trash-alt"></i>
                --a font awesome oldalrol a torles helyett--
            </button>
    
        </div>*/
        let group=document.createElement("div"); //div letrehozasa
        group.className="btn group"; //a divnek beallitom agomb osztalyt
    
        let btnInfo= document.createElement("button"); //keszitek egy info gombot
        btnInfo.className="btn-info btn";
        btnInfo.innerHTML= '<i class="fas fa-sync"></i>';//belso tartalmat hozok letre
    
        let btnDanger= document.createElement("button"); //keszitek egy info gombot
        btnDanger.className="btn btn-danger";
        btnDanger.innerHTML= '<i class="far fa-trash-alt"></i>';//belso tartalmat hozok letre
    
        group.appendChild(btnInfo);//es vegul hozzaadom a 2 gombot a grouphoz
        group.appendChild(btnDanger);
    
        let td = document.createElement("td");
        td.appendChild(group);
        parent.appendChild(td);
        
    }
    
    for (let k in user) {
        let tr = document.createElement("tr");
        createTD(parseInt(k) + 1, tr);
        for (let value of Object.values(user[k])) {
            createTD(value, tr);
        }
        createButtonGroup(tr);
        tableBody.appendChild(tr);
    };
    