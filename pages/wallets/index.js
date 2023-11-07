// import axios from 'axios'
import { reload_card, makeHeader } from "../../modules/ui"
import { getData } from '../../modules/helpers';
import { user } from "../../modules/user";

let container = document.querySelector('.cart')
const baseUrl = "http://localhost:8080";
let btn = document.querySelector('.button')
let closed = document.querySelector('img')
const modal = document.querySelector('.modal')
let inp_name = document.querySelector('#inp')
let inp = document.querySelector('#cost')
let form = document.querySelector('form')

fetch(baseUrl + '/wallets')
    .then((res) => res.json())
    .then((res) => reload_card(res, container))

btn.onclick = () => {
    modal.style.display = "flex"
}
closed.onclick = () => {
    modal.style.display = "none"
}
form.onsubmit = (e) => {
    e.preventDefault();
    let todo = {
        id: Math.floor(Math.random() * 15) + 1,
        cart_name: inp_name.value,
        cart_amount: inp.value
    }
    if (inp.value === "" ) {
        alert('error')
        return
    }else if (inp_name.value === "" ) {
        alert('error')
        return
    }
    fetch(baseUrl + "/wallets", {
        method: "post",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.status === 200 || res.status === 201) {

            fetch(baseUrl + "/wallets")
                .then((res) => res.json())
                .then((res) => reload_card(res, container))

            form.reset()
        }
      
    })
}

makeHeader()

getData('/wallets?user_id=' + user.id)
    .then(res => reload_card(res.data, container))
