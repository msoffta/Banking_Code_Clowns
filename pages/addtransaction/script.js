import { user } from '../../modules/user';
import { patchData, postData, getData } from '../../modules/helpers';


let addtransaction = document.forms.addtransaction;
addtransaction.onsubmit = (e) => {
    e.preventDefault();
    let data = new FormData(addtransaction)
    try {
        getData("/wallets?user_id=" + user.id)
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    return
                }
                console.log(res);
                if (res.data.length === 0) {
                    alert("Добавьте кошелёк у вас нету кошелька");
                    location.assign("/pages/wallets/");
                }
                if (+data.get('sum') > +res.data[0].balance) {
                    alert("Недостаточно money");
                    return;
                }
                console.log(res.data[0].balance);
                if (res.data[0].name === transactions.wallet_name) {
                    postData('/transactions', transactions).then(res => {
                        if (res.status === 200 || res.status === 201) {
                            alert("Транзакция добавлена а деньги не списались потому что не понял ")
                            location.assign("/pages/transactions/")
                        }

                    })
                    patchData("/wallets?wallet_id=" + user.id, {
                        balance: res.data[0].balance - transactions.sum
                    })
                        .then(res => console.log(res))
                }

            })
        let transactions = {
            wallet_name: data.get("wallet"),
            wallet_id: user.id,
            sum: +data.get("sum"),
            category: data.get("category"),
            date: data.get("date")
        }
        if (transactions.category === "") {
            alert("error")
            return
        }
        if (transactions.sum === "") {
            alert("error")
            return
        }

    } catch (e) {
        console.log(e);
    }
}


