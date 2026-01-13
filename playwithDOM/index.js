console.log("Hello, from JS!");

// let h1Element =document.getElementsByTagName("h1");
// console.log(h1Element);

// let firsth1Element=h1Element[0];
// console.log(firsth1Element);
// console.log(firsth1Element.innerText);
// firsth1Element.innerText="Practicing DOM Manipulation";


const pElement1 =document.createElement("p");
pElement1.innerText="innerHTML property refers to the HTML inside an element";

const divElement =document.getElementById("facts-list");
divElement.appendChild(pElement1);

const pElement2 =document.createElement("p");
pElement2.innerText="append() or appendChild() methods can add a new child element";
divElement.append(pElement2);


// // Wrap the logic from previous task in a function

//  // usig fuction add elemenet and create element

function addNewFact(factText){
  const para =document.createElement("p");
  para.innerText =factText;

  const divelement =document.getElementById("facts-list");
  divElement.appendChild(para);
}

addNewFact("INNER HTML PROPERTY REFERS TO THE HTML inside an element");
addNewFact("append() or appendChild() methods can add a new child element");



//   factsListDiv.innerText ="<p>Browser creates DOM from HTML content</p><p>Developers can access the DOM using the DOM APIs</p><p>innerHTML property refers to the HTML inside an element</p>"


// // Method 1

let factsDiv =document.getElementById("facts-list");
// factsDiv.innerHTML =

//   "<p>Browser creates DOM from HTML content..........</p>" +

//   "<p>Developers can access the DOM using the DOM APIs...........</p>" +

//   "<p>innerHTML property refers to the HTML inside an element........</p>";


// // Method 2

// factsDiv.innerHTML = `

//     <p>Browser creates DOM from HTML content....</p>

//     <p>Developers can access the DOM using the DOM APIs...</p>

//     <p>innerHTML property refers to the HTML inside an element..</p>

//     `;


//create table 

let tableDivElement =document.getElementById("table-div");
tableDivElement.innerHTML=`
    <table border="1" width="400px"> 

            <thead> 

                <tr>

                    <td>Id</td>

                    <td>Name</td>

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td>1</td>

                <td>Ramesh</td>

                </tr>

            </tbody>

        </table>`;

  // // function table
  
  function loadTable(){
    let table = document.createElement("table");
    table.setAttribute("border","solid");
    table.setAttribute("width","400px");

    let thead =document.createElement("thead");
    thead.innerHTML=`
         <tr>
            <th>Id</th>
            <th>Name</th>
         </tr>
    `;
    table.append(thead);

    let tbody =document.createElement(tbody);
    let trow =document.createElement("tr");
    trow.innerHTML =`
          <td>1</td>
          <td>Rajesh</td>
    `;
    tbody.appendChild(trow);
    table.appendChild(tbody);

    let tableDivElement2 =document.getElementById("table-div");
    tableDivElement2.append(table)

  }
  loadTable();
   function getStyledTable() {

    let table = document.createElement("table");
  
  
    table.setAttribute("border", "solid");
  
    table.setAttribute("width", "400px");
  
  
    return table;
  
  }

  
function loadTableRefactored() {

  // Create <table> element with styles

  let table = getStyledTable();


  // Set newly created <table> element inside the div container

  document.getElementById("table-div").append(table);

}


loadTableRefactored();



function getTableHeader() {

  let thead = document.createElement("thead");

  thead.innerHTML = `

    <tr>

        <th>Id</th>

        <th>Name</th>

    </tr>

  `;

  return thead;

}


function loadTableRefactored() {

  // Create <table> element with styles

  let table = getStyledTable();


  // Create table header

  let thead = getTableHeader();

  table.append(thead);


  // Set newly created <table> element inside the div container

  document.getElementById("table-div").append(table);

}

function getStudentTableRow(id, name) {

  let tRow = document.createElement("tr");


  tRow.innerHTML = `

    <td>${id}</td>

    <td>${name}</td>

  `;


  return tRow;

}


function getStudentTableRow(id, name) {

  let tRow = document.createElement("tr");


  let idColumnElement = document.createElement("td");

  idColumnElement.innerText = id;


  let nameColumnElement = document.createElement("td");

  nameColumnElement.innerText = name;


  tRow.appendChild(idColumnElement);

  tRow.appendChild(nameColumnElement);


  return tRow;

}



function loadTableRefactored() {

  // Create <table> element with styles

  let table = getStyledTable();


  // Create table header

  let thead = getTableHeader();

  table.append(thead);


  // Create body element

  let tbody = document.createElement("tbody");


  // Create a table row and append it to the body

  let tRow = getStudentTableRow("1", "Ramesh");


  // Append <tr> element to <tbody>

  tbody.appendChild(tRow);


  // Append <tbody> element to <table>

  table.appendChild(tbody);


  // Set newly created <table> element inside the div container

  document.getElementById("table-div").append(table);

}



function getStyledTable() {

  let table = document.createElement("table");


  table.setAttribute("border", "solid");

  table.setAttribute("width", "400px");


  return table;

}

function loadTableRefactored() {

  // Create <table> element with styles

  let table = getStyledTable();


  // Set newly created <table> element inside the div container

  document.getElementById("table-div").append(table);

}


loadTableRefactored();


function getTableHeader() {

  let thead = document.createElement("thead");

  thead.innerHTML = `

    <tr>

        <th>Id</th>

        <th>Name</th>

    </tr>

  `;

  return thead;

}


function loadTableRefactored() {

  // Create <table> element with styles

  let table = getStyledTable();


  // Create table header

  let thead = getTableHeader();

  table.append(thead);


  // Set newly created <table> element inside the div container

  document.getElementById("table-div").append(table);

}


function getStudentTableRow(id, name) {

  let tRow = document.createElement("tr");


  tRow.innerHTML = `

    <td>${id}</td>

    <td>${name}</td>

  `;


  return tRow;

}


function getStudentTableRow(id, name) {

  let tRow = document.createElement("tr");


  let idColumnElement = document.createElement("td");

  idColumnElement.innerText = id;


  let nameColumnElement = document.createElement("td");

  nameColumnElement.innerText = name;


  tRow.appendChild(idColumnElement);

  tRow.appendChild(nameColumnElement);


  return tRow;

}


function loadTableRefactored() {

  // Create <table> element with styles

  let table = getStyledTable();


  // Create table header

  let thead = getTableHeader();

  table.append(thead);


  // Create body element

  let tbody = document.createElement("tbody");


  // Create a table row and append it to the body

  let tRow = getStudentTableRow("1", "Ramesh");


  // Append <tr> element to <tbody>

  tbody.appendChild(tRow);


  // Append <tbody> element to <table>

  table.appendChild(tbody);


  // Set newly created <table> element inside the div container

  document.getElementById("table-div").append(table);

}


 let tabledivElement =document.getElementById("table-div");
    tabledivElement.innerHTML=`
     <table border="1" width="400px"> 

        <thead> 

            <tr>

                <td>Id</td>

                <td>Name</td>

            </tr>

        </thead>

        <tbody>

            <tr>

                <td>1</td>

            <td>Ramesh</td>

            </tr>

        </tbody>

    </table>

    `;


    // // table using fuction 
    function loadTable(){
        let table=document.createElement("table");
            table.setAttribute("border","solid");
            table.setAttribute("width","400px");
            //table.setAttribute("style", "background-color:red;");
           // table.style.backgroundColor = "red";
        let thead =document.createElement("thead");
        thead.innerHTML=`<tr>
                           <th>ID</th>
                           <th>Name</th>
                      </tr>`;
        table.append(thead);
        
        let tbody =document.createElement("tbody");
        let tRow = document.createElement("tr")
        tRow.innerHTML =`<td>1</td>
                         <td>Rajesh</td>`;
        
        tbody.appendChild(tRow);
        table.appendChild(tbody);

        document.getElementById("table-div2").append(table);
        document.getElementById("table-div2").style.paddingTop="10px";

    }
    loadTable();

    // //table3
    function loadTableRefactored(){
        let table =getStyleTable();

        let thead =getTableHeader();
        table.appendChild(thead);

        let tbody =document.createElement("tbody");

        let trow1 =getStudentTableRow("1","Rakesh");
        let trow2 =getStudentTableRow("2","Mangesh");

        tbody.appendChild(trow1);
        tbody.appendChild(trow2);
        table.append(tbody);        

        document.getElementById("table-div3").style.paddingTop="10px";
        document.getElementById("table-div3").append(table);

    }
    loadTableRefactored();
    
    function getStyleTable(){
        let table =document.createElement("table");

        table.setAttribute("border","solid");
        table.setAttribute("width","400px");

        return table;
    }

    function getTableHeader(){
        let thead =document.createElement("thead")
        thead.innerHTML=` 
        <tr>

        <th>Id</th>

        <th>Name</th>

    </tr>`;
    return thead;
    }

    // function getStudentTableRow(id, name){
    //     let tRow =document.createElement("tr");
    //     tRow.innerHTML=` <td>{id}</td>
    //                      <td>{name}</td>
    //     `;
    //     return tRow;
    // }
    
    function getStudentTableRow(id, name) {

    let tRow = document.createElement("tr");


    let idColumnElement = document.createElement("td");

    idColumnElement.innerText = id;


    let nameColumnElement = document.createElement("td");

    nameColumnElement.innerText = name;


    tRow.appendChild(idColumnElement);

    tRow.appendChild(nameColumnElement);


    return tRow;

    }