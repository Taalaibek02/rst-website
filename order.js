
// let store = {
//     combo: 0,
//     tuna: 0,
//     vegi: 0
// }

let counter = 0;
let totalNumber = 0;

let buttons = document.getElementsByClassName("addC");
let total = document.getElementById("total").getElementsByClassName("right")[0];
let table = document.getElementById("order").getElementsByTagName('tbody')[0];;

for (let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click", (event) => {

        switch(event.target.id){
            case "sushiCom":
                //store.combo += +document.getElementById("combo_sushi").value;
                addOrder(document.getElementById("combo_sushi").value, "Combo Sushi");
                document.getElementById("combo_sushi").value = "";
                break;
            case "tunaSus":
                //store.tuna += +document.getElementById("sushi_tuna").value;
                addOrder(document.getElementById("sushi_tuna").value, "Tuna Sushi");
                document.getElementById("sushi_tuna").value = "";
                break;
            case "vegiSus":
                //store.vegi += +document.getElementById("sushi_vegetarian").value;
                addOrder(document.getElementById("sushi_vegetarian").value, "Vegetarian Sushi");
                document.getElementById("sushi_vegetarian").value = "";
                break;
            case "wined":
                //store.vegi += +document.getElementById("sushi_vegetarian").value;
                addOrder(document.getElementById("red_wine").value, "Red Wine");
                document.getElementById("red_wine").value = "";
                break;
            case "mochitod":
                //store.vegi += +document.getElementById("sushi_vegetarian").value;
                addOrder(document.getElementById("amochito").value, "Mochito");
                document.getElementById("amochito").value = "";
                break;
            case "dessertd":
                //store.vegi += +document.getElementById("sushi_vegetarian").value;
                addOrder(document.getElementById("cheesecake").value, "Cheesecake");
                document.getElementById("cheesecake").value = "";
                break;
            default:
                break;
        }
    })
};

function addOrder(number, name){

    let newRow = table.insertRow(counter);
    counter++;

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerHTML = name;
    cell2.innerHTML = number;
    
    totalNumber += +number;
    total.innerHTML = totalNumber;
}

function undo(){

    if(totalNumber > 0){
        let row = table.rows[counter-1];

        totalNumber -= +row.cells[1].innerHTML;
        total.innerHTML = totalNumber;

        table.deleteRow(counter-1);
        counter--;
    }

}

function show_tabcontent(index){
    if(index == 1){
        document.getElementById("sushi").style.visibility="visible";
        document.getElementById("drinks").style.visibility="hidden";
        document.getElementById("dessert").style.visibility="hidden";
        document.getElementById("tsushi").style.backgroundColor="white";
        document.getElementById("tsushi").style.color="black";
        document.getElementById("tdrinks").style.backgroundColor="pink";
        document.getElementById("tdrinks").style.color="purple";
        document.getElementById("tdessert").style.backgroundColor="pink";
        document.getElementById("tdessert").style.color="purple";
    }
    else if (index == 2){
        document.getElementById("sushi").style.visibility="hidden";
        document.getElementById("drinks").style.visibility="visible";
        document.getElementById("dessert").style.visibility="hidden";
        document.getElementById("tsushi").style.backgroundColor="pink";
        document.getElementById("tsushi").style.color="purple";
        document.getElementById("tdrinks").style.backgroundColor="white";
        document.getElementById("tdrinks").style.color="black";
        document.getElementById("tdessert").style.backgroundColor="pink";
        document.getElementById("tdessert").style.color="purple";
    }
    else{
        document.getElementById("sushi").style.visibility="hidden";
        document.getElementById("drinks").style.visibility="hidden";
        document.getElementById("dessert").style.visibility="visible";
        document.getElementById("tsushi").style.backgroundColor="pink";
        document.getElementById("tsushi").style.color="purple";
        document.getElementById("tdrinks").style.backgroundColor="pink";
        document.getElementById("tdrinks").style.color="purple";
        document.getElementById("tdessert").style.backgroundColor="white";
        document.getElementById("tdessert").style.color="black";
    }
}

function currentDate(){

    var currentdate = new Date();
    if (currentdate.getMinutes()<10){
        var datetime = currentdate.getDate()+"/"+
        (currentdate.getMonth()+1)+"/" + currentdate.getFullYear()
        +"  " + currentdate.getHours()+":0"+currentdate.getMinutes();
    }
    else {
        var datetime = currentdate.getDate()+"/"+
        (currentdate.getMonth()+1)+"/" + currentdate.getFullYear()
        +"  " + currentdate.getHours()+":"+currentdate.getMinutes();
    }
    document.getElementById("currentDate").innerHTML = datetime;    
}