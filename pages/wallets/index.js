import { reload_card, makeHeader } from "../../modules/ui"
<<<<<<< HEAD
import axios from "axios"
const bas_url = "http://localhost:8080"
=======
import { getData } from '../../modules/helpers';
import { user } from "../../modules/user";
>>>>>>> 31f2b0775951960b767cca9b991dcb80fda8a205

let container = document.querySelector('.cart')
let form = document.querySelector('.add')
let open = document.querySelector('.button')
let card_name = document.querySelector("#name")
let card_current = document.querySelector("#current")

axios(bas_url + "/wallets")
    .then(function (res) {
        reload_card(res.data, container)
    });

makeHeader()

<<<<<<< HEAD

console.log(card_current.value);

open.onclick = () => {
    form.style.display = "flex"
}



form.onsubmit = (e) => {
    e.preventDefault();
    
    form.style.display = "none"

    let data = new FormData(form)

    let card = {
        name: data.get("name"),
        current: data.get("cur")
    }

    axios.post(bas_url + "/wallets", card)
        .then(res => {
            if (res.status === 201 || res.status === 200) {
                
                alert("card added")

            }else{
                alert("error")
            }
        })

1   
}

=======
// 
let user_emails = document.querySelectorAll('[data-email]')

user_emails.forEach(a => a.innerHTML = user.email)
// 


getData('/wallets?user_id=' + user.id)
    .then(res => reload_card(res.data, container))
>>>>>>> 31f2b0775951960b767cca9b991dcb80fda8a205
