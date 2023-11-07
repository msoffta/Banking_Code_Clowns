import axios from "axios";
import { user } from "../../modules/user";
import { postData } from "../../modules/helpers";

let addwallet = document.forms.addwallet;
const baseUrl = "http://localhost:8080";

console.log(user);

addwallet.onsubmit = (e) => {
    e.preventDefault();
    let data = new FormData(addwallet);

    let wallet = {
        name: data.get("name"),
        currency: data.get("currency"),
        balance: +data.get("balance"),
        user_id: user.id,
    };

    postData("/wallets", wallet).then((res) => {
        if (res.status === 200 || res.status === 201) {
            alert("Created succesfully");
            location.assign("/pages/wallets/");
        }
    });
};
