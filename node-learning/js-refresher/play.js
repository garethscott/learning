const addOne = a => a + 1;

const person = {
    name: 'Gareth',
    age: 39,
    greet() {
        console.log('Hi i am ' + this.name)
    }
}

person.greet();

const hobbies = ['Spots', 'Cooking'];
for (hobby of hobbies) {
    console.log(hobby)
}

const copyHobbies = [...hobbies];

// rest operators

const toArray = (...args) =>  args;

// object destructuring 

const printName = ({ name }) => {
    console.log(name)
}

printName(person);

const { name, age } = person;

// array distructuring

const [hobby1, hobby2] = hobbies;

// async and promises 



