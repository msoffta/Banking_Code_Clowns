import { getData, patchData, postData } from "../../modules/helpers";
import { user } from "../../modules/user";

let wallets = []
let form = document.forms.transactions
let select = form.querySelector('select')


getData('/wallets?user_id=' + user.id)
    .then(res => {
        for (let item of res.data) {
            let opt = new Option(`Wallet: ${item.name}`, item.id)
            select.append(opt)
        }
        wallets = res.data
    })


form.onsubmit = (e) => {
    e.preventDefault();

    let transaction = { user_id: user.id }
    let fm = new FormData(form)
    fm.forEach((val, key) => transaction[key] = val)

    let wallet = wallets.find(item => +item.id === +transaction.wallet_id)
    console.log(wallet);
    delete wallet.id
    delete wallet.user_id
    delete wallet.currency

    transaction.wallet = wallet
    console.log(wallet);
    if (wallet.balance < transaction.amount) {
        alert('Not enough money')
        return
    }

    patchData('/wallets/' + transaction.wallet_id, {
        balance: +wallet.balance - +transaction.amount
    })
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                postData('/transactions', transaction)
                    .then(res => {
                        if (res.status === 200 || res.status === 201) {
                            alert('success')
                            location.assign('/pages/transactions/')
                        } else {
                            alert(res.statusText)
                        }
                    })
            } else {
                alert(res.statusText)
            }
        })


}
