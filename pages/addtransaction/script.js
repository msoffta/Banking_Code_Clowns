// // <<<<<<< HEAD
import { getData, patchData, postData } from "../../modules/helpers";
import { user } from "../../modules/user";

let form = document.forms.transactions
let select = form.querySelector('select')
let wallets = []


getData('/wallets?user_id=' + user.id)
    .then(res => {
        for(let item of res.data) {
            let opt = new Option(`Wallet: ${item.name}`, item.id)
            select.append(opt)
        }
        wallets = res.data
    })


form.onsubmit = (e) => {
    e.preventDefault();

    let transaction = {user_id: user.id}
    let fm = new FormData(form)
    fm.forEach((val, key) => transaction[key] = val)

    let wallet = wallets.find(item => +item.id === +transaction.wallet_id)

    delete wallet.id
    delete wallet.user_id
    delete wallet.currency

    transaction.wallet = wallet

    if(wallet.balance < transaction.amount) {
        alert('Not enough money')
        return
    }

    patchData('/wallets/' + transaction.wallet_id, {
        balance: +wallet.balance - +transaction.amount
    })
        .then(res => {
            if(res.status === 200 || res.status === 201) {
                postData('/transactions', transaction)
                    .then(res => {
                        if(res.status === 200 || res.status === 201) {
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
// =======  

let addtransaction = document.forms.transactions;
let choose_wallet = document.querySelector("#choose_wallet");

addtransaction.onsubmit = (e) => {
    e.preventDefault();
    let data = new FormData(addtransaction);

    let transaction = {
        user_id: user.id,
        wallet_id: data.get('wallet'),
        total: data.get("total"),
        category: data.get('category'),
        date: new Date().toISOString().substring(0, 10),
    };

    postData("/transactions", transaction)
        .then((res) => {
            if (res.status === 200 || res.status === 201) {
                alert("Created succesfully");
                location.assign("/pages/transactions/");
            }
        });
    getData("/wallets?id=" + data.get("wallet"))
        .then(res => {
            if (+data.get('total') > +res.data.balance) {
                alert("money are not enough")
                return
            } else if (data.get('total') <= 0)
                alert("you need more money")
            return

        })
};

function fillWallets(container) {
    getData("/wallets?user_id" + user.id).then((res) => {
        if (res.status === 200 || res.status === 200) {
            if (res.data.length === 0) {
                alert("wallets are not found");
                location.assign("/pages/wallets/");
                return;
            }
            for (let item of res.data) {
                let option_wallet = document.createElement("option");

                option_wallet.value = item.id
                option_wallet.innerHTML = item.name

                container.append(option_wallet)
            }
        }
    });
}
fillWallets(choose_wallet)
// // >>>>>>> e071ac180ebbcf75e7a76d7f3229852f12f0803a
