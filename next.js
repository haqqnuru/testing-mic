// if
let name = 'billy';

if (name === "billy") {
    console.log('hello billy');
}

// if else

let my = 'hmed';
if (my === 'ahmed') {
    console.log('hello ahmed');
    
} else {
    console.log('I dont know you');
    
}

// arrays

let list = ['cat', 'dog', 'food', 'wise'];
console.log(list);
console.log(list[2]);

// objects 

let user = {username:'john', age: 32, occupation: 'trader', maritalstatus: 'married'};
console.log(user);
console.log(user.occupation);
// properties to user
user.food = 'apple';
console.log(user);

// loop
let todo =['micheal', 'naima', 'jami', 'mukarama', 'me'];

for (let index = 0; index < todo.length; index++) {
    console.log(todo[index]);
    
}

//while loop  // do while is opposite
let counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++;
}


// for each better
todo.forEach(element => {
    console.log(element);
    
});


// for of

for (const items of todo) {
    console.log(items);
    
}

 // switch

 function moveCommaned(Dirrection) {
let whathappens;
switch (Dirrection) {
    case 'forword': whathappens = 'I am moving forword';
        
        break;

        case 'back': whathappens = 'I am moving back';
        
        break;
        case 'right': whathappens = 'I am moving right';
        
        break;
        case 'left': whathappens = 'I am moving left';
        
        break;

    default: whathappens = 'doing nothing';
        break;

        
}    return whathappens;
 }
console.log(moveCommaned('back'));



function fun() {
    let f = "my name";
    console.log (f);
    
}
fun();

// templete string

const name1 = 'sally';
const age1 = 32;
const pet = 'goat';

const answer = `my name is ${name1} and I am ${200 - age1} years old. My pet is a ${pet}`;
console.log(answer);

// defult argument

function gost(namee = '', agee = 34, pee ='snake') {
   console.log (`my name is ${namee} and I am ${200 - agee} years old. My pet is a ${pee}`);
    
}
gost('nana', 29, 'kkkk');


const wawa = [1, 2, 3, 5,4];

//map

const mi = wawa.map((num) => { return num});

console.log(mi);

// filter 

const yi = wawa.filter((num) => { return num > 3});

console.log(yi);

// reduce

const zi = wawa.reduce((acc, num) => { return acc + num});

console.log(zi);


// instantiation

class Player {
    constructor(naame, type) {
      this.naame = naame;
      this.type = type;  
    }

    introduce() {
        console.log(`I am ${this.naame} and a ${this.type}`);
    }
}

class Wizard extends Player {
    
    constructor(naame, type) {
        super(naame, type)
            
    }
    play() {
            console.log(`Weee I'am a ${this.type}`);
        }
}

const wizard1 = new Wizard('Kofi', 'Mayi');
console.log(wizard1);
wizard1.play();
wizard1.introduce();

//cloning

obj = {a: "a", b:"b", c:"c"};
clone = {... obj};
console.log(clone);




