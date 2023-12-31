import Chart from 'chart.js/auto';
import { getData } from '../../../modules/helpers';
let canvas_tag = document.getElementById('acquisitions')
let categ_canvas = document.getElementById('categories')
let today_btn = document.querySelector('#today')
let id = location.search.split('=').at(-1)
let transactions = []
let categories = []
let myChart
let categ_chart

getData('/transactions?wallet_id=' + id)
    .then(res => {
        transactions = res.data
        for(let item of res.data) {
            categories.push(item.category)
        }

        categoriesView(res.data)
        createChart(res.data)
    })  

today_btn.onclick = () => {
    let todays_tr = []
    let date_now = new Date().toISOString().substring(0,10)

    for(let item of transactions) {
        if(item.date === date_now) {
            todays_tr.push(item)
        }
    }

    categoriesView(todays_tr)
    createChart(todays_tr)
    
}

function createChart(arr) {
    if(myChart) {
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
    let categ_items = [...new Set(arr.map(item => item.category))]
    let rebuilt_arr = categ_items.map(item => {
        return {
            category: item,
            total: 0
        }
    })

    for(let transaction of arr) {
        for(let new_item of rebuilt_arr) {
            if(new_item.category === transaction.category) {
                new_item.total += parseFloat(transaction.amount)
            }
        }
    }
    
    if(categ_chart) {
        categ_chart.destroy()
    }

    categ_chart = new Chart(categ_canvas, {
        type: 'bar',
        data: {
            labels: rebuilt_arr.map(item => item.category),
            datasets: [{
                label: 'Acquisitions by year',
                data: rebuilt_arr.map(item => item.total),
            }]
        },
    });   
}