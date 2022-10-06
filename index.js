let tbody = document.querySelector('tbody');
let petSelect = document.querySelector('select');
let input = document.querySelector('#name');
let imageDog = document.querySelector('.image-dog');
let h2 = document.querySelector('.h2');
let coat = document.querySelector('.coat');
let country = document.querySelector('.country');
let origin = document.querySelector('.origin');
let pattern = document.querySelector('.pattern');
let tableBreed = [];
let tableCountry = [];
const tableData = [];
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


//ajouter country
const setCountry = (res) => {
  
  res.data.map(countries => {
    let option = document.createElement('option');
    option.setAttribute('value', countries.country);
    option.textContent = countries.country;
    petSelect.appendChild(option);
  })

  petSelect.addEventListener('change', (event) => {
    const filterData = res.data.filter(el => el.country == event.target.value)

    filterData.forEach(data => {
        
      h2.textContent = "Breed: " + data.breed;
      coat.textContent = "Coat: " + data.coat
      country.textContent = "Country: " + data.country+"_"+index;
      origin.textContent = "Origin : " + data.origin;
      pattern.textContent = "Pattern : " + data.pattern;
    })
  })
}

const setData = (el, breeds) => {
  let breed = breeds.data.find(breed => breed.breed === el.textContent)
  h2.textContent = "Breed: " + breed.breed;
  coat.textContent = "Coat: " + breed.coat
  country.textContent = "Country: " + breed.country;
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
      country.textContent = "Country: " + el.country;
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

  })

