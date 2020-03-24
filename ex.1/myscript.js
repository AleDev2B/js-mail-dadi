// 1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// inserire lista email utenti registrati
var UserMailReg = ["frenzo@gmail.com", "pasquale@hotmail.it", "turuzzo@libero.it", "erpatata@gmail.com", "ermurena@hotmail.it", "aridateceerpuzzone@libero.it", "erpomata@libero.it", "cettolaqualunque@supereva.it", "desantisvastaso@libero.it" ]

console.log(UserMailReg);

 // aprire popup per richiedere email utente
var UserMailStart = prompt ("Gentile Frenzo, inserisci la tua email per accedere ai ns servizi")

console.log(UserMailStart);

// dichiarazione variabile booleana check
check = false;

for (var i = 0; i < UserMailReg.length; i++) {
  if (UserMailStart === UserMailReg[i]) {
    check = true;
  }
}

if (check) {
  msg = "Accesso consentito"
} else {
  msg = "Accesso non consentito"
}

document.getElementById('mail-check').innerHTML = msg
