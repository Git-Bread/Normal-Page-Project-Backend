let url = "http://127.0.0.1:3000";

window.onload = async function (){
    await populate();
}

//generate all objects
async function populate() {
    //get
    let res = await fetch(url + "/menuItems", {
        method: 'GET',
        body: null,
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())

    //create all objects
    let itemList = document.getElementById("menuItems");
    for (let index = 0; index < res.length; index++) {

        let container = document.createElement("div");
        let subcontainer2 = document.createElement("div");
        let subcontainer = document.createElement("div");
        let name = document.createElement("h3");
        let price = document.createElement("p");
        let description = document.createElement("p");
        let allergies = document.createElement("p")

        name.innerHTML = res[index].name;
        description.innerHTML = res[index].description;
        price.innerHTML = "Price: " + res[index].price + " (EUR)";

        //allows no input to be valid input
        if (res[index].allergies != "no allergies") {
            allergies.innerHTML = "Allergies: ";
            for (let yndex = 0; yndex < res[index].allergies.length; yndex++) {
                allergies.innerHTML += res[index].allergies[yndex];
            }
        }
        else {
            allergies.innerHTML = "Allergies: " + res[0].allergies;
        }

        //the append of all appends
        subcontainer.append(name);
        subcontainer.append(description);
        subcontainer2.append(allergies);
        subcontainer2.append(price);
        container.append(subcontainer);
        container.append(subcontainer2);
        itemList?.append(container);
    }
}
