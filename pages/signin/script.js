import axios from 'axios'

const signin = document.forms.signin;

const baseUrl = "http://localhost:8080";


signin.onsubmit = function (e) {
    e.preventDefault();
    let data = new FormData(signin);
    let user = {
        email: data.get("email"),
        password: data.get("password"),
    };
    axios.get(baseUrl + "/users?email=" + user.email)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                if (res.data.password=== user.password) {
                    alert("all right");
                    localStorage.setItem("user", JSON.stringify(res));
                    location.assign("/index.html")
                    return
                } else {
                    alert("fault password");
                  }
            }
        })



};
