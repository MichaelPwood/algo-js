function commentaireAge(){
    let anneeNaissanceUser = document.getElementById("commentaireAge").value;
    let ageUser = 2021 - anneeNaissanceUser;
    let msg = "";

    if(ageUser<18){
        msg = "Vous n'êtes pas encore majeur.";
    }
    else if(ageUser<50){
        msg = "Vous êtes majeur mais pas encore senior.";
    }
    else if(ageUser<65){
        msg = "Vous êtes senior mais pas encore retraité.";
    }
    else{
        msg = "Vous êtes retraité, profitez de votre temps libre.";
    }

    document.getElementById("reponsecommentaireAge").innerHTML = msg;
}