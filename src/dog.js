
class Pet {

  constructor(name){

    this.name = name,
    this.hunger = 10,
    this.water = 10,
    this.waste = 10,
    this.clean = 10,
    this.exercise = 10,
    this.sleep = 10,
    this.love = 10,
    this.sass = 0,
    this.alive = true

  }

  setSchedule() {
    setInterval(() => {
      this.hunger --;
      this.water --;
      this.waste --;
      this.clean -= .2;
      this.exercise --;
      this.sleep -= .5;
      this.love -= 3;

      let total = (this.hunger + this.water + this.waste + this.clean + this.exercise + this.sleep + this.love);

      if (total <= 10){
        this.sass += 6;
      } else if (total <= 20){
        this.sass += 5;
      } else if (total <= 30){
        this.sass += 4;
      } else if (total <= 40){
        this.sass += 3;
      } else if (total <= 50){
        this.sass += 2;
      } else if (total <= 60){
        this.sass += 1;
      }
    }, 5000);
  }

  feedPet() {
    this.hunger += 5;
  }

  waterPet() {
    this.water += 5;
  }

  wastePet() {
    this.waste = 10;
  }

  cleanPet() {
    this.clean = 10;
  }

  exercisePet() {
    this.exercise += 5;
  }

  sleepPet() {
    this.sleep = 10;
  }

  lovePet() {
    this.love += 2;
  }

  deathOfPet() {

    if (this.hunger < 0){
      this.alive = false;
      console.log(this.alive);
      return "Your pet died of starvation.";
    } else if (this.water < -10){
      this.alive = false;
      return "Your pet died of thirst.";
    } else if (this.waste > 20){
      this.alive = false;
      return "Your pet died of infection.";
    } else if (this.clean < 0){
      this.alive = false;
      return "Your pet is disgusting. You dont deserve a pet.";
    } else if (this.exercise < -10) {
      this.alive = false;
      return "Your pet died of cardiac arrest.";
    } else if (this.sleep < -15) {
      this.alive = false;
      return "Your pet died of sleep deprevation.";
    } else if (this.love < -20) {
      this.alive = false;
      return "Your pet committed suicide.";
    } else if (this.sass > 20) {
      this.alive = false;
      return "Your pet stole your credit card, your girl, and fled to the Caribbean.";
    } else {
      return "Your pet is alive!";
    }
  }

}


export { Pet };
