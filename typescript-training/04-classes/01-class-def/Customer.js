var Customer = /** @class */ (function () {
    function Customer(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    return Customer;
}());
var myCustomer = new Customer("Haiau", "Bui");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
