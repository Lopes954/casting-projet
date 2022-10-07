let ac = document.querySelector('.result-bloc-anecdote');
let races = document.querySelector('.result-bloc-race');
let favoris = document.querySelector('.result-bloc-favoris');


const setFavoris = (res) => {
    let tableCoats = [];
    res.data.filter(coats => tableCoats.push(coats.coat));
    let result = tableCoats.reduce((acc, i) => {
        if (!acc[i]) {
            acc[i] = 0
        }
        acc[i]++
        return acc
    })
    favoris.textContent = result
}

fetch('https://catfact.ninja/facts?limit=1&max_length=140')
    .then(response => response.json())
    .then(response => {
        ac.textContent = response.total;
    })

fetch(' https://catfact.ninja/breeds?Select=*')
    .then(response => response.json())
    .then(response => {

        races.textContent = response.total;

        setFavoris(response)
    })
