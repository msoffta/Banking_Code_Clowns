import { getData } from "../../modules/helpers";
import { makeHeader } from "../../modules/ui"

makeHeader()

let cards = document.querySelectorAll('.card');
let id = location.search.split('=').at(-1)


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



getData('/wallets/' + id)
    .then(res => {
        if(res.status !== 200 && res.status === 201) return

        card_name.innerHTML = res.data.name
        card_balance.innerHTML = `Balance: ${res.data.balance.toLocaleString('ru-RU')}`
    })