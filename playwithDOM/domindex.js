//https://dev-tools-2-data-prod-812920491762.asia-south1.run.app/
async function getApiData() {
    let res = await fetch("https://dev-tools-2-data-prod-812920491762.asia-south1.run.app/");
    let data = await res.json();
    return data;
}


let apiData =getApiData();
//console.log(apiData);
function getTableRow(title, acRate, difficulty) {
    let tROW = document.createElement("tr");

    tROW.innerHTML = `
        <td>${title}</td>
        <td>${acRate}</td>
        <td>${difficulty}</td>
    `;

    return tROW;
}

function populateTable(questionsList) {

    let tBodyElement = document.getElementById("table-body");
    tBodyElement.innerHTML = "";

    questionsList.forEach(question => {
        let { title, acRate, difficulty } = question;
        let tRowElement = getTableRow(title, acRate, difficulty);
        tBodyElement.appendChild(tRowElement);
    });
}

let questionsList = [];

async function loadData() {
    let apiData = await getApiData();   // ✅ WAIT HERE
    questionsList = apiData.problemsetQuestionList.questions;
    populateTable(questionsList);
}

loadData();


//let questionsList = apiData.problemsetQuestionList.questions;


populateTable(questionsList);

let acceptanceHeaderElement =
    document.querySelector("#questions-table > thead > tr > th:nth-child(2)");

acceptanceHeaderElement.addEventListener("click", function () {
    let sortedArray = sortQuestionsByAcceptanceRate(questionsList);
    populateTable(sortedArray);
});



// acceptanceHeaderElement.addEventListener('click', function() {

//     let sortedArray = sortQuestionsByAcceptanceRate(questionsList);

//     populateTable(sortedArray);

// })
