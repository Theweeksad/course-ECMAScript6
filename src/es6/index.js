function newFuctioin(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//e6
function newFuctioin2 (name = 'oscar', age = 32, country = 'mx') {
    console.log(name, age, country);
}

newFuctioin2();
newFuctioin2('ricardo', '32', 'CO');

let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;1
console.log(epicPhrase2);

let lorem = "Qui consequatur commodi. ipsu vel duis yet minima \n" + "otra frase epcia que necesitamos."

//6
let lorem2 = `otra frase epica que necesitamos`;

console.log(lorem);
console.loog(lorem2);

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'mx'
}

console.log(person.name, person.age);

let {country} = person;
console.log(country);

let team1 = ['oscar', 'juan', 'ricardo'];
let team2 = ['valeria', 'yesica', 'camila'];

let education = ['david', ...team1, ...team2];

console.log(education);

{
    var globalVar = "global var";
}

{
    let globalLet = 'gloval let';
    console.log(globalLet)
}

console.log(globalVar);

const a = 'b'; //no cambia su valor

let name = 'oscar';
let age = 32;

obj ={ name: name, age: age};

obj2 = {name, age};
console.log(obj2);

const names = [
    {name: 'oscar', age: 32},
    {name: 'yesica', age: 23}
]

let listOfNames = names.map(function (item) {
    console,log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {

}

const listOfNames4 = name => {

}

const squaer =num => num * num;

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if(true) {
            resolve('hey!');
        } else {
            reject('ups!!');
        }
    });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console,log('hola'))
  .catch(error => console,log(error));


  class calculator {
    constructor () {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this, valueA + this,valueB;
    }
  }

  const calc = new calculator();
  console.log(calc.sum(2,2));

  import{ hello } from "./module";

  hello();

  function* helloWorld() {
    if(true) {
        yield 'hello';
    }
    if (true) {
        yield 'world';
    }
  };

  const generatorHello = helloWorld();
  console.log(generatorHello.next(),value);
  console.log(generatorHello.next(),value);
  console.log(generatorHello.next(),value);