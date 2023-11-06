import axios from "axios";
import { reload_card, makeHeader } from "../../modules/ui";
import { getData } from "../../modules/util";
const baseUrl = "http://localhost:8080";
makeHeader();

let container = document.querySelector(".cart");
let addWallet = document.querySelector(".button");



getData(baseUrl, container);

addWallet.onclick = () => {
    location.assign("/pages/addwallet/");
};
