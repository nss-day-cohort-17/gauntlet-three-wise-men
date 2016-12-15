/*
  Test code to generate a human player and an orc player
 */
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new BroadSword());
console.log(orc.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());

/*
Global variables for player name, class and weapon
*/

var playerName;
var playerClass;
var playerWeapon;

$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

  /*-----------------------------------------------------------------------*/
  //    Below here add eventlisteners to approproate buttons/fields
  /*-----------------------------------------------------------------------*/


  // Add event listener to the select class button which is on the choose your name page
  $('.selectClass').click(function () {
    playerName = $('#player-name')[0].value
    //console.log("playerName", playerName);
  })

  // Add event listener to all class buttons
  $('.classButton').click(function(){
    playerClass = $(this).find('.btn__text').text()
    //console.log("playerClass", playerClass)
  })

  // Add event listener to all weapon buttons -- Added to the body because the weapons list is dynamically created
  $('body').click(function(event){

    // Do not use "this" because it returns the entire body on click
    // must use event.target in order to get the clicked element
    console.log(event.target)

    var target = $(event.target) // put event.target in a jquery object

    // Check to see if a weapon button is clicked or a child whose parent is a button
    if(target.hasClass("weaponButton")) {
      console.log("weapon button found")
    }
     else if (target.parent().hasClass("weaponButton")) {
      console.log("span is child of weaponButton")
    }

  })

});
