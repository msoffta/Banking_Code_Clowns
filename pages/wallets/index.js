import axios from 'axios'

import { reload_card, makeHeader } from "../../modules/ui"

const baseUrl = "http://localhost:8080";


// let arr = [
//     {
//         id: 1,
//         cart_name: "Visa",
//         cart_amount: "Rub",
//         cart_Category: "Car",
//         cart_Transaction_amount: "414,000,000",
//         cart_time: "4 days ago",
//     },
//     {
//         id: 2,
//         cart_name: "Visa",
//         cart_amount: "Rub",
//         cart_Category: "Car",
//         cart_Transaction_amount: "414,000,000",
//         cart_time: "4 days ago",
//     }, {
//         id: 3,
//         cart_name: "Visa",
//         cart_amount: "Rub",
//         cart_Category: "Car",
//         cart_Transaction_amount: "414,000,000",
//         cart_time: "4 days ago",
//     },
//     {
//         id: 4,
//         cart_name: "Visa",
//         cart_amount: "Rub",
//         cart_Category: "Car",
//         cart_Transaction_amount: "414,000,000",
//         cart_time: "4 days ago",
//     },
//     {
//         id: 5,
//         cart_name: "Visa",
//         cart_amount: "Rub",
//         cart_Category: "Car",
//         cart_Transaction_amount: "414,000,000",
//         cart_time: "4 days ago",
//     },
//     {
//         id: 6,
//         cart_name: "Visa",
//         cart_amount: "Rub",
//         cart_Category: "Car",
//         cart_Transaction_amount: "414,000,000",
//         cart_time: "4 days ago",
//     },
//     {
//         id: 7,
//         cart_name: "Visa",
//         cart_amount: "Rub",
//         cart_Category: "Car",
//         cart_Transaction_amount: "414,000,000",
//         cart_time: "4 days ago",
//     },
    
// ]

let container = document.querySelector('.cart')

// reload_card(arr, container)
makeHeader()

let btn_card = document.querySelector('.button')

let user = JSON.parse(localStorage.getItem('user'))

btn_card.onclick = () => {
    location.assign('/pages/addwallet/index.html')
}

axios.get(baseUrl + "/wallets?user_id=" + user.id) 
.then(res => {
    if (res.status !== 200 && res.status !== 201) return


    reload_card(res.data, container)


})





