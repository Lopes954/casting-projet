const btnAc = document.querySelector('.btn-annecdote');
const textAc = document.querySelector('.text-annecdote');


btnAc.addEventListener('click',() =>{

    fetch("https://catfact.ninja/fact?max_length=140")
    .then(response => response.json())
    .then(response => {
        textAc.textContent = response.fact
    })
})






 