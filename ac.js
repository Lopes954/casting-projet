const btnAc = document.querySelector('.btn-annecdote');
const textAc = document.querySelector('.text-annecdote');
const fullAc =document.querySelector('.fullAc');
const setAc = document.querySelector('.setAc');
const  acColumn =document.querySelector('.facts-column')





btnAc.addEventListener('click',() =>{

    fetch("https://catfact.ninja/fact?max_length=140")
    .then(response => response.json())
    .then(response => {
        textAc.textContent = response.fact
    })
})







const setfullAc = (res) =>{

fullAc.addEventListener('click',() => {
        
        setAc.setAttribute('class','Ac')

        res.data.forEach(facts => {
            let div =document.createElement('div')
            div.setAttribute('class','divm')
            setAc.appendChild(div)
            let h3 = document.createElement('h3')
            h3.textContent ="Acnedotes"
            div.appendChild(h3)
             let p = document.createElement('p');
             p.textContent =facts.fact;
             div.appendChild(p)
        });
        
    })

acColumn.addEventListener('click' ,()=>{


            setAc.setAttribute('class','Ac')
            res.data.forEach(facts => {
                let div =document.createElement('div')
                let divs = document.querySelectorAll('.divm');
                divs.forEach(el =>{
                el.setAttribute('class','divm')
                el.style.width ="100%";
                })
                // setAc.appendChild(div)
                let h3 = document.createElement('h3')
                let h3s = document.querySelectorAll('h3');
                h3s.forEach(el =>{
                el.textContent ="Acnedotes"
                })
                // divs.appendChild(h3)
                 let p = document.createElement('p');
                 let ps =document.querySelectorAll('p')
                 ps.forEach(el =>{
        
                 el.textContent =facts.fact;
        
                 })
                //  divs.appendChild(ps)
            });

    
    
})
     


}



fetch("https://catfact.ninja/facts?max_length=140")
.then(response => response.json())
.then(response => {

    setfullAc(response)
})


 