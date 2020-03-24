// 1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// inserire lista email utenti registrati
var UserMailReg = ["frenzo@gmail.com", "pasquale@hotmail.it", "turuzzo@libero.it", "erpatata@gmail.com", "ermurena@hotmail.it", "aridateceerpuzzone@libero.it", "erpomata@libero.it", "cettolaqualunque@supereva.it", "desantisvastaso@libero.it" ]

console.log(UserMailReg);

 // aprire popup per richiedere email utente
var UserMailStart = prompt ("Gentile Frenzo, inserisci la tua email per accedere ai ns servizi")

console.log(UserMailStart);
  //  controllo se l'indirizzo è presente nella ns lista delle email attive (se si)
  while (UserMailStart = UserMailReg.forEach(item, i)) {
    alert("Gentile Frenzo, il tuo indirizzo non risulta nei ns database, ti consigliamo pertanto di registrarti per aver accesso ai ns servizi.")
  }

// var UserMailStart = prompt ("Gentile Frenzo, inserisci la tua email per accedere ai ns servizi");

    // alert("Grazie" + "" + UserMailStart + "premi ok per accedere ai nostri servizi");

  // // controllo indirizzo presente nella lista (se no)
  //   if (UserMailStart != UserMailReg[""] ) {

  //
  //     // se indirizzo non presente, facciamo riapparire popup con richiesta inserimento

  //
  //   }
