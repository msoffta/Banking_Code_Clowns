import { getData } from "../../modules/helpers";
import { makeHeader, reload_table } from "../../modules/ui";
import { user } from "../../modules/user";

let tbody = document.querySelector('tbody')

window.onload = () => {
    makeHeader();

    let user_emails = document.querySelectorAll('[data-email]')

    user_emails.forEach(a => a.innerHTML = user.email)

    getData('/transactions?user_id=' + user.id)
        .then(res => {
            reload_table(res.data, tbody)
        })
}

// reload_table(arr, tbody)

 