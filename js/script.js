//email
let btnEmail = document.getElementById("btn-email");
let userEmail = document.getElementById("email-input");
let answer = document.getElementById("answer-email");
let arrEmail = ['Carmineilmago@gmail.com', 'pistacchissimo@gmail.com', 'quandocieralvi@altervista.com', 'bergogliosventrapapere@gmail.com', 'gemelloMalvagio@gmail.com', 'NomeCognome@gmail.com']
let arrUserEmail = [];
let isEmail;

//dadi
let btnDadi = document.getElementById("btn-dadi");
let userDadi = document.getElementById("dado-num");
let pcResoult = document.getElementById("pc-resoult");
let userResoult = document.getElementById("user-resoult");
let general = document.getElementById("general")

//Dadi - pallini
//pc
let p1 = document.getElementById("pallino-1");
let p2 = document.getElementById("pallino-2");
let p3 = document.getElementById("pallino-3");
let pC = document.getElementById("pallino-c");
let p4 = document.getElementById("pallino-4");
let p5 = document.getElementById("pallino-5");
let p6 = document.getElementById("pallino-6");
//user
let up1 = document.getElementById("u-pallino-1");
let up2 = document.getElementById("u-pallino-2");
let up3 = document.getElementById("u-pallino-3");
let upC = document.getElementById("u-pallino-c");
let up4 = document.getElementById("u-pallino-4");
let up5 = document.getElementById("u-pallino-5");
let up6 = document.getElementById("u-pallino-6");
//Dadi - pallini

btnEmail.addEventListener('click', function(){
    arrUserEmail.push(userEmail.value);
    isEmail = false

    for(let i = 0; i < arrEmail.length; i++){

        
        if(userEmail.value == arrEmail[i]){
            isEmail=true
            console.log(isEmail)
            
        }

    }

    if (isEmail == true){ 

    answer.innerText = "ok, abbiamo i tuoi dati, stiamo venendo a prenderti!"

    }else if(isEmail == false){

        if(arrUserEmail.length > 3 && arrUserEmail[arrUserEmail.length-1] == arrUserEmail[arrUserEmail.length-2] ){

            answer.innerText="oh ma sei di coccio!!"
            
        }else if(arrUserEmail.length > 2 && arrUserEmail[arrUserEmail.length-1] == arrUserEmail[arrUserEmail.length-2]  ){
            
            answer.innerText="ti ho detto che non ci sei, sveglia!"
        
        }else{
            answer.innerText="scusi, ma chi ti conosce?"
        }
        
        if(arrUserEmail.length > 2 && arrUserEmail[arrUserEmail.length-1] != arrUserEmail[arrUserEmail.length-2]){
            arrUserEmail = [] 
        }
    }
        
});
    

    //console.log(arrUserEmail)

btnDadi.addEventListener('click', function(){
    let pcRandom = Math.floor(Math.random() * 6 + 1 );
    let userRandom = Math.floor(Math.random() * 6 + 1 );



    if(userDadi.value != 0){
        userRandom = userDadi.value
        pcRandom = parseInt(userRandom) + 1;
        general.innerText = "Ma secondo te ti lascio barare?! HAI PERSO!!!!"

    }else{

        
    if( userRandom > pcRandom){
        
        general.innerText = "Vabè la solita fortuna, hai vinto"
    } else if ( userRandom < pcRandom){
        
        general.innerText = "eccalla, manco coi dadi sei bono! hai perso."
    }else{
        
        general.innerText = "hai pareggiato, ma il banco vince sempre"
    }

   
    }
     //dadi-pallini-user
     if(userRandom == 1){
        up1.style.opacity="0";
        up2.style.opacity="0";
        up3.style.opacity="0";
        upC.style.opacity="1";
        up4.style.opacity="0";
        up5.style.opacity="0";
        up6.style.opacity="0";
    }else if(userRandom == 2){
        up1.style.opacity="1";
        up2.style.opacity="0";
        up3.style.opacity="0";
        upC.style.opacity="0";
        up4.style.opacity="0";
        up5.style.opacity="0";
        up6.style.opacity="1";

    }else if(userRandom == 3){
        up1.style.opacity="1";
        up2.style.opacity="0";
        up3.style.opacity="0";
        upC.style.opacity="1";
        up4.style.opacity="0";
        up5.style.opacity="0";
        up6.style.opacity="1";

    }else if(userRandom == 4){
        up1.style.opacity="1";
        up2.style.opacity="1";
        up3.style.opacity="0";
        upC.style.opacity="0";
        up4.style.opacity="0";
        up5.style.opacity="1";
        up6.style.opacity="1";
    }else if(userRandom == 5){
        up1.style.opacity="1";
        up2.style.opacity="1";
        up3.style.opacity="0";
        upC.style.opacity="1";
        up4.style.opacity="0";
        up5.style.opacity="1";
        up6.style.opacity="1";

    }else if(userRandom == 6){
        up1.style.opacity="1";
        up2.style.opacity="1";
        up3.style.opacity="1";
        upC.style.opacity="0";
        up4.style.opacity="1";
        up5.style.opacity="1";
        up6.style.opacity="1";
    }

    //dadi-pallini-user
    if(pcRandom == 1){
        p1.style.opacity="0";
        p2.style.opacity="0";
        p3.style.opacity="0";
        pC.style.opacity="1";
        p4.style.opacity="0";
        p5.style.opacity="0";
        p6.style.opacity="0";
    }else if(pcRandom == 2){
        p1.style.opacity="1";
        p2.style.opacity="0";
        p3.style.opacity="0";
        pC.style.opacity="0";
        p4.style.opacity="0";
        p5.style.opacity="0";
        p6.style.opacity="1";

    }else if(pcRandom == 3){
        p1.style.opacity="1";
        p2.style.opacity="0";
        p3.style.opacity="0";
        pC.style.opacity="1";
        p4.style.opacity="0";
        p5.style.opacity="0";
        p6.style.opacity="1";

    }else if(pcRandom == 4){
        p1.style.opacity="1";
        p2.style.opacity="1";
        p3.style.opacity="0";
        pC.style.opacity="0";
        p4.style.opacity="0";
        p5.style.opacity="1";
        p6.style.opacity="1";
    }else if(pcRandom == 5){
        p1.style.opacity="1";
        p2.style.opacity="1";
        p3.style.opacity="0";
        pC.style.opacity="1";
        p4.style.opacity="0";
        p5.style.opacity="1";
        p6.style.opacity="1";

    }else if(pcRandom == 6){
        p1.style.opacity="1";
        p2.style.opacity="1";
        p3.style.opacity="1";
        pC.style.opacity="0";
        p4.style.opacity="1";
        p5.style.opacity="1";
        p6.style.opacity="1";
    }else if(pcRandom == 7){
        p1.style.opacity="1";
        p2.style.opacity="1";
        p3.style.opacity="1";
        pC.style.opacity="1";
        p4.style.opacity="1";
        p5.style.opacity="1";
        p6.style.opacity="1";
    }

    userResoult.innerText = `hai fatto ${userRandom}`;
    pcResoult.innerText = `il computer ha fatto ${pcRandom}`
});