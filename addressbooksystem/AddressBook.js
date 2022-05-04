// Ability to create a Address Book Contact with first and last names, address, city, state, zip, phone number and email...

class AddressBook {
    constructor(firstName, lastName, address, city, state, zipCode, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    toString() {
        return " First Name : " + this.firstName + " , Last Name " + this.lastName + " , Address : " + this.address + " , City : " + this.city +
            " , State : " + this.state + " , Zip Code : " + this.zipCode + " , Phone Number : " + this.phoneNumber + " , Email : " + this.email;
    }
}

let addressBook = new AddressBook("Mangesh", "Bhujang", "Akurdi", "Pune", "Maharashtra", "421133", "7620263999", "mangeshb9903@gmail.com");
console.log(addressBook.toString());