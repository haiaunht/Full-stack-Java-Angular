"use strict";
var Customer = /** @class */ (function () {
    function Customer(first, last) {
        this._firstName = first;
        this._lastName = last;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Haiau", "Bui");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
//tsc --target ES5 --noEmitOnError Customer.ts so there is no error
// => create tsconfig -> tsc --init
