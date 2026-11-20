let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

function showContact(contacts, index) {
    if (contacts instanceof Array && typeof index === 'number' && index >= 0 && index < contacts.length) {
        let contact = contacts[index];
        console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    } else {
        console.log("Error: Invalid arguments passed to showContact.");
    }
}

function showAllContacts(contacts) {
    if (contacts instanceof Array) {
        for (let i = 0; i < contacts.length; i++) {
            console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
        }
    } else {
        console.log("Error: The provided argument is not an array.");
    }
}

function addNewContact(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
        console.log("New contact added successfully.");
    } else {
        console.log("Error: Invalid arguments passed to addNewContact.");
    }
}

let action = prompt("Enter an action (show, showAll, add):");
switch (action) {
    case "show":
        let index = parseInt(prompt("Enter the index of the contact to show:"));
        showContact(contacts, index);
        break;
    case "showAll":
        showAllContacts(contacts);
        break;
    case "add":
        let name = prompt("Enter the name of the new contact:");
        let phone = prompt("Enter the phone number of the new contact:");
        let email = prompt("Enter the email of the new contact:");
        addNewContact(contacts, name, phone, email);
        break;
    default:
        console.log("Invalid action. Please enter 'show', 'showAll', or 'add'.");
}

let sortAction = prompt("Enter a sort action (sortByName, sortByPhone, sortByEmail):");
switch (sortAction) {
    case "sortByName":
        contacts.sort((a, b) => a.name.localeCompare(b.name));
        console.log("Contacts sorted by name.");
        break;
    case "sortByPhone":
        contacts.sort((a, b) => a.phone.localeCompare(b.phone));
        console.log("Contacts sorted by phone.");
        break;
    case "sortByEmail":
        contacts.sort((a, b) => a.email.localeCompare(b.email));
        console.log("Contacts sorted by email.");
        break;
    default:
        console.log("Invalid sort action. Please enter 'sortByName', 'sortByPhone', or 'sortByEmail'.");
}