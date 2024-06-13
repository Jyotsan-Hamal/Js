let Car = {
    company : 'ford',
    model:'mustang gt50',
    color:'matte black',
    price:'out of your awkaat'
}

let Apple = {
    shape: 'square',
    color: 'green',
    founder:'steve jobs'
}

let car = Car
car.color = "black"
car.company = "miyata"
car.price =9000

console.log(car)

let a = [1, 2, 3, 4]

let b = [...a]

b[0] =5

console.log("-------------------------------------")
for (let key in Car){
    console.log(Car[key])
}

console.log("-------------------------------------")
for(let key in Apple){
    console.log(Apple[key])
}

let Nepal = {
    capital:'Kathmandu',
    population:1000000
}

console.log(`My country's capital is ${Nepal.capital} and it's population is ${Nepal.population}`)

console.log("---------------------------------------")
let Bikes = {
    model:'mitsubishi',
    tire:'2',
    color:'black'
}

console.log(`My bike model is ${Bikes.model} and it's color is ${Bikes.color}`)

console.log("--------------------------------------------")

let arr1 = [1,2,6,3,4,9,10,30,22];
let arr2 = []

arr1.push(12)
arr1.pop()

console.log(arr1.length)


let alph = ['apple','ball','cat','dog']
alph.push('eleganto')
console.log(alph)

let name = "Power Rangers"

console.log(name.toUpperCase())

console.log(name.toLowerCase())

