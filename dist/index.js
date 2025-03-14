"use strict";
console.log("Hello world");
let age = 20;
if (age > 18)
    age += 20;
console.log("Allowed");
let sales = 123456;
let course = "TypeScript";
let isPublished = true;
let level;
let numbers = [];
let user = [1, "Edward"];
console.log(user);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = { id: 1,
    name: "Edward",
    retired: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseFloat(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10'));
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log('Hello ', name.toLowerCase());
    else
        console.log('Hola!');
}
greet("Arigathanks");
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map