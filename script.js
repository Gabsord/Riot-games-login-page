//elements
const inputs = document.querySelectorAll('input')
const loginBtn = document.querySelector('.login__button')



// fucntions
const spanActivate = ({target}) => {
    const span = target.previousElementSibling
    span.classList.add('span-active')

}

const spanDisable = ({target}) =>{
    const span = target.previousElementSibling 
    if (target.value) {
        return 

    } else{
        span.classList.remove('span-active')
    }
    
}


const validateLogin = (event) =>{
    const [username, password] = inputs
    if (username.value && password.value.length >= 8) {
        loginBtn.removeAttribute('disabled')
    }
    else{
        loginBtn.setAttribute('disabled' , '')
    }


}


//events
inputs.forEach((input) => {
    input.addEventListener('focus', spanActivate)
})

inputs.forEach((input) =>{
    input.addEventListener('focusout', spanDisable)
})        

inputs.forEach((input) =>{
    input.addEventListener('input', validateLogin)
})
