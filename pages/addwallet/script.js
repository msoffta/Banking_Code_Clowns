import { user } from "../../modules/user";
import { getSymbols, postData } from "../../modules/helpers";

let addwallet = document.forms.addwallet;
let select = addwallet.querySelector('select')

getSymbols()
    .then(res => {
        console.log(res);
        for(let key in res) {
            let opt = new Option(`${key}: ${res[key]}`, key)

            select.append(opt)
        }
    })

addwallet.onsubmit = (e) => {
    e.preventDefault();
    let data = new FormData(addwallet);

    let wallet = {
        name: data.get("name"),
        currency: data.get("currency"),
        balance: +data.get("balance"),
        user_id: user.id,
    };
    if (data.get("name") === "") {
        alert('error')
        return
    }
    if (data.get("balance") === "") {
        alert('error')
        return
    }
    postData("/wallets", wallet).then((res) => {
        if (res.status === 200 || res.status === 201) {
            alert("Created succesfully");
            location.assign("/pages/wallets/");
        }
    });
};
