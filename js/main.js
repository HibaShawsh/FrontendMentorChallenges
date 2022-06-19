fetch('./data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function appendData(data) {
var chartData = document.getElementById("chart-data");
for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 
    `<ul class="chart-day-list">
    <p class="amount-details">$${data[i].amount} <p>
    <p class="day-amount-chart" style='height:calc(${data[i].amount}px + 30px);'></p>
    <li> ${data[i].day} </li>
    </ul> `;
 
    chartData.appendChild(div);
}
}
