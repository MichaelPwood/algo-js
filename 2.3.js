function boucleWhile(){
    let departUserWhile = 1;
    let  finUserWhile = 100;
    let i = departUserWhile;
    
    let msg = "";
    while(i<=finUserWhile){
        msg+="boucle N°"+i+"<br>";
        i++
        
    }

    document.getElementById("reponseboucleWhile").innerHTML = msg;
    
    }