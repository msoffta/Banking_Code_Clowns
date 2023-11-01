import { makeHeader, reload_table } from "../../modules/ui";

let arr = [
    {
        id: 1,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    },
    {
        id: 2,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    }, {
        id: 3,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    }
]

let tbody = document.querySelector('tbody')


makeHeader();
reload_table(arr, tbody)