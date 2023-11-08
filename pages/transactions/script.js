import { makeHeader, reload_table } from "../../modules/ui";
import { getData } from '../../modules/helpers';
import { user} from "../../modules/user";

// let arr = [
//     {
//         id: 1,
//         cart_name: "Visa",
//         cart_amount: "Rub",
//         cart_Category: "Car",
//         cart_Transaction_amount: "414,000,000",
//         cart_time: "4 days ago",
//     },
//     {
//         id: 2,
//         cart_name: "Visa",
//         cart_amount: "Rub",
//         cart_Category: "Car",
//         cart_Transaction_amount: "414,000,000",
//         cart_time: "4 days ago",
//     }, {
//         id: 3,
//         cart_name: "Visa",
//         cart_amount: "Rub",
//         cart_Category: "Car",
//         cart_Transaction_amount: "414,000,000",
//         cart_time: "4 days ago",
//     }
// ]

let tbody = document.querySelector('tbody')

getData('/transactions?user_id=' + user.id)
    .then(res => reload_table(res.data, tbody))
console.log(user.id);
makeHeader();