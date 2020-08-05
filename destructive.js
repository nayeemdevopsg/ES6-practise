const person = { name: "ahmed", age: 13, gfName: "mahiha", pNum: "017193893", homeAdd: "Uttars"};


const complexObject = {name: "ahmed",
information: {
     address : "Uttara",
     home: "Dhaka",
     Country: "bangladesh"
}

}

const {Country} = complexObject.information;

console.log(Country);