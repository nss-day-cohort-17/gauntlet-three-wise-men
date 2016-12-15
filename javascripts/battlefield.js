// --------------------------------------------------------------------------------- //
function loadPlayer () {
    $('#battlefieldHero').html(hero.playerName);
    $('#weaponSelection').html(hero.weapon);
    $('#heroSelection').html(hero.class);
    $('#playerImage').attr('src', hero.image).width('120%');
    //$('#playerImage').html(hero.image);
    loadEnemy();
}

function loadEnemy() {
    $('#enemyWeaponSelection').html(orc.weapon.name);
    $('#enemySelection').html(orc.species);
    $('#enemyImage').attr('src', orc.image).width('100%');
    removeClassColors();
    loadPlayerStats();
}

function loadPlayerStats() {
    let heroHealthNow = (hero.health * 1.3);
    let heroHealthLocal = $('#heroHealth');
    heroHealthLocal.width(heroHealthNow);

    let heroStrengthNow = (hero.strength * 1.3);
    let heroStrengthLocal = $('#heroStrength');
    heroStrengthLocal.width(heroStrengthNow);

    let heroIntelligenceNow = (hero.intelligence * 1.3)
    let heroIntelligenceLocal = $('#heroIntelligence');
    heroIntelligenceLocal.width(heroIntelligenceNow);

    addColorClass(heroHealthNow, heroHealthLocal, heroStrengthNow, heroStrengthLocal, heroIntelligenceNow, heroIntelligenceLocal);
    loadEnemyStats();
}

function loadEnemyStats() {
    let enemyHealthNow = (orc.health * 1.3);
    let enemyHealthLocal = $('#enemyHealth');
    enemyHealthLocal.width(enemyHealthNow);

    let enemyStrengthNow = (orc.strength * 1.3);
    let enemyStrengthLocal = $('#enemyStrength');
    enemyStrengthLocal.width(enemyStrengthNow);

    let enemyIntelligenceNow = (orc.intelligence * 1.3)
    let enemyIntelligenceLocal = $('#enemyIntelligence');
    enemyIntelligenceLocal.width(enemyIntelligenceNow);

    addColorClass(enemyHealthNow, enemyHealthLocal, enemyStrengthNow, enemyStrengthLocal, enemyIntelligenceNow, enemyIntelligenceLocal);
}

function removeClassColors() {
    // if ($('body').hasClass())
    $('body').find('.green').removeClass('green');
    $('body').find('.yellow').removeClass('yellow');
    $('body').find('.red').removeClass('red');
}

function addColorClass(healthNow, healthLocal, strengthNow, stengthLocal, intelligenceNow, intelligenceLocal) {
    console.log('healthNow', healthNow);
    if ((healthNow) > 50) {
        healthLocal.addClass('green')
    } else if ((healthNow) > 25) {
        healthLocal.addClass('yellow')
    } else {
        healthLocal.addClass('red')
    }

    if (strengthNow > 50) {
        stengthLocal.addClass('green')
    } else if (strengthNow > 25) {
        stengthLocal.addClass('yellow')
    } else {
        stengthLocal.addClass('red')
    }

    if (intelligenceNow > 50) {
        intelligenceLocal.addClass('green')
    } else if (intelligenceNow > 25) {
        intelligenceLocal.addClass('yellow')
    } else {
        intelligenceLocal.addClass('red')
    }
}

// Event listener on attack button click // load to app.js
// Function to calculate damage on attack button click


function attackEachOther() {
    console.log("attackEachOther function called")

    // Hero attacks first

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
