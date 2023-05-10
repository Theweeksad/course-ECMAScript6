const data = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana',
}

const entries = Object.entries(data);
console.log (entries);
console.log(entries, length);

const date = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana',
}

const values = Object.values(date);
console.log(values);
console.log(values.length)


const strign = 'hello';
console.log(strign.padStart(7, 'hi'))
console.log(String.padEnd(12, '-----'))
console.log('food'.padEnd(12, ' -----'))

const obj = {
    name: 'oscar',
}

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};