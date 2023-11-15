// import axios from 'axios'
import { reload_card, makeHeader } from "../../modules/ui"
import { getData } from '../../modules/helpers';
import { user } from "../../modules/user";

let container = document.querySelector('.cart')

makeHeader()

// 
let user_emails = document.querySelectorAll('[data-email]')

user_emails.forEach(a => a.innerHTML = user.email)
// 


getData('/wallets?user_id=' + user.id)
    .then(res => reload_card(res.data, container))

