let tbody = document.querySelector('tbody');
let petSelect = document.querySelector('select');
let input = document.querySelector('#name');
let imageDog = document.querySelector('.image-dog');
let h2 = document.querySelector('.h2');
let coat = document.querySelector('.coat');
let pays = document.querySelector('.country');
let origin = document.querySelector('.origin');
let pattern = document.querySelector('.pattern');
let tableBreed = [];
let tableCountry = [];
const tableData = [];

const selectPelage = document.querySelector('.pelage');
const span = document.querySelector('#span')
// ameliorer les nom des var et des func ( el)
const setBreed = (res) => {
  res.data.map(breed => {
    let tr = document.createElement('tr');
    let td = document.createElement('td')
    tbody.appendChild(tr);
    tr.appendChild(td);
    td.textContent = breed.breed
    td.addEventListener('click', (event) => {
      //enlever tout les couleurs 
      let colors = document.querySelectorAll('tbody tr td ');
      colors.forEach(color => {
        color.classList.remove('toogle')
      })
      //ensuite les ajouter
      td.classList.add('toogle');
      // setdata
      setData(event.target, res);
    })
  })
}

const setCoats = (res) => {
  const tableCoats = [];
  res.data.forEach(el => {
    if (!tableCoats.find(coat => coat === el.coat)) {
      tableCoats.push(el.coat)
    }
  })
  tableCoats.forEach(el =>{
    let option = document.createElement('option');
    option.setAttribute('value', el);
    option.textContent = el;
    selectPelage.appendChild(option);
  })
  selectPelage.addEventListener('change',(event) =>{
    let getTr = document.querySelectorAll('tr');
    getTr.forEach(td=> td.remove());
    const filterCoat = res.data.filter(el => el.coat === event.target.value);
    filterCoat.forEach(data =>{
      let tr = document.createElement('tr');
      let td = document.createElement('td')
      tbody.appendChild(tr);
      tr.appendChild(td);
      td.textContent = data.breed;
        let countTd = document.querySelectorAll('td');
        span.textContent = countTd.length + "  " + "resultat";
      td.addEventListener('click', (event) => {
        //enlever tout les couleurs 
        let data = document.querySelectorAll('tbody tr td ');
        data.forEach(el => {
          el.classList.remove('toogle')
        })
        //ensuite les ajouter
        let breed = res.data.find(breed => breed.breed === event.target.textContent)
        // findBreed(res)
        td.classList.add('toogle');
        h2.textContent = "Breed: " + breed.breed;
        coat.textContent = "Coat: " + breed.coat
        pays.textContent = "Country: " + breed.country;
        origin.textContent = "Origin : " + breed.origin;
        pattern.textContent = "Pattern : " + breed.pattern;
      })
    })
  })



}
//ajouter country
const setCountry = (res) => {
  let countries = [];
  res.data.forEach(breed => {
    if (!countries.find(country => country === breed.country)) {
      countries.push(breed.country)
    }
  })
  countries.forEach(country => {
    let option = document.createElement('option');
    option.setAttribute('value', country);
    option.textContent = country;
    petSelect.appendChild(option);
  })
  petSelect.addEventListener('change', (event) => {
    let getTr = document.querySelectorAll('tr');
    getTr.forEach(td => td.remove())
    const filterData = res.data.filter(el => el.country == event.target.value)
    filterData.forEach(data => {
      let tr = document.createElement('tr');
      let td = document.createElement('td')
      tbody.appendChild(tr);
      tr.appendChild(td);
      td.textContent = data.breed;
      let countBreed = document.querySelectorAll('td');
      span.textContent = countBreed.length + "  " + "resultat";
      td.addEventListener('click', (event) => {
        //enlever tout les couleurs 
        let data = document.querySelectorAll('tbody tr td ');
        data.forEach(el => {
          el.classList.remove('toogle')
        })
        //ensuite les ajouter
        let breed = res.data.find(breed => breed.breed === event.target.textContent)
        // findBreed(res)
        td.classList.add('toogle');
        h2.textContent = "Breed: " + breed.breed;
        coat.textContent = "Coat: " + breed.coat
        pays.textContent = "Country: " + breed.country;
        origin.textContent = "Origin : " + breed.origin;
        pattern.textContent = "Pattern : " + breed.pattern;
      })
    })
  })
}

// const findBreed = (el) =>{
//   tbody.appendChild(tr);
//   tr.appendChild(td);
//    let breed = el.data.find(res => res.breed === event.target.textContent)
//    td.classList.add('toogle');
//    h2.textContent = "Breed: " + breed.breed;
//    coat.textContent = "Coat: " + breed.coat
//    pays.textContent = "Country: " +breed.country;
//    origin.textContent = "Origin : " + breed.origin;
//    pattern.textContent = "Pattern : " + breed.pattern;
// }

const setData = (el, breeds) => {
  let breed = breeds.data.find(breed => breed.breed === el.textContent)
  h2.textContent = "Breed: " + breed.breed;
  coat.textContent = "Coat: " + breed.coat
  pays.textContent = "Country: " + breed.country;
  origin.textContent = "Origin : " + breed.origin;
  pattern.textContent = "Pattern : " + breed.pattern;
}
const setTable = (response) => {
  response.data.map(el => {
    let option = document.createElement('option');
    option.setAttribute('value', el.country)
    option.textContent = el.country;
    petSelect.appendChild(option);
    let tr = document.createElement('tr');
    tbody.appendChild(tr)
    let td = document.createElement('td');
    td.setAttribute('class', 'race-tableau');
    td.textContent = el.breed;
    tr.appendChild(td)
    td.addEventListener('click', () => {
      //enlever tout les couleurs 
      let data = document.querySelectorAll('tbody tr td ');
      data.forEach(el => {
        el.classList.remove('toogle')
      })
      //ensuite les ajouter
      td.classList.add('toogle');
      h2.textContent = "Breed: " + el.breed;
      coat.textContent = "Coat: " + el.coat
      pays.textContent = "Country: " + el.country;
      origin.textContent = "Origin : " + el.origin;
      pattern.textContent = "Pattern : " + el.pattern;
    })
  })
}

const setSelect = (response) => {

  petSelect.addEventListener('change', (event) => {
    const y = response.data.filter(el => el.country == event.target.value)
  })
}

fetch('https://catfact.ninja/breeds?limit=10')
  .then(reponse => reponse.json())
  .then(reponse => {
    setBreed(reponse);
    // getCountry(reponse);
    setCountry(reponse)
    setCoats(reponse)

  })


