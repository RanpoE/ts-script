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
//# sourceMappingURL=index.js.map