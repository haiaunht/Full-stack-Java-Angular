class Customer {
  firstName : string;
  lastName : string;

  constructor(first : string, last : string) {
    this.firstName = first;
    this.lastName = last;
  }
}

let myCustomer = new Customer("Haiau", "Bui");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName)