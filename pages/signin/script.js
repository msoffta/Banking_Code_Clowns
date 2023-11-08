import axios from 'axios'


const signin = document.forms.signin;

const baseUrl = "http://localhost:8080";



signin.onsubmit = (e) => {
    e.preventDefault();
    let data = new FormData(signin);
    let user = {
        email: data.get("email"),
        password: data.get("password"),
    };

    axios.get(baseUrl + "/users?email=" + user.email)
    .then(res => {
        if(res.status === 200 || res.status === 201){
            if(res.data.length > 0) {
                if(res.data[0].password === user.password) {
                    alert('welcome')
                    localStorage.setItem('user' , JSON.stringify(res.data[0]))
                    location.assign('/index.html')
    
                } else {
                    alert('error')
                }
            } else {
                alert('no user found')
            }
        }
        
    })


};
