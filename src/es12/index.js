const string = "Javascrip es maravillos, con Javascript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python");
console,log(replacedString);

const replacedString2 = string.replaceAll("javascript", "python");

class Messagen {
    #show(val) {
        console.log(val);
    };
    get #add(val) {
        ...
    }
}

const message = new Messagen();
message.show('Hola!');

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
   .then(response => console.log(response));

class AnyClass {
    constructor(element) {
      this.ref = new WeakRef(element)
    }

}



let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ?? = isFalse);