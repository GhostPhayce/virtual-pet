const MAX_FITNESS = 10;
const MIN_FITNESS = 0;
const MAX_HUNGER = 10;
const MIN_HUNGER = 0;
const HUNGRY = 5;
const UNFIT = 3;
const MAX_AGE = 30;
const petHasDiedMessage = "Your pet is no longer alive :(";

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAX_FITNESS;
}

Pet.prototype = {
    get isAlive() {
      if (this.fitness <= MIN_FITNESS || this.hunger >= MAX_HUNGER || this.age >= MAX_AGE) {
        return false;
      } else {
        return true;
      }
    },
  };

Pet.prototype.growUp = function() {
    if (this.isAlive === false) {
        throw new Error (petHasDiedMessage);
    } else {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }
}

Pet.prototype.walk = function() {
    if (this.isAlive === false) {
        throw new Error (petHasDiedMessage);
    }
    if (this.fitness + 4 <= MAX_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAX_FITNESS;
    }

}

Pet.prototype.feed = function() {
    if (this.isAlive === false) {
        throw new Error (petHasDiedMessage);
    }
    if (this.hunger - 3 >= MIN_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MIN_HUNGER;
    }
}

Pet.prototype.checkUp = function() {
    if (this.isAlive === false) {
        throw new Error (petHasDiedMessage);
    }
    if (this.fitness > UNFIT && this.hunger < HUNGRY) {
        return "I feel great!";
    }
    if (this.fitness <= UNFIT && this.hunger >= HUNGRY) {
        return "I am hungry AND I need a walk.";
    }
    if (this.hunger >= HUNGRY) {
        return "I am hungry.";
    }
    if (this.fitness <= UNFIT) {
        return "I need a walk.";
    }
}

module.exports = Pet;