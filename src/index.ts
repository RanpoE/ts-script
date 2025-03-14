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

console.log(user)
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

// Alias can define custom type

type Employee = {
    readonly id: number,
    name: string,
}

// Union types

function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2
    else 
        return parseFloat(weight) * 2.2
}

console.log(kgToLbs(10))
console.log(kgToLbs('10'))

// Intersection type
type Dragable = {
    drag: () => void
}

type Reziseable = {
    resize: () => void
}

type UIWidget = Dragable & Reziseable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},

}

// Literal Types
// Literal (exact, specific)
type Quantity = 50 | 100
let quantity: Quantity = 100;

// Nullable Types

function greet(name: string | null): void {
    if (name)
        console.log('Hello ',name.toLowerCase())
    else
        console.log('Hola!')
}

greet("Arigathanks")

type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date }
}

let customer = getCustomer(1)
// Optional property access operator '?.'
console.log(customer?.birthday)

// Optional call
let log: any = null
log?.('a')