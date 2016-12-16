// --------------------------------------------------------------------------------- //
var heroMaxHealth;
var enemyMaxHealth;

function loadPlayer () {
    $('#battlefieldHero').html(hero.playerName);
    $('#weaponSelection').html(hero.weapon.name);
    $('#heroSelection').html(hero.class.name);
    $('#playerImage').attr('src', hero.class.image).width('100%');
    // move to a function to run on a loop while page is loaded
    animateImages();
    heroMaxHealth = hero.health;
    loadEnemy();
}


function loadEnemy() {
    $('#enemyWeaponSelection').html(orc.weapon.name);
    $('#enemySelection').html(orc.species);
    $('#enemyImage').attr('src', orc.image).width('100%');
    enemyMaxHealth = orc.health;
    removeClassColors();
    var playerHealth = hero.health;
    loadPlayerStats(playerHealth);
}

function animateImages () {
    for (let i = 0; i < 50; i++) {
        $('#playerImage').animate({ width: "80%"} , 1500);
        $('#playerImage').animate({ width: "100%"} , 1500);
        $('#enemyImage').animate({ width: "80%" } , 1500);
        $('#enemyImage').animate({ width: "100%" } , 1500);
    }
}

function loadPlayerStats(health) {
    let heroHealthNow = ((health/heroMaxHealth) * 100);
    let heroHealthLocal = $('#heroHealth');
    heroHealthLocal.attr('style', 'width: ' + heroHealthNow + '%');

    let heroStrengthNow = ((hero.strength/150) * 100);
    let heroStrengthLocal = $('#heroStrength');
    heroStrengthLocal.attr('style', 'width: ' + heroStrengthNow + '%');

    let heroIntelligenceNow = ((hero.intelligence/150) * 100);
    let heroIntelligenceLocal = $('#heroIntelligence');
    heroIntelligenceLocal.attr('style', 'width: ' + heroIntelligenceNow + '%');

    addColorClass(heroHealthNow, heroHealthLocal, heroStrengthNow, heroStrengthLocal, heroIntelligenceNow, heroIntelligenceLocal);
    let enemyHealth = orc.health;
    loadEnemyStats(enemyHealth);
}

function loadEnemyStats(health) {
    let enemyHealthNow = ((health/enemyMaxHealth) * 100);
    let enemyHealthLocal = $('#enemyHealth');
    enemyHealthLocal.attr('style', 'width: ' + enemyHealthNow + '%');

    let enemyStrengthNow = ((orc.strength/150) * 100);
    let enemyStrengthLocal = $('#enemyStrength');
    enemyStrengthLocal.attr('style', 'width: ' + enemyStrengthNow + '%');

    let enemyIntelligenceNow = ((orc.intelligence/150) * 100)
    let enemyIntelligenceLocal = $('#enemyIntelligence');
    enemyIntelligenceLocal.attr('style', 'width: ' + enemyIntelligenceNow + '%');

    addColorClass(enemyHealthNow, enemyHealthLocal, enemyStrengthNow, enemyStrengthLocal, enemyIntelligenceNow, enemyIntelligenceLocal);
}

function removeClassColors() {
    // if ($('body').hasClass())
    $('body').find('.progress-bar-success').removeClass('progress-bar-success');
    $('body').find('.progress-bar-warning').removeClass('progress-bar-warning');
    $('body').find('.progress-bar-danger').removeClass('progress-bar-danger');
}

function addColorClass(healthNow, healthLocal, strengthNow, stengthLocal, intelligenceNow, intelligenceLocal) {
    console.log('healthNow', healthNow);
    if ((healthNow) > 50) {
        healthLocal.addClass('progress-bar-success')
    } else if ((healthNow) > 25) {
        healthLocal.addClass('progress-bar-warning')
    } else {
        healthLocal.addClass('progress-bar-danger')
    }

    if (strengthNow > 50) {
        stengthLocal.addClass('progress-bar-success')
    } else if (strengthNow > 25) {
        stengthLocal.addClass('progress-bar-warning')
    } else {
        stengthLocal.addClass('progress-bar-danger')
    }

    if (intelligenceNow > 50) {
        intelligenceLocal.addClass('progress-bar-success')
    } else if (intelligenceNow > 25) {
        intelligenceLocal.addClass('progress-bar-warning')
    } else {
        intelligenceLocal.addClass('progress-bar-danger')
    }
}

// Function to calculate damage on attack button click
function getWeaponObject(heroWeaponName){
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
        var damage = hero.weapon.damage;
        var heroAttack = (100/hero.strength) * damage;

        // Remove attack damage from enemy health
        orc.health = orc.health - heroAttack;
        console.log("orc health", orc.health);

        // Display enemy's health on DOM
        loadEnemyStats(orc.health);

    // Check if enemy is dead
        if (orc.health <= 0) {
            // If enemy is dead hero wins - end game

            $('#battleResults').html(
                `<h1>Results:</h1>
                  <h3>Your hero,</h3>
                  <h2>${hero.playerName}</h2>
                  <h3>has found glory!!!</h3>`
                );
            $('#attackBttn').hide()
            $('#battleBackButtonDiv').before(`<a href="http://localhost:8080"><button>Restart Game?</button></a>`)
        }

    // Enemy attacks
        // Calculate enemy damage
        var orcDamage = (100/orc.strength) * orc.weapon.damage;

        // Remove attack damage from hero health
        hero.health = hero.health - orcDamage;
        console.log(hero.health);

        // display heroes health on DOM
        loadPlayerStats(hero.health);

    // Check if Hero is dead
        if (hero.health <= 0){
            // if hero is dead enemy wins - end game
            $('#battleResults').html(
                `<h1>Results:</h1>
                  <h3>Your hero,</h3>
                  <h2>${hero.playerName}</h2>
                  <h3>has been defeated.</h3>`
                );
            $('#attackBttn').hide()
            $('#battleBackButtonDiv').before(`<a href="http://localhost:8080"><button>Restart Game?</button></a>`)

        }
}
