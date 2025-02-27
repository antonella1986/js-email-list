/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

const emailEl = document.querySelector(".randomEmail")
const btnEl = document.getElementById("btn")

function getEmails() {
    // gli faccio generare 10 email
    for (let i = 0; i < 10; i++) {
        // fetcho
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
            // invio la richiesta, che mi restituisce i dati JSON
            .then(response => response.json())
            // prendo i dati dal JSON e gli faccio eseguire le operazioni che mi servono
            .then(data => {
                console.log(data.response);
                // butto i dati generati nell'HTML sotto forma di lista
                const mail = data.response
                emailEl.innerHTML += `<li>${mail}</li>`
            })
            .catch (error => {
                //
                console.log(error);
            })
    }
}

getEmails()

// aggiungo il pulsante per generare altre 10 email
btnEl.addEventListener("click", function () {
    // gli faccio pulire la lista prima di crearne un'altra
    emailEl.innerHTML = ""
    // richiamo la funzione che mi permette di generare 10 email
    getEmails()
})
