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

let container = document.querySelector('.cart')

function reload_card(massiv, cart) {
    cart.innerHTML = ""

    for (let item of massiv) {
        let article = document.createElement('article'),
            h3 = document.createElement('h3'),
            p = document.createElement('p');


        article.classList.add('grid')
        if (item.id == 1) {
            article.classList.add('cart_grid')
        }
        if (item.id === 2) {
            article.style.background = " linear-gradient(84deg, #5F0A87 2.27%, #A4508B 92.26%)"
        }
        if (item.id === 3) {
            article.style.background = " linear-gradient(84deg, #D7816A 2.27%, #BD4F6C 92.26%)"
        }

        p.classList.add('grid_p')

        h3.innerHTML = item.cart_name
        p.innerHTML = item.cart_amount




        cart.append(article)
        article.append(h3, p)

    }
}
let tbody = document.querySelector('tbody')

function reload_table(masiv, table) {
    table.innerHTML = ""
    for (let item of masiv) {
        let tr = document.createElement('tr'),
            th = document.createElement('th'),
            th2 = document.createElement('th'),
            th3 = document.createElement('th'),
            p_car = document.createElement('th'),
            date = document.createElement('th');

        tr.classList.add("cart_tr")
        th.classList.add("cart_th")

        th.innerHTML = item.id
        th2.innerHTML = item.cart_name
        th3.innerHTML = item.cart_amount
        p_car.innerHTML = item.cart_Transaction_amount
        date.innerHTML = item.cart_time
        th.classList.add('th')
        date.classList.add('th_date')
        th2.classList.add('th')
        th3.classList.add('th')
        p_car.classList.add('th')



        table.append(tr)
        tr.append(th, th2, p_car, th3, date)
    }
}
reload_card(arr, container)
reload_table(arr, tbody)


// tr.classList.add('tr_reload')
// th.classList.add('th')