import Chart from "chart.js/auto";
import { getData } from "../../../modules/helpers";
let canvas_tag = document.getElementById("acquisitions");
let categ_canvas = document.getElementById("categories");
let today_btn = document.querySelector("#today");
let week_btn = document.querySelector("#week");
let month_btn = document.querySelector("#month");
let year_btn = document.querySelector("#year");
let id = location.search.split("=").at(-1);
let transactions = [];
let categories = [];
let myChart;
let categ_chart;


getData("/transactions?wallet_id=" + id).then((res) => {
    transactions = res.data;
    for (let item of res.data) {
        categories.push(item.category);
    }
    let newTransactions = JSON.parse(JSON.stringify(transactions));
    const mergedTransactions = newTransactions.reduce((acc, transaction) => {
        const existingTransaction = acc.find(
            (item) => item.category === transaction.category
        );
        if (existingTransaction) {
            existingTransaction.amount = `${
                parseInt(existingTransaction.amount) +
                parseInt(transaction.amount)
            }`;
        } else {
            acc.push(transaction);
        }
        return acc;
    }, []);

    categoriesView(mergedTransactions);
    createChart(transactions);
});

today_btn.onclick = () => {
    let todays_tr = [];
    let date_now = new Date().toISOString().substring(0, 10);

    for (let item of transactions) {
        if (item.date === date_now) {
            todays_tr.push(item);
        }
    }
    const mergedTransactions = todays_tr.reduce((acc, transaction) => {
        const existingTransaction = acc.find(
            (item) => item.category === transaction.category
        );
        if (existingTransaction) {
            existingTransaction.amount = `${
                parseInt(existingTransaction.amount) +
                parseInt(transaction.amount)
            }`;
        } else {
            acc.push(transaction);
        }
        return acc;
    }, []);

    categoriesView(mergedTransactions);
    createChart(todays_tr);
};

week_btn.onclick = () => {
    let week_tr = [];
    let date_now = new Date();
    date_now.setDate(date_now.getDate() + 7);
    date_now = date_now.getTime();

    
    for (let item of transactions) {
        const itemDate = new Date(item.date).getTime();

        if (itemDate >= date_now || itemDate <= date_now) {
            week_tr.push(item);
        }
    }

    const mergedTransactions = week_tr.reduce((acc, transaction) => {
        const existingTransaction = acc.find(
            (item) => item.category === transaction.category
        );
        if (existingTransaction) {
            existingTransaction.amount = `${
                parseInt(existingTransaction.amount) +
                parseInt(transaction.amount)
            }`;
        } else {
            acc.push(transaction);
        }
        return acc;
    }, []);

    categoriesView(mergedTransactions);
    createChart(week_tr);
};

month_btn.onclick = () => {
    let month_tr = [];
    let date_now = new Date();
    date_now.setDate(date_now.getDate() + 30);
    date_now = date_now.getTime();

    for (let item of transactions) {
        const itemDate = new Date(item.date).getTime();

        if (itemDate >= date_now || itemDate <= date_now) {
            month_tr.push(item);
        }
    }

    const mergedTransactions = month_tr.reduce((acc, transaction) => {
        const existingTransaction = acc.find(
            (item) => item.category === transaction.category
        );
        if (existingTransaction) {
            existingTransaction.amount = `${
                parseInt(existingTransaction.amount) +
                parseInt(transaction.amount)
            }`;
        } else {
            acc.push(transaction);
        }
        return acc;
    }, []);

    categoriesView(mergedTransactions);
    createChart(month_tr);
};

year_btn.onclick = () => {
    let year_tr = [];
    let date_now = new Date();
    date_now.setDate(date_now.getDate() + 30);
    date_now = date_now.getTime();

    for (let item of transactions) {
        const itemDate = new Date(item.date).getTime();

        if (itemDate >= date_now || itemDate <= date_now) {
            year_tr.push(item);
        }
    }

    const mergedTransactions = year_tr.reduce((acc, transaction) => {
        const existingTransaction = acc.find(
            (item) => item.category === transaction.category
        );
        if (existingTransaction) {
            existingTransaction.amount = `${
                parseInt(existingTransaction.amount) +
                parseInt(transaction.amount)
            }`;
        } else {
            acc.push(transaction);
        }
        return acc;
    }, []);

    categoriesView(mergedTransactions);
    createChart(year_tr);
};


function createChart(arr) {
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(canvas_tag, {
        type: "line",
        data: {
            labels: arr.map((item) => item.date),
            datasets: [
                {
                    label: "Acquisitions by year",
                    data: arr.map((item) => item.amount),
                },
            ],
        },
    });
}

function categoriesView(arr) {
    if (categ_chart) {
        categ_chart.destroy();
    }

    categ_chart = new Chart(categ_canvas, {
        type: "bar",
        data: {
            labels: arr.map((item) => item.category),
            datasets: [
                {
                    label: "Acquisitions by year",
                    data: arr.map((item) => item.amount),
                },
            ],
        },
    });
}
