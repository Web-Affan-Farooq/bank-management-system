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
document.querySelector(".signup-button").addEventListener('click', function createUser() {
    let user = new BankAccount(
        document.querySelector("#first-name"),
        document.querySelector("#last-name"),
        document.querySelector("#last-name"),
    )
})
