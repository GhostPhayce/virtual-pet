const Pet = require('../src/pet');

describe("Constructor", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet("Fido");
    });

    it("returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });

    it("sets the name property", () => {
        expect(pet.name).toEqual("Fido");
    });
    
    it("has an initial age of 0", () => {
        expect(pet.age).toEqual(0);
    });

    it("has an initial hunger of 0", () => {
        expect(pet.hunger).toEqual(0);
    });

    it("has an initial fitness of 10", () => {
        expect(pet.fitness).toEqual(10);
    });
});

describe("growUp", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet("Fido");
    });

    it("increases age by 1", () => {
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    it("increases hunger by 5", () => {
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });

    it("decreases fitness by 3", () => {
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe("walk", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet("Fido");
    });

    it("increases fitness by 4", () => {
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });

    it("increases fitness to a maximum of 10", () => {
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});

describe("feed", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet("Fido");
    });

    it("decreases hunger by 3", () => {
        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toEqual(2);
    });

    it("decreases hunger to a minimum of 0", () => {
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    })
});

describe("checkUp", () => {
    let pet;
    beforeEach(() => {
        pet = new Pet("Fido");
    });

    it("returns the hunger and fitness levels", () => {
        expect(pet.checkUp()).toBe("I feel great!");
    });

    it("returns the need for food and a walk if unfit and hungry", () => {
        pet.hunger = 7;
        pet.fitness = 2;
        expect(pet.checkUp()).toBe("I am hungry AND I need a walk.");
    });

    it("returns the need for food if hungry", () => {
        pet.hunger = 8;
        expect(pet.checkUp()).toBe("I am hungry.");
    });

    it("returns the need for a walk if unfit", () => {
        pet.fitness = 3;
        expect(pet.checkUp()).toBe("I need a walk.");
    });
});