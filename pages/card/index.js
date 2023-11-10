import { getData } from "../../modules/helpers";
import { makeHeader } from "../../modules/ui";
import { user } from "../../modules/user";
import { idd } from "../../modules/ui";



makeHeader()


function card(massiv, place) {
    for(let item of massiv){
        let h4 = document.createElement('h4')
        let p = document.createElement('p')

        h4.innerHTML = item.name
        p.innerHTML = item.balance

        place.append(h4,p)
    }
}

getData('/wallets?user_id=' + user.id)
    .then(res => console.log(res.data))

    console.log(idd);