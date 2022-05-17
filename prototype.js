const obj1 = {};
// console.dir(obj1);

const obj2 = new Object();
// console.dir(obj2);

const arr1 = [];
// console.dir(arr1);

const arr2 = new Array();
// console.dir(arr2);

function User(name) {
    this.name = name
    this.iam = function() {
        console.log(`I am ${name}!`)
    };
};

const user1 = new User("Makimajom");
console.dir(user1.iam());

const user2 = new User("Makiúr");
console.dir(user2);


User.prototype.iam2 = function() {
    console.log(`I am ${this.name}!`)
};

const user3 = new User("Kecske");
console.dir(user3.iam2())

// const user3Proto = Object.getPrototypeOf(user3);
const user3Proto = user3.__proto__;
console.log(user3Proto);

function CustomUser(name, role) {
    User.call(this, name)
    this.role = role
};

const user4 = new CustomUser("Kutya", "Dev");
console.dir(user4);