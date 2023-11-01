export function reload_card(massiv, cart) {

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


export function reload_table(masiv, table) {
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

export function makeHeader() {
    let locale = location.pathname.split('/').at(-2) || "home"

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

    switch (locale) {
        case "home":
            main.classList.add('active_url')
            break;
        case "wallets":
            myWallets.classList.add('active_url')
            break;
        case "transactions":
            myTransactions.classList.add('active_url')
            break;
    }

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

        document.body.prepend(backdrop, modal);
        modal.append(warning, buttons);
        buttons.append(leave, noLeave);
    };
}