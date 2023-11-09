import axios from 'axios'
import { getData } from '../../modules/helpers';


const signin = document.forms.signin;





signin.onsubmit = (e) => {
    e.preventDefault();
    let data = new FormData(signin);
    let user = {
        email: data.get("email"),
        password: data.get("password"),
    };

    getData("/users?email=" + user.email)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            if (res.data.length === 0) {
                alert('user not found')
                return
            }

            if(res.data[0].password === user.password) {
                alert('welcome')
                localStorage.setItem('user' , JSON.stringify(res.data[0]))
                location.assign('/index.html')

            } else {
                alert('wrong password')
            }
        }
        
    })


};
