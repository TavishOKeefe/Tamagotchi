
class Pet {

  constructor(name){

    this.name = name,
    this.hunger = 10,
    this.exercise = 10,
    this.sleep = 10,
    this.alive = true

  }

  setSchedule() {
    setInterval(() => {
      this.hunger --;
      this.exercise --;
      this.sleep -= .5;
    }, 5000);
  }

  feedPet() {
    this.hunger += 5;
  }

  exercisePet() {
    this.exercise += 5;
  }

  sleepPet() {
    this.sleep = 10;
  }

  deathOfPet() {

    if (this.hunger < 0){
      this.alive = false;
      console.log(this.alive);
      return "Your pet died of starvation.";
    } else if (this.exercise < -10) {
      this.alive = false;
      return "Your pet died of cardiac arrest.";
    } else if (this.sleep < -15) {
      this.alive = false;
      return "Your pet died of sleep deprevation.";
    } else {
      return "Your pet is alive!";
    }
  }
}


export { Pet };
