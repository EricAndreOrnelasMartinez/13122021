const show = document.getElementById('show')
const form = document.getElementById('form')
const main = document.getElementById('main')
show.addEventListener('click', e =>{
    e.preventDefault()
    form.innerHTML = `<input type="password" name="pass" placeholder="digita la contraseña"> 
                      <input type="submit" value="Validar">`
})

form.addEventListener('submit', e =>{
    e.preventDefault()
    let formdata = new FormData(form)
    fetch('./PHP/getM.php', {
        method: 'POST',
        body: formdata
    })
    .then(res => res.json())
    .then(data =>{
        main.innerHTML = data
    }).catch(error => {
        console.log(error)
    })
    }
)