import axios from "axios";
import { user } from "../../modules/user";
import { getData } from "../../modules/helpers";

let addtransaction = document.forms.addtransaction;
const baseUrl = "http://localhost:8080";

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
  console.log(transaction);

  axios.post(baseUrl + "/transactions", transaction).then((res) => {
    if (res.status === 200 || res.status === 201) {
      alert("Created succesfully");
      location.assign("/pages/transactions/");
    }
  });
  getData("/wallets?id=" + data.get("wallet") )
  .then(res => {
    if (+data.get('total') > +res.data.balance) {
        alert("money are not enough")
        return
    }
    else if(data.get('total') <= 0 )
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
