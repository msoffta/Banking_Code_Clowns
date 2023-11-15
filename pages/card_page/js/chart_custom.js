import Chart from "chart.js/auto";
import { getData } from "../../../modules/helpers";
let canvas_tag = document.getElementById("acquisitions");
let categ_canvas = document.getElementById("categories");
let today_btn = document.querySelector("#today");
let week_btn = document.querySelector("#week");
let id = location.search.split("=").at(-1);
let transactions = [];
let categories = [];
let myChart;
let categ_chart;

let del_dublicate = [];

getData("/transactions?wallet_id=" + id).then((res) => {
  transactions = res.data;
  console.log(res);
  for (let item of res.data) {
    categories.push(item.category); 

  }

  categoriesView(res.data);
  createChart(res.data);
});

today_btn.onclick = () => {
  let todays_tr = [];
  let date_now = new Date().toISOString().substring(0, 10);

  for (let item of transactions) {
    if (item.date === date_now) {
      todays_tr.push(item);
    }
  }

  categoriesView(todays_tr);
  createChart(todays_tr);
};
/////////////////////////////////////////
week_btn.onclick = () => {
  let week_tr = [];
  let date_week = new Date().toISOString().substring(0, 10);
  console.log(date_week);

  for (let item of transactions) {
    if (item.date === date_week) {
      week_tr.push(item); 
    }
  }

  categoriesView(week_tr);
  createChart(week_tr);

  
  getLastWeeksDate()


console.log(getLastWeeksDate());
console.log(new Date());
};
/////////////////////////////////////////

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
    let del_categ = arr.map((item) => item.category)
    for(let categs of del_categ) {
        del_dublicate.push(categs);
        var unique = del_dublicate.filter((x, i) => del_dublicate.indexOf(x) === i);
      }
      
      console.log(del_categ);
      console.log(del_dublicate);
      console.log(unique);
      
  if (categ_chart) {
    categ_chart.destroy();
  }

  categ_chart = new Chart(categ_canvas, {
    type: "bar",
    data: {
      labels: unique,
      datasets: [
        {
          label: "Acquisitions by year",
          data: arr.map((item) => item.amount),
        },
      ],
    },
    
  });

}


///////////////////////////////////////////////
function getLastWeeksDate() {
  const now = new Date();

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 7,
  );
}
// // 👇️ Wed Jul 19 2023 00:00:00
// console.log(getLastWeeksDate());

// // 👇️ Wed Jul 26 2023 10:46:35
// console.log(new Date());
////////////////////////////////////////////////////