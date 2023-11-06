import axios from 'axios'

let addwallet = document.forms.addwallet;
const baseUrl = "http://localhost:8080"

console.log(addwallet);




addwallet.onsubmit = (e) => {
    e.preventDefault();
    let data = new FormData(addwallet);

    let user = {
        user_id: JSON.parse(localStorage.getItem('user')).id,
        name: data.get("name"),
        currency: data.get("currency"),
        balance: data.get("balance")
    }

    axios.post(baseUrl + '/wallets', user)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            alert('Created succesfully')
            location.assign('/pages/wallets/')
        }
    })

    


};

