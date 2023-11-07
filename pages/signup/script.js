import { getData, postData } from '../../modules/helpers';
let signupForm = document.forms.signup

signupForm.onsubmit = function (e) {
    e.preventDefault();
    let data = new FormData(signupForm);
    let user = {
        name: data.get("name"),
        surname: data.get("surname"),
        email: data.get("email"),
        password: data.get("password")
    }


    getData("/users?email=" + user.email)
        .then(res => {
            if (res.status !== 200 && res.status !== 201) return
            if (res.data.length > 0) {
                alert('Account already has been taken')
                return
            }
            postData('/users', user)
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        alert('Account created')
                        location.assign('/pages/signin/')
                    }
                })
        })

}
