import { Pet } from './../src/pet';

class Cat extends Pet {
  constructor(name, hunger, sleep, alive, exercise) {
    super(name, hunger, sleep, alive, exercise)

      this.clean = 10,
      this.sass = 0
  }

  returnValue(){
    let totalHamster = (this.hunger + this.sleep + this.exercise + this.clean);
    return totalHamster;
  }

  cleanPet() {
    this.clean = 10;
  }

  catSchedule(){
    super.setSchedule();
    setInterval(() => {
      this.clean --;
      this.sass ++;
    }, 5000)
  }

  deathOfCat(){
    super.deathOfPet();
    if (this.clean < 0){
      this.alive = false;
      return "Your pet is disgusting. You dont deserve a pet.";
    } else if (this.sass > 20) {
      this.alive = false;
      return "Your pet stole your credit card, your girl, and fled to the Caribbean.";
    } else {
      return "Your pet is alive!";
    }
  }
}

export { Cat };
