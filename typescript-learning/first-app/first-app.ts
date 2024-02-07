let userName: string = 'Gareth';

userName = 'Gareth';

let userAge = 37;

let isValid: boolean;

isValid = true;

// Making sense of generic types 

//Array is a type of Generic Type, Array<Role> two types woring together , but you can build your own, see below

//The <T> below is a gernic type place holder at typ will eventually be place in there to work with the DataStorage object type.

// You define generic types and then you can reuse them with different types, the below is a sturcture to store different type faces.

// the <T> below is called a placeholder type.

type DataStorage<T> = {
    storage: T[];
    add: () => void;
}

// As you can see below the string replace the <T>, so the type a bove is a template to store different data types 

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
}


const userStorage: DataStorage<User> = {
    storage: [],
    add(user) { }
}


// Generic function below 

function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    };
}

const newUser = merge<{ name: string }, { age: number }>(
    { name: 'Max' },
    { age: 32 }
);

newUser.age;





























