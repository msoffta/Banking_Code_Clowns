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


let tbody = document.querySelector('tbody')
function relood(masiv, table) {
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

relood(arr, tbody)