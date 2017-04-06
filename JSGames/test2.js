class Animal
{
    constructor() {
        this.legs = 2;
    }
    eat() {
        console.log('animal eat');
    }

    talk() {
        console.log('i have ', this.legs, ' legs');
    }
}

const a = new Animal();
a.talk();

class Dog extends Animal
{
    constructor() {
        super();

        this.legs = 4;
    }
}

const d = new Dog();
d.talk();