import axios from "axios";
let form = document.forms.add
let baseUrl = "http://localhost:8080"
let input = form.querySelector("input[name='balance']")
let select = form.querySelector("select")
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

    if (/^\d+$/.test(data.get("balance"))) {
        
    } else {
        alert("Введено некорректное значение")
        return
    }

    let wallet = {
        name: data.get("name").length > 0 ? data.get("name") : "CARD",
        currency: data.get("currency"),
        balance: data.get("balance"),
        userId: JSON.parse(user).id
    }

    sendData(baseUrl + "/wallets", wallet)
}

input.oninput = () => {
    if (input.value.length > 0 && /^\d+$/.test(input.value)) {
        input.style.border = "1px solid green";
    } else {
        input.style.border = "1px solid red";
    }
}