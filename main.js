import { reload_card, reload_table } from "./modules/ui"
import { makeHeader } from "./modules/ui"
import { user } from "./modules/user"
import { getData } from "./modules/helpers"

let container = document.querySelector('.cart')
let tbody = document.querySelector('tbody')

getData('/wallets?user_id=' + user.id)
    .then(res => reload_card(res.data, container))

getData('/transactions?user_id=' + user.id)
    .then(res => reload_table(res.data, tbody))




makeHeader()
// reload_card(arr, container)
// reload_table(arr, tbody)
