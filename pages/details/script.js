import { makeHeader } from "/modules/ui.js"
import { getData } from "/modules/helpers";



makeHeader();


let wallet_name = document.querySelector('h1')
let p = document.querySelector('p')
let wallet_anim = document.querySelectorAll('.wallets_name')

VanillaTilt.init(wallet_anim, {
    max: 18,
    glare: true,
    'max-glare': 0.3
})

let wallet = {
    id: location.search.split("=").at(-1)
}
console.log(wallet.id);
getData('/wallets/' + wallet.id)
    .then(res => {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
            if (wallet_name) wallet_name.innerHTML = res.data.name
            if (p) p.innerHTML = `Balance:${JSON.stringify(res.data.balance)}`
        }
        wallet = res.data
    })