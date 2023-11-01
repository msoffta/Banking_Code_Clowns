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

function reload(massiv, cart) {


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
        if (item.id === 4) {
            article.style.background = " linear-gradient(84deg, #D7816A 2.27%, #F4R5T5 92.26%)"
        }
        if (item.id == 5) {
            article.style.background = " linear-gradient(84deg, #5F0A87 2.27%, #A4508B 92.26%)"
        }
        if (item.id === 6) {
            article.style.background = " linear-gradient(84deg, #D7816A 2.27%, #BD4F6C 92.26%)"
        }

        p.classList.add('grid_p')

        h3.innerHTML = item.cart_name
        p.innerHTML = item.cart_amount




        cart.append(article)
        article.append(h3, p)

    }
}

reload(arr, container)



function makeHeader() {
    let header = document.createElement("header");
    let wrap = document.createElement("div");
    let leftNav = document.createElement("nav");
    let rightNav = document.createElement("nav");

    let main = document.createElement("a");
    let myWallets = document.createElement("a");
    let myTransactions = document.createElement("a");

    let logginedNow = document.createElement("a");
    let logOut = document.createElement("button");
    let logOutSpan = document.createElement("span");

    wrap.classList.add("wrap");
    leftNav.classList.add("left__nav");
    rightNav.classList.add("right__nav");

    main.href = "/";
    main.innerHTML = "Главная";

    myWallets.href = "/pages/wallets/";
    myWallets.innerHTML = "Мои кошельки";

    myTransactions.href = "/pages/transactions/";
    myTransactions.innerHTML = "Мои транзакции";

    logginedNow.href = "#";
    logginedNow.innerHTML = "alexadams@google.com";

    logOutSpan.classList.add("material-symbols-outlined");
    logOutSpan.innerHTML = "logout";

    document.body.prepend(header);
    header.append(wrap);
    wrap.append(leftNav, rightNav);

    leftNav.append(main, myWallets, myTransactions);
    rightNav.append(logginedNow, logOut);
    logOut.append(logOutSpan);

    logOut.onclick = function (e) {
        e.preventDefault();

        let backdrop = document.createElement("div");
        let modal = document.createElement("div");
        let warning = document.createElement("h2");

        let buttons = document.createElement("div");
        let leave = document.createElement("button");
        let noLeave = document.createElement("button");

        backdrop.classList.add("backdrop");

        modal.classList.add("modal");

        buttons.classList.add("blocks");

        warning.innerHTML = "Вы точно хотите выйти?";
        leave.classList.add("leave");
        noLeave.classList.add("no__leave");

        leave.innerHTML = "Да";
        noLeave.innerHTML = "Нет";

        leave.onclick = function () {
            modal.remove();
            backdrop.remove();
        };

        noLeave.onclick = function () {
            modal.remove();
            backdrop.remove();
        };

        document.body.append(backdrop, modal);
        modal.append(warning, buttons);
        buttons.append(leave, noLeave);
    };
}

makeHeader();
