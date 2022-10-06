let tbody = document.querySelector('tbody');
let petSelect = document.querySelector('select');
let input = document.querySelector('#name');
let imageDog = document.querySelector('.image-dog');
let h2 = document.querySelector('.h2')
let coat = document.querySelector('.coat')
let country = document.querySelector('.country')
let origin = document.querySelector('.origin')
let pattern = document.querySelector('.pattern')
let darkMode = document.querySelector('.dark-mode');
let verif = false;

// function dark-mode
darkMode.addEventListener('click' ,  () =>{
    document.body.classList.toggle('dark-mode' ,verif)
    if(verif === true){
        darkMode.textContent('dark-mode')

    } else{
        darkMode.textContent('white-mode')
    }
});



function getSelectionBreed(i){

    petSelect.options;
    petSelect.selectedIndex;

return  petSelect.options[petSelect.selectedIndex].value   

}



// Méthode fetch me permet de récupéré la data

fetch('https://catfact.ninja/breeds?limit=10')

// Permet de renvoyer une réponse en JSON
.then(reponse => reponse.json())
.then(reponse => {

   


            reponse.data.forEach(el => {
                let option = document.createElement('option');
                            option.setAttribute('value',el.country)
                            option.textContent = el.country;
                            petSelect.appendChild(option);
                            let tr = document.createElement('tr');
                            tbody.appendChild(tr)
                            let td = document.createElement('td');
                            td.setAttribute('class','race-tableau');
                            td.textContent = el.breed;
                            tr.appendChild(td)


                           console.log(reponse.data);


                        
                    td.addEventListener('click', () => {
                            //enlever tout les couleurs 
                        let data = document.querySelectorAll('tbody tr td ');
                        data.forEach(el =>{

                            el.classList.remove('toogle')
                        })


                        //ensuite les ajouter
                        td.classList.add('toogle');

                            

                            h2.textContent = "Breed: " + el.breed;
                            coat.textContent = "Coat: " +  el.coat
                            country.textContent="Country: " + el.country;
                            origin.textContent = "Origin : " + el.origin;
                            pattern.textContent ="Pattern : " + el.pattern;
                    })

            })


            
            petSelect.addEventListener('change',(event) => {

                // tr.remove()
                // td.remove()

                console.log(event.target.value);

              const y =  reponse.data.filter(el => el.country == event.target.value)


              console.log(y);


            
            })


                



           
})

