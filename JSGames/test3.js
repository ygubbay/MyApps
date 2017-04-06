const Animal = {
    legs: 2,
    name: 'Default animal',
    talk: function() {
        console.log(this.name, ' has ', this.legs, 'legs');
    }
}

const a = Animal;
a.talk();

// copies a 
const b = Object.assign({}, a, { name: 'Beau the dog', legs: 4});
b.talk();

// copies a to its prototype
const c = Object.create(a, {
    legs: { value: 4 },
    name: { value: 'Giraffe'}
})

c.talk();

// d.proto = c, d.proto.proto = a
const d = Object.create(c, {
    name: { value: 'Octopussy'},
    legs: { value: 8}
});

d.talk();


var a_talker = d.talk.bind(a);
a_talker();