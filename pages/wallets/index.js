import { reload_card, makeHeader } from "../../modules/ui"

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
    },
    {
        id: 4,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    },
    {
        id: 5,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    },
    {
        id: 6,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    },
    {
        id: 7,
        cart_name: "Visa",
        cart_amount: "Rub",
        cart_Category: "Car",
        cart_Transaction_amount: "414,000,000",
        cart_time: "4 days ago",
    },
    
]



let container = document.querySelector('.cart')

reload_card(arr, container)
makeHeader()
