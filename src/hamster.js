import { Pet } from './../src/pet';

class Hamster extends Pet {
  constructor(name, hunger, sleep, alive, exercise) {
    super(name, hunger, sleep, alive, exercise)

  }

  returnValue(){
    let totalHamster = (this.hunger + this.sleep + this.exercise);
    return totalHamster;
  }

  hamsterSchedule(){
    super.setSchedule();
  }

  feedHamster(){
    super.feedPet();
  }

  sleepHamster(){
    super.sleepPet();
  }

  exerciseHamster(){
    super.ExercisePet();
  }

  deathOfHamster(){
    super.deathOfPet();
  }
}

export { Hamster };
