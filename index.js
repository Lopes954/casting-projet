
fetch('https://catfact.ninja/breeds?limit=10')
.then(reponse => reponse.json())
.then(reponse => {


            reponse.data.map(el => {

                console.log(el.coat);
            })
})