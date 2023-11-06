import axios from "axios";
import { reload_card } from "./ui";

export function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export async function getData(baseUrl, container) {
    const user = localStorage.getItem("user");
    const responce = axios.get(
        baseUrl + `/wallets?userId=${JSON.parse(user).id}`
    );
    if ((await responce).status === 200 || (await responce).status === 201) {
        reload_card((await responce).data, container);
    }
}