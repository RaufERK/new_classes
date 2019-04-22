// console.log('test')

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(this.name, 'goes', this.voice);
    }
}

const dog = new Animal('Bob', 'gagav');
dog.say();

class Bird extends Animal {
    constructor(name, voice, canFly) {
        super()
    }

}

const duck = new Bird('Duck', 'quack');
duck.say();