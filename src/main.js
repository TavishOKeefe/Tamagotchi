import { Pet } from './../src/pet';
import { Hamster } from './../src/hamster';
import { Cat } from './../src/cat';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('.create-pet').submit(function(event){
    event.preventDefault();
    let name = $("#name").val();
    let type = $("#type").val();
  const pet = new Pet(name);
  pet.setSchedule();
  const test2 = 1;


  $("#dead").html("<p> " + pet.name + "</p>");
  $("#dead").html("<div class='pet-output'><h3>Your Pet Details:</h3><p id='pet-name'>" + pet.name + "</div> <p id='pet-hunger'>Hunger Level " + pet.hunger + "</div></p>");
      //     <button type="click" name="button" class="btn btn-success" id="feed-pet">Feed Pet</button>
      //   </div>
      // </div>");

  // if (test2 === 1){
  //   $("#pet-clean").hide();
  //   $("#pet-exercise").hide();
  //   $("#pet-sleep").hide();
  //   $("#pet-love").hide();
  //   $("#pet-sass").hide();
  // } else  {
  //   return "hello";
  // }

  // setInterval(() => {
  //   const test = 1;
  //   $(".pet-output").show();
  //   $("#dead").text(pet.deathOfPet());
  //   $("#pet-name").text(`${pet.name}`);
  //   if (test === 1){
  //   $("#pet-hunger").text(`Hunger level: ${pet.hunger}`);
  //   $("#pet-water").html(`Sleep level: ${pet.sleep}`);
  //   $("#pet-waste").html(`Exercise level: ${pet.exercise}`);
  //   } else {
  //   $("#pet-clean").html(`Clean level: ${pet.clean.toFixed(1)}`);
  //   $("#pet-exercise").html(`Exercise level: ${pet.exercise}`);
  //   $("#pet-sleep").html(`Sleep level: ${pet.exercise}`);
  //   $("#pet-love").html(`Love level: ${pet.exercise}`);
  //   $("#pet-sass").html(`Sass level: ${pet.exercise}`);
  // }
  //   if (pet.alive == false) {
  //     clearInterval();
  //     $(".pet-output").hide();
  //   }
  // }, 1000);
  //
  //
  //
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
