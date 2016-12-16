/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.GuildHall = {};

/*
  Base function for a player, or enemy, class (profession)
 */
Gauntlet.GuildHall.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};
/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conjurer
      - Sorcerer
*/
/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
*/
/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
*/
Gauntlet.GuildHall.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Gauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();


Gauntlet.GuildHall.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
  this.image = "images/warrior.png";
};
Gauntlet.GuildHall.Warrior.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
  this.image = "images/valkyrie.png";
};
Gauntlet.GuildHall.Valkyrie.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
  this.image = "images/berserker.png"
};
Gauntlet.GuildHall.Berserker.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
  this.image = "images/monk.png"
};
Gauntlet.GuildHall.Monk.prototype = new Gauntlet.GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conjurer
      - Sorcerer
 */
Gauntlet.GuildHall.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Gauntlet.GuildHall.Mage.prototype = new Gauntlet.GuildHall.PlayerClass();


Gauntlet.GuildHall.Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.image = "images/shaman.png"
};
Gauntlet.GuildHall.Shaman.prototype = new Gauntlet.GuildHall.Mage();


Gauntlet.GuildHall.Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
  this.image = "images/wizard.svg";
};
Gauntlet.GuildHall.Wizard.prototype = new Gauntlet.GuildHall.Mage();


Gauntlet.GuildHall.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
  this.image = 'images/conjurur.png'
};
Gauntlet.GuildHall.Conjurer.prototype = new Gauntlet.GuildHall.Mage();


Gauntlet.GuildHall.Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
  this.image = "images/sorcerer.png"
};
Gauntlet.GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */

 Gauntlet.GuildHall.Stealth = function() {
   this.name = "Stealth";
   this.magical = false;
   this.healthBonus = this.healthBonus + 10;
   this.strengthBonus = this.strengthBonus - 10;
   this.intelligenceBonus = this.intelligenceBonus + 10;
 };
 Gauntlet.GuildHall.Stealth.prototype = new Gauntlet.GuildHall.PlayerClass();

 Gauntlet.GuildHall.Thief = function() {
   this.name = "Thief";
   this.healthBonus = this.healthBonus + 0;
   this.strengthBonus = this.strengthBonus - 15;
   this.intelligenceBonus = this.intelligenceBonus + 20;
   this.image = 'images/thief.png'
 };
 Gauntlet.GuildHall.Thief.prototype = new Gauntlet.GuildHall.Stealth();

 Gauntlet.GuildHall.Ninja = function() {
   this.name = "Ninja";
   this.healthBonus = this.healthBonus + 15;
   this.strengthBonus = this.strengthBonus - 15;
   this.intelligenceBonus = this.intelligenceBonus + 15;
   this.image = 'images/ninja.png'
 };
 Gauntlet.GuildHall.Ninja.prototype = new Gauntlet.GuildHall.Stealth();

 Gauntlet.GuildHall.Assassin = function() {
   this.name = "Assassin";
   this.healthBonus = this.healthBonus - 30;
   this.strengthBonus = this.strengthBonus + 25;
   this.intelligenceBonus = this.intelligenceBonus + 30;
   this.image = 'images/assassin.png'
 };
 Gauntlet.GuildHall.Assassin.prototype = new Gauntlet.GuildHall.Stealth();
