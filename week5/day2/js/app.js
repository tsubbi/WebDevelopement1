// response => response.json() is the same as 
// function (response) {
//     return response.json()
// }
// reference video: https://www.youtube.com/watch?v=C3dfjyft_m4&ab_channel=JonathanSoma

let currentFoods = [];
const inputs = [document.querySelector('.name-input'), document.querySelector('.price-input'), document.getElementById("popularity-input")];
const submitButton = document.querySelector('.add-food');
const dataBody = document.getElementById("food-data");
const table = document.querySelector("table");
const tableHeadCells = document.querySelectorAll("th");


// fetch the json file
fetch("food.json")
    // then transform the json file into data
    .then(response => response.json())
    // then I extract the foods from data
    .then(data => {
        currentFoods = data.foods;
        if (currentFoods.length > 0) {

            currentFoods.forEach(food => {
                //// tmp += `<tr><td>${food.name}</td><td>$${food.price}</td><td>${food.popularity}</td></tr>`;
                //// dataBody.innerHTML = tmp

                let rowNode = document.createElement("tr");
                // I extract all the values under every object
                let values = Object.values(food);
                // for each value, I created node and append into tr
                values.forEach(item => {
                    let textNode = document.createTextNode(item);
                    let cellNode = document.createElement("td");
                    cellNode.appendChild(textNode);
                    rowNode.appendChild(cellNode);
                });
                dataBody.appendChild(rowNode);
            });
        }
});

// event Listener
submitButton.addEventListener('click', addFood);


// functions
function addFood(event) {
    event.preventDefault();
    // preventment
    if (inputs[0].value === "" || inputs[1].value === "") {
        alert("please fill in the entries");
        return;
    }
    let rowNode = document.createElement("tr");
    inputs.forEach(input => {
        let textNode = document.createTextNode(input.value);
        let cellNode = document.createElement("td");
        cellNode.appendChild(textNode);
        rowNode.appendChild(cellNode);
        // reset the value to default
        if (input.type == "text") {
            input.value = ""
        } else {
            input.selectedIndex = 0;
        }
    });

    dataBody.appendChild(rowNode);

    alert("the food is entered!");
}

// TODO sorting
tableHeadCells.forEach(cell => {
    cell.addEventListener('click', function() {
        let column = cell.getAttribute('data-column');
        let order = cell.getAttribute('data-order');

        // console.log(column);
        switch (order) {
            case "desc":
                console.log("it's desc")
                break;
            default:
                console.log("it's asc");
        }
    });
});