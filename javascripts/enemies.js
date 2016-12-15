Gauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  this.image = "http://www.stefonmears.com/wp-content/uploads/2013/01/Another-Orc-by-phew_album.jpg"

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }
};

Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();


Gauntlet.Combatants.ScottHumphries = function() {
  this.health = this.health + 20;
  this.species = "Human";
  this.allowedClasses = ["Wizard"];
  this.image = "http://www.stefonmears.com/wp-content/uploads/2013/01/Another-Orc-by-phew_album.jpg"
  this.intelligence = 9000;

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }
};

Gauntlet.Combatants.ScottHumphries.prototype = new Gauntlet.Combatants.Monster();
