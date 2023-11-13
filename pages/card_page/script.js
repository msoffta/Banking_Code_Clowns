import axios from "axios";
import { getData, getSymbols, patchData } from "../../modules/helpers";
import { makeHeader } from "../../modules/ui"

makeHeader()

let cards = document.querySelectorAll('.card');
let select = document.querySelector('#convert_form select')
let btn = document.querySelector('#convert_form button')
let id = location.search.split('=').at(-1)
let wallet = null
let btns = document.querySelectorAll(".btns button")

export let card_name = document.querySelector(".card_name");
export let card_balance = document.querySelector(".card_balance");

VanillaTilt.init(cards, {
    max: 40,  // Максимальный угол поворота карточки
    glare: true,  // Включаем эффект блика
    'max-glare': .5,  // Регулируем интенсивность блика
});
let convert = document.querySelectorAll('.convert');

VanillaTilt.init(convert, {
    max: 5,  // Максимальный угол поворота карточки
    glare: true,  // Включаем эффект блика
    'max-glare': 0.3,  // Регулируем интенсивность блика
});

cards[0].onclick = () => {

    cards[0].style.transition = "0.8s ease"
    setTimeout(() => {
        cards[0].classList.toggle('card_revert')
        cards[0].style.transition = "0"
    }, 0);
}

btn.onclick = () => {
    
    btn.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
    axios.get(`https://api.apilayer.com/fixer/convert?to=${select.value}&from=${wallet?.currency}&amount=${wallet?.balance}`, {
        headers: {
            apikey: import.meta.env.VITE_API_KEY
        }
    })
        .then(res => {
            if (res.status !== 200 && res.status === 201) return

            patchData('/wallets/' + id, {
                currency: res?.data?.query?.to,
                balance: res?.data?.result
            })
                .then(res => {
                    if (res.status !== 200 && res.status === 201) return

                    wallet = res.data

                    card_name.innerHTML = res.data.name
                    card_balance.innerHTML = `Balance: ${res.data.balance.toLocaleString('ru-RU')} ${res.data.currency}`

                    alert('success!')
                }).finally(() => btn.innerHTML = "Convert") 

        })

}


getSymbols()
    .then(res => {
        for (let key in res) {
            let opt = new Option(`${key}: ${res[key]}`, key)
            select.append(opt)
        }
    })


getData('/wallets/' + id)
    .then(res => {
        if (res.status !== 200 && res.status === 201) return
        wallet = res.data

        card_name.innerHTML = res.data.name
        card_balance.innerHTML = `Balance: ${res.data.balance.toLocaleString('ru-RU')} ${res.data.currency}`
    })


getSymbols()
    .then(res => {
        for (let key in res) {
            let opt = new Option(`${key}: ${res[key]}`, key)
            select.append(opt)
        }
    })


getData('/wallets/' + id)
    .then(res => {
        if (res.status !== 200 && res.status === 201) return
        wallet = res.data

        card_name.innerHTML = res.data.name
        card_balance.innerHTML = `Balance: ${res.data.balance.toLocaleString('ru-RU')} ${res.data.currency}`
    })

