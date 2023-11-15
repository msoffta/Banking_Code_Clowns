import { reload_card, reload_table } from "./modules/ui"
import { makeHeader } from "./modules/ui"
import { user } from "./modules/user"
import { getData } from "./modules/helpers"

makeHeader()

let container = document.querySelector('.cart')
let tbody = document.querySelector('tbody')

// 
let user_name = document.querySelector('#user_name')
let user_emails = document.querySelectorAll('[data-email]')

user_name.innerHTML = `${user.name} ${user.surname}`
user_emails.forEach(a => a.innerHTML = user.email)
// 



getData('/wallets?user_id=' + user.id)
    .then(res => reload_card(res.data, container))

getData('/transactions?user_id=' + user.id)
    .then(res => reload_table(res.data, tbody))
