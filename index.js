let email = document.getElementById('email')
let error = document.getElementsByClassName('error')
let button = document.getElementsByClassName('button')
let strong = document.querySelector('strong')
const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
const checkEmail = () =>{
    return regex.test(email.value)
}

const success = () =>{
    if(checkEmail()){
        document.location = `./success.html?email=${email.value}`
    }else{
        error[0].style.visibility = 'visible'
        email.classList.add('error-text')
        email.style.backgroundColor = 'hsla(4, 100%, 67%, .2)'
    }
}
const pageLoad = () =>{
    let params = new URL(window.location.href).searchParams
        strong.textContent = params.get('email')
        strong.style.display = 'inline'
}
const change = () =>{
    error[0].style.visibility = 'hidden'
    email.style.backgroundColor = 'white'
    email.classList.remove('error-text')
}
if(email){
email.addEventListener('click',change)
button[0].addEventListener('click', success)
}
