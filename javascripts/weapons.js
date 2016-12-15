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

// below is just for testing
weaponsList.push(new WarAxe())

weaponsList.push(new WarAxe())
weaponsList.push(new WarAxe())
weaponsList.push(new WarAxe())
weaponsList.push(new WarAxe())

weaponsList.push(new WarAxe())
weaponsList.push(new WarAxe())
weaponsList.push(new WarAxe())
weaponsList.push(new WarAxe())



function addWeaponsDOM () {

  var columnCount = -1;

  for(var i = 0; i < weaponsList.length; i++) {

    // Add a new column if the index equals 4
    if(i % 4 === 0) {
      $(".addWeaponsHere").append(`<div class="weaponColumn col-sm-4"></div>`)
      //console.log($('.weaponColumn'))
      //console.log("how many columns weapons", $("body").find(".weaponColumn"))
      columnCount++;
    }
    // Add the new weapon to the DOM in the current column
      //use .html() instead of .append()??
        // $(".weaponColumn")[columnCount]
        //$('body').find('.weaponColumn')[columnCount]

       $('.weaponColumn')[columnCount].insertAdjacentHTML('beforeend',  `<div class="card__button">
                                        <a class="weaponButton class__link btn btn--big btn--blue" href="#">
                                        <span class="btn__prompt"></span>
                                        <span class="btn__text">${weaponsList[i].name}</span>
                                        </a>
                                        </div>`)
    // $('.weaponColumn')[columnCount].append(`<div class="card__button">
    //                                         <a class="weaponButton class__link btn btn--big btn--blue" href="#">
    //                                         <span class="btn__prompt"></span>
    //                                         <span class="btn__text">${weaponsList[i].name}</span>
    //                                         </a>
    //                                         </div>`)
  }
  //console.log("how many columns weapons", $("body").find(".weaponColumn"))
}

addWeaponsDOM()
