const button = document.getElementById("btn");

button.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.hello();
});

const aBigNumber = 2183902139821n;
const anotherBgNumber = BigInt(2183902139821);

console.log(aBigNumber);
console.log(anotherBgNumber);

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => reject("resolve"));
const proesolve = new Promise((resolve, reject) => reject("resolve"));

Promise.allSettled([promise1, promise2, promise3])
   .then(response => console.log(response));


console.log(window);
console.log(globalThis);

const foo = null ?? 'default string';
console.log(foo);

const user = {};
console.log(user?.profile.email?.email);

if(user?.profile?.email) {
    console.log('email')
} else {
    console.log('fail');
}