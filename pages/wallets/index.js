import axios from "axios";
import { reload_card, makeHeader } from "../../modules/ui";
const baseUrl = "http://localhost:8080";
makeHeader();

let container = document.querySelector(".cart");
let addWallet = document.querySelector(".button");

async function getData() {
    const user = localStorage.getItem("user");
    const responce = axios.get(
        baseUrl + `/wallets?userId=${JSON.parse(user).id}`
    );
    if ((await responce).status === 200 || (await responce).status === 201) {
        reload_card((await responce).data, container);
    }
}

getData();

addWallet.onclick = () => {
    location.assign("/pages/addwallet/");
};
