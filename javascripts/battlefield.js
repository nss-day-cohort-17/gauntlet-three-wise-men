// --------------------------------------------------------------------------------- //
function loadPlayer () {
    $('#battlefieldHero').html(hero.playerName);
    $('#weaponSelection').html(hero.weapon);
    $('#heroSelection').html(hero.class);
    loadEnemy();
}

function loadEnemy() {
    $('#enemyWeaponSelection').html(orc.weapon.name);
    $('#enemySelection').html(orc.species);
    loadPlayerStats()
}

function loadPlayerStats() {
    $('#heroHealth').width(hero.health * 1.3);
    $('#heroStrength').width(hero.strength * 1.3);
    $('#heroIntelligence').width(hero.intelligence * 1.3);
}
// Event listener on attack button click // load to app.js
// Function to calculate damage on attack button click


function getWeaponDamage(heroWeaponName){

    heroWeaponName = heroWeaponName.split(' ')

    for(var i = 0; i < heroWeaponName.length; i++){

        heroWeaponName[i] = heroWeaponName[i].split('')

        heroWeaponName[i][0] = heroWeaponName[i][0].toUpperCase()

        heroWeaponName[i] = heroWeaponName[i].join('')
    }

    return heroWeaponName.join('')
}


function attackEachOther() {
    console.log("attackEachOther function called")

    // Hero attacks first

        // Calculate Heroes attack damage

            // Get attack Damage
            var weaponName = getWeaponDamage(hero.weapon)
            var heroWeapon = eval(weaponName)
            var getWeapon = new heroWeapon
            var damage = getWeapon.damage
            console.log(damage)

            //var heroAttack = hero.strength + heroWeaponDamage

        // Remove attack damage from enemy health

        // Display enemys health on DOM

    // Check if enemy is dead

        // If enemy is dead hero wins - end game

    // Enemy attacks

        // Remove attack damage from hero health

        // display heros health on DOM

    // Check if Hero is dead

        // if hero is dead enemy wins - end game

}
