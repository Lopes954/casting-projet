let tbody = document.querySelector('tbody');

fetch('https://catfact.ninja/breeds?limit=10')
.then(reponse => reponse.json())
.then(reponse => {

            reponse.data.map(el => {
                let tr = document.createElement('tr');
                tbody.appendChild(tr)
                let td = document.createElement('td');
                td.setAttribute('class','race-tableau');
                td.textContent = el.breed;
                tr.appendChild(td)
            })
})