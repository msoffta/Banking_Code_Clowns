import { reload_card, makeHeader } from "../../modules/ui";
import { getData } from '../../modules/helpers';
import { user } from "../../modules/user";
import axios from "axios";
const bas_url ="http://localhost:8080"


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

// 
let user_emails = document.querySelectorAll('[data-email]')

user_emails.forEach(a => a.innerHTML = user.email)
// 


getData('/wallets?user_id=' + user.id)
    .then(res => reload_card(res.data, container))
