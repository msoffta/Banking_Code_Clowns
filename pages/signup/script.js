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
