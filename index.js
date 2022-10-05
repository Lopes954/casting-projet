let tbody = document.querySelector('tbody');
let petSelect = document.querySelector('select');

console.log(petSelect);

function getSelectionBreed(i){

    petSelect.options;
    petSelect.selectedIndex;

return  petSelect.options[petSelect.selectedIndex].value   

}

fetch('https://catfact.ninja/breeds?limit=10')
.then(reponse => reponse.json())
.then(reponse => {

            reponse.data.map(el => {
                let option = document.createElement('option');
                option.setAttribute('value',el.breed)
                option.textContent = el.breed;
                petSelect.appendChild(option)
                let tr = document.createElement('tr');
                tbody.appendChild(tr)
                let td = document.createElement('td');
                td.setAttribute('class','race-tableau');
                td.textContent = el.breed;
                tr.appendChild(td)
            })
})