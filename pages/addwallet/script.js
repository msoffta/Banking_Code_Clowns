import axios from "axios";
let form = document.forms.add
let baseUrl = "http://localhost:8080"

async function sendData(url, { name, currency, balance, userId }) {
    const responce = axios.post(url, { name, currency, balance, userId });
    if ((await responce).status === 200 || (await responce).status === 201) {
        alert("Кошелек добавлен")
        location.assign("/pages/wallets/")  
    }
}

form.onsubmit = (e) => {
    e.preventDefault()
    let user = localStorage.getItem("user")
    let data = new FormData(form)
    let wallet = {
        name: data.get("name"),
        currency: data.get("currency"),
        balance: data.get("balance"),
        userId: JSON.parse(user).id
    }

    sendData(baseUrl + "/wallets", wallet)
}