

//il computer genera il primo numero casuale tra 1 e 6
var FirstNum = Math.floor(Math.random() * 7)

// stampa il risulto a video
document.getElementById("demo1").innerHTML = "Il computer ha estratto il numero:" + FirstNum

// il computer genera un 2° numero casuale
var SecondNum = Math.ceil(Math.random() * 6)

// stampa il risulto a video
document.getElementById("demo2").innerHTML = "Tu hai estratto il numero:" + SecondNum

//  confronta tra il 1°ed il 2° numero il più alto viene visualizzato a video
if (FirstNum > SecondNum) {
  document.getElementById('winner').innerHTML = "Peccato, ha vinto il computer:" + FirstNum
}

else if (FirstNum < SecondNum) {
  document.getElementById('winner').innerHTML = "Complimenti, Hai Vinto!!!:" + SecondNum
}

else {
  document.getElementById('winner').innerHTML = "I numeri estratti sono identici, ritentate la fortuna"
}

// il numero più alto vince

// viene stampato un messaggio all'utente che ha vinto (a seconda che sia  il computer o l'utente)
