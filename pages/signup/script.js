let inps = document.querySelectorAll('input')
let form = document.querySelector('form')
let btn = document.querySelector('button')
let bas = "http://localhost:8080"
fetch(bas + '/users')
    .then((res) => res.json())
    .then((res) => console.log(res))
let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surename: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{5,})$/i
}
inps.forEach((ipn) => {
    ipn.onkeyup = () => {
        if (patterns[ipn.name].test(ipn.value)) {

            ipn.style.borderColor = 'blue'
            ipn.style.overflow = 'blue'
            ipn.parentElement.classList.remove('error-field')
        } else {
            ipn.parentElement.classList.add('error-field')
            ipn.style.borderColor = 'red'
            ipn.style.overflow = 'red'
        }
    }
})
form.onsubmit = (e) => {
    e.preventDefault();
    let error = false
    inps.forEach(ipn => {
        if (ipn.parentElement.classList.contains('error-field')) {
            error = true
        }
    })
    if (error) {
        alert('error')
    } else {
        submit()
    }
    inps.forEach(inp => {
        inp.innerHTML = ""
    })
}

function submit() {
    let user = {}
    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })
    fetch(bas + "/users", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.status === 200 || res.status === 201) {
            fetch(bas + "/users")
                .then((res) => res.json())
                
                location.assign('/pages/signin/')
        }

    })

}



