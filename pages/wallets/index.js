// import axios from 'axios'
import { reload_card, makeHeader } from "../../modules/ui"

let arr = [
    {
        id: 1,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    },
    {
        id: 2,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    }, {
        id: 3,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    },
    {
        id: 4,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    },
    {
        id: 5,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    },
    {
        id: 6,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    },
    {
        id: 7,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    }

]
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

reload_card(arr, container)

makeHeader()
