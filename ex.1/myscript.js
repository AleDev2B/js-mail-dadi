// 1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// inserire lista email utenti registrati
var UserMailReg = ["frenzo@gmail.com", "pasquale@hotmail.it", "turuzzo@libero.it", "erpatata@gmail.com", "ermurena@hotmail.it", "aridateceerpuzzone@libero.it", "erpomata@libero.it", "cettolaqualunque@supereva.it", "desantisvastaso@libero.it" ]

console.log(UserMailReg);

 // aprire popup per richiedere email utente
var UserMailStart = prompt ("Gentile Frenzo, inserisci la tua email per accedere ai ns servizi")

console.log(UserMailStart);
  //  controllo se l'indirizzo è presente nella ns lista delle email attive (se si)

  for (var i = 0; i < UserMailReg.length; i++) {
    if (UserMailStart = UserMailReg) {
      alert("Premi ok per accedere ai nostri servizi");
    }
    else {
      var UserMailStart = prompt ("Gentile Frenzo, inserisci la tua email per accedere ai ns servizi")

    }
  }


  // // controllo indirizzo presente nella lista (se no)
  //   if (UserMailStart != UserMailReg[""] ) {

  //
  //     // se indirizzo non presente, facciamo riapparire popup con richiesta inserimento

  //
  //   }
