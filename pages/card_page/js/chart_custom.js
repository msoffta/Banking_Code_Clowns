import Chart from 'chart.js/auto';
import { getData } from '../../../modules/helpers';
let canvas_tag = document.getElementById('acquisitions')
let categ_canvas = document.getElementById('categories')
let today_btn = document.querySelector('#today')
let week_btn = document.querySelector('#Week')
let Mounth_btn = document.querySelector('Mounth')
let id = location.search.split('=').at(-1)
let transactions = []
let categories = []
let myChart
let categ_chart

getData('/transactions?wallet_id=' + id)
    .then(res => {
        transactions = res.data
        for (let item of res.data) {
            categories.push(item.category)
        }


        categoriesView(res.data)
        createChart(res.data)
    })

today_btn.onclick = () => {
    let todays_tr = []
    let date_now = new Date().toISOString().substring(0, 10)

    for (let item of transactions) {
        if (item.date === date_now) {
            todays_tr.push(item)
        }
    }

    categoriesView(todays_tr)
    createChart(todays_tr)

}
week_btn.onclick = () => {
    let Week = []
    let week_now = new Date().toISOString().substring(0, 10)
    let func = week_now.setDate(week_now.getDate() + 7)
    for (let item of transactions) {
        if (item.data === func) {
            Week.push(item);
        }
    }
    categoriesView(Week)
    createChart(Week)
}

function createChart(arr) {
    if (myChart) {
        myChart.destroy()
    }

    myChart = new Chart(canvas_tag, {
        type: 'line',
        data: {
            labels: arr.map(item => item.date),
            datasets: [{
                label: 'Acquisitions by year',
                data: arr.map(item => item.amount),
            }]
        },
    });
}

function categoriesView(arr) {
    if (categ_chart) {
        categ_chart.destroy()
    }

    categ_chart = new Chart(categ_canvas, {
        type: 'bar',
        data: {
            labels: arr.map(item => item.category),
            datasets: [{
                label: 'Acquisitions by year',
                data: arr.map(item => item.amount),
            }]
        },
    });
}
