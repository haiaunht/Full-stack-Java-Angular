class Customer {
  private _firstName: string;
  private _lastName: string;

  constructor(first: string, last: string) {
    this._firstName = first;
    this._lastName = last;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }
}

let myCustomer = new Customer("Haiau", "Bui");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

//tsc --target ES5 --noEmitOnError Customer.ts so there is no error
// => create tsconfig -> tsc --init -> go to tsconfig.json file , add "noEmitOnError":true -> save
//go back out now only do tsc -> it will generate Customer.js auto
// run node Customer.js and everything will work perfectly

