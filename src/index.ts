console.log("Hello world")

let age: number = 20;

if (age > 18)
    age += 20;
    console.log("Allowed");


// Auto annotates if a value was declared

let sales = 123_456;
let course = "TypeScript";
let isPublished = true;
let level;

// Arrays
let numbers: number[] = [];
// numbers.forEach(n => n.toFixed(1))

// Tuple
let user: [number, string] = [1, "Edward"]

// Enums
// PascalCase
enum Size { Small = 1, Medium, Large }

let mySize: Size = Size.Medium

console.log(mySize)

function calculateTax(income: number, taxYear=2022) : number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000)

// Objects

// let employee = { id: 1}
let employee: {
    readonly id: number,
    name: string,
    retired: (date: Date) => void

} = { id: 1, 
    name: "Edward",
    retired: (date: Date) => {
        console.log(date)
    }
}
// employee.name = "Edward"

