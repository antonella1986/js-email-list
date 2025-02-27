/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

const emailEl = document.querySelector(".randomEmail")
const btnEl = document.getElementById("btn")

function getEmails() {
    for (let i = 0; i < 10; i++) {
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => response.json())
            .then(data => {
                console.log(data.response);
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

btnEl.addEventListener("click", function () {
    emailEl.innerHTML = ""
    getEmails()
})
