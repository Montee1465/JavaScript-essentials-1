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

    let action = prompt("Choose an option first, all, last, quit, new:");

if (action === "first") {
        console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    } else if (action === "last") {
        console.log(`${contacts[2].name} / ${contacts[2].phone} / ${contacts[2].email}`);
    } else if (action === "new") {
        let newname = prompt("Enter name:");
        let newphone = prompt("Enter phone number:");
        let newemail = prompt("Enter email address:");
        let newcontact = { newname, newphone, newemail };
        if (newcontact = true) {
        contacts.push({
            name: newname,
            phone: newphone,
            email: newemail
        });
        console.log("New contact added.");
        console.log(newname, newphone, newemail);
    } else {
        console.log("Failed to add new contact.");
    }

    } else if (action === "all") {
    for (let contact of contacts) {
        console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    }
    } else if (action === "quit") {
    console.log("Exiting the program.");
    } else if (action !== "first" && action !== "last" && action !== "new" && action !== "all" && action !== "quit") {
        console.log("Invalid option selected.");
    }
else (action !== null); {
    console.log("Invalid option selected.");
}