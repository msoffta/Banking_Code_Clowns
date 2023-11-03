let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')
let inputs = document.querySelectorAll('form input')

const bus = "http://localhost:8080"





function matches(arr) {

    form.onsubmit = (e) => {
        e.preventDefault()
        
        arr.filter(item => {
            if (item.email === email.value && item.password === password.value) {

                console.log("avaz");
                location.assign('/index.html')

                localStorage.setItem('user', JSON.stringify(item))
                
            }
        })

    }
}

fetch(bus + "/users")
    .then((res) => res.json())
    .then((res) => matches(res))