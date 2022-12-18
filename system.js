let FirstName = prompt('First Name');
let LastName = prompt('Last Name');
let Address = prompt('Address');
let Age = parseInt(prompt('Age'));

let array = [FirstName, LastName, Address, Age];

if (Age < 2) {
    display(LastName, FirstName, Address, "Infant")
} else if (Age > 2 && Age <= 4) {
    display(LastName, FirstName, Address, "Toddler")
} else if (Age > 5 && Age <= 12){
    display(LastName, FirstName, Address, "Child")
} else if (Age > 13 && Age <= 19){
    display(LastName, FirstName, Address, "Teen")
} else if (Age > 20 && Age <= 39){
    display(LastName, FirstName, Address, "Adult")
} else if (Age > 40 && Age <= 59){
    display(LastName, FirstName, Address, "Middle aged-adult")
} else if (Age > 60){
    display(LastName, FirstName, Address, "Seniot Adult")
} else {
    console.log("please input correct data")
}

function display(lastname, firstname, address, ageRole){
    console.log(lastname + ' ' + firstname + ' ' + 'you are a/an' + ' ' + ageRole + ',' + ' ' + 'and your adress is' + ' ' + address)
    const div = document.createElement("div");
    div.textContent = lastname + ' ' + firstname + ' ' + 'you are a/an' + ' ' + ageRole + ',' + ' ' + 'and your adress is' + ' ' + address;
    document.body.appendChild(div);
}
