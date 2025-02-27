/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

const emailEl = document.querySelector(".randomEmail")

let email = []

fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < emailEl.length; i++) {
            const element = emailEl[i];
        }
        console.log(data);
    })
    .catch (error => {
        //
        console.log(error);
    })