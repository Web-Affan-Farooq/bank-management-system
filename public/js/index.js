class BankAccount {
    constructor(firstName,lastName,gender,age,phoneNumber,email,accountPassword) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.accountPassword = accountPassword;
    }
};

class BankOperations {};

let bankDatabase = [];


let navOptions = document.querySelectorAll(".nav-options");

let loginOption = navOptions[0];



