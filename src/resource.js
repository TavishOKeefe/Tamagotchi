$(document).ready(function(){
  $('.create-pet').submit(function(event){
    event.preventDefault();
    let name = $("#name").val();
    let type = $("#type").val();
    if (type === 1) {
      let pet = new Hamster(name);
      pet.returnValue();
    }
    else if (type === 2) {
      let pet = new Cat(name);
      pet.returnValue();
    }
  console.log(pet);
  debugger
  const pet = new Pet(name);
  pet.setSchedule();
  setInterval(() => {
    $(".pet-output").show();
    $("#dead").text(pet.deathOfPet());
    $("#pet-name").text(`${pet.name}`);
    $("#pet-hunger").text(`Hunger level: ${pet.hunger}`);
    $("#pet-water").html(`Water level: ${pet.water}`);
    $("#pet-waste").html(`Waste level: ${pet.waste}`);
    $("#pet-clean").html(`Clean level: ${pet.clean.toFixed(1)}`);
    $("#pet-exercise").html(`Exercise level: ${pet.exercise}`);
    $("#pet-sleep").html(`Sleep level: ${pet.exercise}`);
    $("#pet-love").html(`Love level: ${pet.exercise}`);
    $("#pet-sass").html(`Sass level: ${pet.exercise}`);
    if (pet.alive == false) {
      clearInterval();
      $(".pet-output").hide();
    }
  }, 1000);



    $('#feed-pet').click(function(){
      pet.feedPet();
    });
    $('#water-pet').click(function(){
      pet.waterPet();
    });
    $('#clean-pet').click(function(){
      pet.wastePet();
    });
    $('#wash-pet').click(function(){
      pet.cleanPet();
    });
    $('#exercise-pet').click(function(){
      pet.exercisePet();
    });
    $('#sleep-pet').click(function(){
      pet.sleepPet();
    });
    $('#love-pet').click(function(){
      pet.lovePet();
    });
  });

});
