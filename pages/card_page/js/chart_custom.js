import Chart from 'chart.js/auto';
import { getData } from '../../../modules/helpers';
let canvas_tag = document.getElementById('acquisitions')
let categ_canvas = document.getElementById('categories')
let today_btn = document.querySelector('#today')
let week_btn = document.querySelector('#week')
let month_btn = document.querySelector('#month')
let year_btn = document.querySelector('#year')
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
    let todays_tr = []
    let date_now = new Date().toISOString().substring(0, 10)
    let week = [date_now.split('-').at(-1), date_now.split('-').at(-1) - 1, date_now.split('-').at(-1) - 2, date_now.split('-').at(-1) - 3, date_now.split('-').at(-1) - 4, date_now.split('-').at(-1) - 5, date_now.split('-').at(-1) - 6, date_now.split('-').at(-1) - 7]





    for (let item of transactions) {
        for (let i of week) {
            if (+i == item.date.split('-').at(-1)) {
                todays_tr.push(item)
            }       
        }
    }

   
 categoriesView(todays_tr)
 createChart(todays_tr)
}

month_btn.onclick = () => {
    let todays_tr = []
    let date_now = new Date().toISOString().substring(0, 10)
    let month = date_now.split('-').at(-2)


    for (let item of transactions) {
        if (item.date.split('-').at(-2) === month) {
            todays_tr.push(item)
        }
    }

    categoriesView(todays_tr)
    createChart(todays_tr)

}

year_btn.onclick = () => {
    let todays_tr = []
    let date_now = new Date().toISOString().substring(0, 10)
    let year = date_now.split('-').at(-3)


    for (let item of transactions) {
        if (item.date.split('-').at(-3) === year) {
            todays_tr.push(item)
        }
    }

    categoriesView(todays_tr)
    createChart(todays_tr)

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