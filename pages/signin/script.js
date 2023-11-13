import axios from "axios";          
    
const signin = document.forms.signin;
const baseUrl = "http://localhost:8080";


axios.get(baseUrl + "/users")
.then(res => res.json())
.then(res => console.log(res))



signin.onsubmit = function (e) {
    e.preventDefault();
    let data = new FormData(signin);
    let user = {
        email: data.get("email"),
        password: data.get("password"),
    }

    axios.get("baseUrl" + "/users?email=" + user.email)
    .then(res => {
        if(res.status !== 201 || res.status !== 200) {
        if(res.data.length > 0) {

        }
    }
    }) 
    
    

      
}
