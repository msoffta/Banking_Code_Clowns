// import axios from 'axios'
import { reload_card, makeHeader } from "../../modules/ui"
import { getData } from '../../modules/helpers';
import { user } from "../../modules/user";

let container = document.querySelector('.cart')

makeHeader()
getData('/wallets?user_id=' + user.id)
    .then(res => reload_card(res.data, container))

