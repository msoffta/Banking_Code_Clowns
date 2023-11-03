let form = document.querySelector('form')
let inputs = document.querySelectorAll('form input')
let name = document.querySelector('#name')
let surname = document.querySelector('#surname')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
const bus = "http://localhost:8080"

let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    age: /^([1-9][0-9]?|100|0)$/i,
    about: /[A-Za-z\s]+/g,
    password: /^\d{6,16}$/g,
}

inputs.forEach(input => {
    input.oninput = () => {
        let val = input.value

        if (patterns[input.name].test(val)) {
            input.classList.add('green');
            input.classList.remove('red');
        } else if (!patterns[input.name].test(val) || val.lenght === 0) {
            input.classList.remove('green');
            input.classList.add('red');
        }

    }
}
)

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {
        name: name.value,
        email: email.value,
        surname: surname.value,
        password: password.value
    }

    if (name.classList.contains('red') || email.classList.contains('red') || surname.classList.contains('red') || password.classList.contains('red')) {
       
    } else {
        fetch(bus + "/users", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })

        location.assign('/pages/sigin/index.html')
    }


}









/* inpts.forEach(input => {
    input.oninput = () => {
        let val = input.value;

        if (patterns[input.name].test(val)) {
            input.classList.add('green');
            input.classList.remove('red');
            button.classList.add('bg-green')
            button.classList.remove('bg-red')

            
        } else {
            
            input.classList.add('red');
            input.classList.remove('green');
            button.classList.remove('bg-green')
            button.classList.add('bg-red')

        }

     };
}); */