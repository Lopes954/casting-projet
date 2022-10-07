let ac = document.querySelector('.result-bloc-anecdote');
let races = document.querySelector('.result-bloc-race');
let favoris = document.querySelector('.result-bloc-favoris');
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const  ul =document.querySelector('nav ul ');
let validate = false ;
let dark = document.querySelector('header button');

console.log(dark);

burger.addEventListener('click',() => {
         
                if(validate === false){
                    validate = true
                    nav.style.display = "flex";
                    dark.style.display ='block'
                    ul.appendChild(dark)
                        
                } else if(validate === true){

                    nav.style.display ="none";
                    dark.style.display = 'none'

                    validate = false
                }
})
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
