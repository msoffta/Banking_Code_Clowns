import axios from "axios";
const signin = document.forms.signin;
const baseUrl = "http://localhost:8080";

async function checkData(url, { email, password }) {
    const responce = axios.get(url + `?email=${email}`);

    console.log((await responce).data.length);
    if ((await responce).data.length > 0) {
        if ((await responce).data[0].password === password) {
            alert("Вы вошли");
            localStorage.setItem("user", JSON.stringify((await responce).data[0]));
            location.assign("/index.html")
            return true;
        } else {
            alert("Не правильный пароль");
            return false;
        }
    } else {
        alert("Вас нету в базе данных");
        return false;
    }
}

signin.onsubmit = (e) => {
    e.preventDefault();
    let data = new FormData(signin);
    let user = {
        email: data.get("email"),
        password: data.get("password"),
    };

    checkData(baseUrl + "/users", user);
};
