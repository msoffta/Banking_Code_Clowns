import { getData, patchData, postData} from "../../modules/helpers";
import { user } from "../../modules/user";
const trans = document.forms.transactions;

async function fillWallets() {
    try {
        const responce = await getData("/wallets?user_id=" + user.id);
        if (
            responce.status !== 200 &&
            responce.status !== 201 &&
            responce.status !== 304
        )
            return;
        if (responce.data.length === 0) {
            alert("У вас нет кошельков");
            location.assign("/pages/wallets/");
        }
        let resData = await responce.data;
        let wallets = trans.querySelector("select[name='wallet']");

        for (let item of resData) {
            let option = document.createElement("option");
            option.value = item.id;
            option.innerHTML = `Кошелек: ${item.name}`;
            wallets.appendChild(option);
        }
    } catch (error) {
        console.log(error);
    }
}
async function transactionValidate(data) {
    try {
        const responce = await getData(`/wallets/?id=${data.get("wallet")}`);
        if (
            responce.status !== 200 &&
            responce.status !== 201 &&
            responce.status !== 304
        )
            return;
        if (/^\d+$/.test(data.get("amount"))) {
            
        } else {
            return alert("Некорректная сумма");
        }
        let resData = await responce.data[0];
        
        
        if (+data.get("amount") > +resData.balance) {
            alert("Недостаточно средств");
            return;
        } else if (+data.get("amount") <= 0) {
            alert("Сумма должна быть больше нуля");
            return;
        } else {
            patchData(`/wallets/${data.get("wallet")}`, {
                balance: +resData.balance - +data.get("amount"),
            }).then((res) => {
                if (
                    res.status === 200 ||
                    res.status === 201 ||
                    res.status === 304
                ) {
                    alert("Кошелек обновлен");
                }
            })
            let newData = {
                user_id: user.id,
                wallet_id: +data.get("wallet"),
                total: +data.get("amount"),
                category: data.get("category"),
                date: data.get("date"),
            };

            let res = await postData("/transactions", newData);
            console.log(res);

            if (
                res.status === 200 ||
                res.status === 201 ||
                res.status === 304
            ) {
                alert("Транзакция добавлена");
                location.assign("/pages/transactions/");
            }
        }
    } catch (error) {
        console.error(error);
    }
}

window.onload = () => {
    fillWallets();
    let dateInput = trans.querySelector("[name='date']");
    dateInput.value = new Date().toISOString().substring(0, 10);
};

trans.onsubmit = (e) => {
    e.preventDefault();
    let data = new FormData(trans);
    transactionValidate(data);
};
