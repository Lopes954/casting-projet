const btnTtoggle = document.querySelector('.dark-toggle');


  btnTtoggle.addEventListener('click', () => {
    const body = document.body;

    if(body.classList.contains('dark')){
      body.classList.add('light')
      body.classList.remove('dark')
      btnTtoggle.innerHTML = 'Go Dark'

    } else if (body.classList.contains('light')){
      body.classList.add('dark')
      body.classList.remove('light')
      btnTtoggle.innerHTML = 'Go Light'

    }
})