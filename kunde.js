class Kunde extends User {
    constructor(email, password, firstName, lastName, phoneNumber, kundeID) {
        super(email, password);
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.kundeID = kundeID;
    }
}
/*Is this Git stuff working?