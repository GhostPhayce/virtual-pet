const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const HUNGRY = 5;
const UNFIT = 3;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
}

Pet.prototype.feed = function() {
    if ((this.hunger - 3) >= MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
}

Pet.prototype.checkUp = function() {
    if (this.fitness > UNFIT && this.hunger < HUNGRY) {
        return "I feel great!";
    } else if (this.fitness <= UNFIT && this.hunger >= HUNGRY) {
        return "I am hungry AND I need a walk.";
    } else if (this.hunger >= HUNGRY) {
        return "I am hungry.";
    } else if (this.fitness <= UNFIT) {
        return "I need a walk.";
    }
}

module.exports = Pet;