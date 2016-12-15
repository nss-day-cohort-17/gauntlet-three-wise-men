var weaponsList = [];

var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();


weaponsList.push(new Dagger())
weaponsList.push(new BroadSword())
weaponsList.push(new WarAxe())

console.log(weaponsList)


function addWeaponsDOM () {
  for(var i = 0; i < weaponsList.length; i++) {

    // Add a new column if the index equals 4
    if(i % 4 === 0) {
      $(".addWeaponsHere").append(`<div class="weaponColumn col-sm-4"></div>`)
    }

    $(".weaponColumn").append(`  <div class="card__button">
                                    <a class="weaponButton class__link btn btn--big btn--blue" href="#">
                                      <span class="btn__prompt"></span>
                                      <span class="btn__text">${weaponsList[i].name}</span>
                                    </a>
                                </div>`)
  }
}

addWeaponsDOM()
