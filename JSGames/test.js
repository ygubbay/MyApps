// Object inheritance with Object.Create
var animal = {

        name: name,
        legs: 2,

        show: function()
        {
            console.log('name ', this.name, ', legs ', this.legs);
        }
    };

var animalCreate = function(name) {

    return animal;
}


var goat = animalCreate('lucky');
goat.show();

var horse = Object.create(goat);
horse.name = 'horsey';
horse.legs = 4;
horse.show();


var cow = Object.create(animal, {
    name: { value: 'Milky' },
    legs: { value: 4},
    age: { value: 3 }
})

cow.getAge = function() {
    console.log(this.name, ' is ', this.age + ' years')
}

cow.show();
cow.getAge();


var calf = Object.create(cow, {
    name: { value: 'Calfy'},
    age: { value: 1}
})

calf.drink = function() {
    console.log(this.name + ' is drinking from mother cow');
}





var calf3 = Object.create( calf, {

    name: { value: 'Calf3'},
    age: { value: 1.2}
})

calf.specialThing = function() { console.log(this.name, ' is doing a special thing')}
calf.drink();
calf3.drink();

// this does not work because show function does not get copied
var calf2 = Object.assign( {}, calf, { name: 'Calf number 2'});
calf2.specialThing();

let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound);
    }
}


function eat()
{
    console.log('give me mackers now');

}

let eater = {
    eat
}


dog.talk();
//dog.eat();

Object.setPrototypeOf(dog, eater);
dog.eat();

let talkFunction = dog.talk.bind(dog);
talkFunction();