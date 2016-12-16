/*
  Test code to generate a human player and an orc player
 */
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option


var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new BroadSword());


/****************************************/
/*      Creating a new Hero              */
/****************************************/

var hero;

var scott = new Gauntlet.Combatants.ScottHumphries()

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();


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
        moveAlong = ($(".classButton").hasClass("borderClick") ===  true);
        break;
      case "card--battleground":
        moveAlong = ($(".weaponButton").hasClass("borderClick") === true);
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
  //    Below here add eventlisteners to appropriate buttons/fields
  /*-----------------------------------------------------------------------*/


  // Add event listener to the select class button which is on the choose your name page
  $('.selectClass').click(function () {
    playerName = $('#player-name')[0].value
    //console.log("playerName", playerName);

    // Create new hero object with a name
    hero = new Gauntlet.Combatants.Player(playerName)
  })

  // Add event listener to all class buttons
  $('.classButton').click(function(){
    playerClass = $(this).find('.btn__text').text()

    // Thanks Luke W for giving me this idea
    hero.class = new Gauntlet.GuildHall[playerClass]
    console.log(hero.class)


    if(playerClass.toLowerCase() === "surprise me") {

      // Implement the surprise - maybe make the player
      // play as the default beggar class?
    }
  })

  // Add event listener to all weapon buttons -- Added to the body because the weapons list is dynamically created
  $('body').click(function(event){

    // Do not use "this" because it returns the entire body on click
    // must use event.target in order to get the clicked element

    var target = $(event.target) // put event.target in a jquery object
    var weaponObject;

    // Check to see if a weapon button is clicked or a child whose parent is a button
    if(target.hasClass("weaponButton")) {
      playerWeapon = target.find('.btn__text').text()
      weaponObject = eval(getWeaponObject(playerWeapon))
      hero.weapon = new weaponObject()
      console.log(hero.weapon)
      console.log("new heroes weapon", playerWeapon)
    }
     else if (target.parent().hasClass("weaponButton")) {
      playerWeapon = target.text()
      weaponObject = eval(getWeaponObject(playerWeapon))
      hero.weapon = new weaponObject()
    }
  })


  // Event listener on the battlefield button to load the player and enemy to the page // load to app.js
  $('a[next="card--battleground"]').on('click', () => {
    loadPlayer();
  })


  // Event listener to attack button and call attackEachOther function when clicked
  $('#attackBttn').click(function(){
    //console.log("Attack button clicked!")

    attackEachOther()
  });



});

// When a class type button has focus, add a class to it and remove the class when another class type button has focus.
$('.classButton').focus(function(event) {
  var target = $(event.target)
  if(target.hasClass('classButton')) {
    $('.classButton').removeClass('borderClick')
    target.addClass('borderClick')
  } else if (target.parent().hasClass('classButton')) {
    target.parent().addClass('borderClick')
    $('.borderClick').removeClass('borderClick')
  }
})


$('.weaponButton').focus(function(event) {
  var target = $(event.target)
  if(target.hasClass('weaponButton')) {
    $('.weaponButton').removeClass('borderClick')
    target.addClass('borderClick')
  } else if (target.parent().hasClass('weaponButton')) {
    target.parent().addClass('borderClick')
    $('.borderClick').removeClass('borderClick')
  }
})
