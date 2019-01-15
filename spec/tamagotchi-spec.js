import { Pet } from './../src/pet';
import { Hamster } from './../src/hamster';
import { Cat } from './../src/cat';

describe('Pet', function(){
  let snuggs = new Pet("Snuggs");

  beforeEach(function() {
    jasmine.clock().install();
    snuggs.setSchedule();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should test if we can create a new pet object', function(){
    const name = "Sally";
    let newAnimal = new Pet(name);
    expect(newAnimal.hunger).toEqual(10);
  });

  it('should check to see if hunger level drops to 9 after 10 seconds', function() {
    jasmine.clock().tick(10001);
    expect(snuggs.love).toEqual(7);
  });

  it('should check to see if hunger level increases by 5 after feeding', function() {
    jasmine.clock().tick(20001);
    snuggs.feedPet();
    expect(snuggs.hunger).toEqual(12);
  });

  it('should check to see if saas level increases approriately', function() {
    jasmine.clock().tick(50001);
    expect(snuggs.sass).toEqual(7);
  });

  it('should check to see if pet dies of anything', function() {
    jasmine.clock().tick(100001);
    expect(snuggs.deathOfPet()).toEqual('Your pet committed suicide.');
  });

  it('should check to see if Hamster can inherit properties of pet', function() {
    const name = "Sally";
    let newPet = new Pet("bob");
    let newAnimal = new Hamster(name);
    expect(newAnimal.returnValue()).toEqual(30);
  });

  it('should check to see if Hamster can inherit function from pet', function() {
    const name = "Sally";
    let newPet = new Pet("bob");
    let newAnimal = new Hamster(name);
    newAnimal.feedHamster();
    expect(newAnimal.hunger).toEqual(15);
  });

  it('should check to see if Hamster can inherit function from pet with varying property inputs', function() {
    const name = "Sally";
    let newPet = new Pet("bob");
    let newAnimal = new Hamster(name);
    newAnimal.deathOfHamster();
    expect(newAnimal.alive).toEqual(true);
  });

  it('should check to see if Cat can inherit function from pet with varying property inputs', function() {
    let newCat= new Cat("Tom");
    const sum = newCat.returnValue()
    expect(sum).toEqual(40);
  });

});
