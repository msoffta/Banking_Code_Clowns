
let email = document.querySelector(".email")
let name = document.querySelector(".name")
let surname = document.querySelector(".surname")
let password = document.querySelector(".password")
let next = document.querySelector(".next")
let inputs =  document.querySelector("input")


let regex = {
    
        name: /^[a-z ,.'-]+$/i,
        surname: /^[a-z ,.'-]+$/i,
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
        password: /^\d{6,16}$/g,
    }


const bas = " http://localhost:8080" + "/dannie"
fetch(bas)
.then(res => res.json())

 next.onclick = () => {
    let student = {
    name : name.value ,
    surname: surname.value,
    email: email.value,
    password: password.value,
  }
  fetch(bas , {
    method: "post",
    body: JSON.stringify(student),
    headers  :{
      "Content-type" : "application/json"
    }
  })
  



}




import axios from 'axios'
let signupForm = document.forms.signup
const baseUrl = "http://localhost:8080"


signupForm.onsubmit = function (e) {
    e.preventDefault();
    let data = new FormData(signupForm);
    let user = {
        name: data.get("name"),
        surname: data.get("surname"),
        email: data.get("email"),
        password: data.get("password")
    }


    axios.get(baseUrl + "/users?email=" + user.email)
        .then(res => {
            if (res.status !== 200 && res.status !== 201) return
            if (res.data.length > 0) {
                alert('Account already has been taken')
                return
            }
            axios.post(baseUrl + '/users', user)
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        alert('Account created')
                        location.assign('/pages/signin/')
                    }
                })
        })

}

