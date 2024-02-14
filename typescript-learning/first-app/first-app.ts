let userName: string = 'Gareth';

let test = 'test'

let userAge = 34;

let isValid = true;



// Union types with custom name
type StringOrNum = string | number;

let userId: StringOrNum = 'abc1';
// let userId: string | number = 'abc1';

userId = 123;
userId = 'abc1';

// userId = false;

// let user: object;

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}

let user: User;

// let user: {
//     name: string;
//     age: number;
//     isAdmin: boolean;
//     id: string | number;
// };

user = {
    name: 'Max',
    age: 34,
    isAdmin: true,
    id: 'abc' // 123
};

// user = {}; // Extra type saftey when working with objects

// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[]

hobbies = ['Sports', 'Cooking', 'Reading'];
// hobbies = [1, 2, 3];

// When your not return a value
// function add(a: number, b: number): void {
//     const result = a + b;

//     return result;
// }

// You can explicitly state the return type, see line below but not the normal 
// function add(a: number, b: number): number {}
// that isnt required normanly 

function add(a: number, b: number) {
    const result = a + b;

    return result;
};

// function type below
type AddFn = (a: number, b: number) =>  number

function calculate(
    a: number, 
    b: number, 
    calcFn: AddFn
) {
    calcFn(a, b);
}

calculate(2, 5, add);

interface Credentials {
    password: string;
    email: string;
}

// interface keyword allows you to extend your interface
// interface Credentials {
//     mode: string;
// }



let creds: Credentials;

creds = {
    password: 'abc',
    email: 'email@google.com'
}

// You can use interfaces as contracts in classes 
class AuthCredentials implements Credentials {
    email: string;
    password: string;
    // must include above properties when using the Credentials interface, but can include extra propeies when dining class. 

    userName: string;
}

function login(credentials: Credentials) {

}

login(new AuthCredentials())


// Merging Types, see beelow
type Admin = {
    permissions: string[];
}

type AppUser = {
    userName: string;
}

type AppAdmin = Admin & AppUser;

let admin: AppAdmin;

admin = {
    permissions: ['login'],
    userName: 'Gareth'
};


// Mergin Interfaces, see below
interface AdminInter {
    permissions: string[]
}

interface AppUserInter {
    userName: string,
}

interface AppAdminInter extends AdminInter, AppUserInter {

}

let adminInter: AppAdminInter;

adminInter = {
    permissions: ['login'],
    userName: 'Gareth'
}



type Role = 'admin' | 'user' | 'editor';

// literal types below when you want to
let role: Role;



role = 'admin';
role = 'user';
role = 'editor';


//  Type guarding example below using the javascript function type of
function performAction(action: string | number, role: Role) {
    if (role === 'admin' && typeof action === 'string') {
        //...
    }
}

// Understanding generic types feature in typescript // Built in generic types

let roles: Array<Role>;
roles = ['admin', 'editor'];


// Making sense of generic types 

//Array is a type of Generic Type, Array<Role> two types woring together , but you can build your own, see below

//The <T> below is a gernic type place holder a type will eventually be place in there to work with the DataStorage object type.

// You define generic types and then you can reuse them with different types, the below is a sturcture to store different type faces.

// the <T> below is called a placeholder type.

type DataStorage<T> = {
    storage: T[];
    add: (T) => void;
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





























