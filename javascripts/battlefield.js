// --------------------------------------------------------------------------------- //
function loadPlayer () {
    $('#battlefieldHero').html(hero.playerName);
    $('#weaponSelection').html(hero.weapon);
    $('#heroSelection').html(hero.class.name);
    $('#playerImage').attr('src', hero.class.image).width('100%');
    //$('#playerImage').html(hero.image);
    loadEnemy();
}

function loadEnemy() {
    $('#enemyWeaponSelection').html(orc.weapon.name);
    $('#enemySelection').html(orc.species);
    $('#enemyImage').attr('src', orc.image).width('100%');
    removeClassColors();
    var orcHealth = orc.health;
    loadPlayerStats(orcHealth);
}

function loadPlayerStats(health) {
    let heroHealthNow = (health * 1.3);
    let heroHealthLocal = $('#heroHealth');
    heroHealthLocal.width(heroHealthNow);

    let heroStrengthNow = (hero.strength * 1.3);
    let heroStrengthLocal = $('#heroStrength');
    heroStrengthLocal.width(heroStrengthNow);

    let heroIntelligenceNow = (hero.intelligence * 1.3);
    let heroIntelligenceLocal = $('#heroIntelligence');
    heroIntelligenceLocal.width(heroIntelligenceNow);

    addColorClass(heroHealthNow, heroHealthLocal, heroStrengthNow, heroStrengthLocal, heroIntelligenceNow, heroIntelligenceLocal);
    let enemyHealth = orc.health;
    loadEnemyStats(enemyHealth);
}

function loadEnemyStats(health) {
    let enemyHealthNow = (health * 1.3);
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
        var weaponName = getWeaponDamage(hero.weapon);
        var heroWeapon = eval(weaponName);
        var getWeapon = new heroWeapon;
        var damage = getWeapon.damage;
        console.log("damage", damage);

        var heroAttack = (100/hero.strength) * damage;
        console.log("attack", heroAttack);

        // Remove attack damage from enemy health
        orc.health = orc.health - heroAttack;
        console.log("orc health", orc.health);

        // Display enemy's health on DOM
        loadEnemyStats(orc.health);

    // Check if enemy is dead
        if (orc.health <= 0) {
            // If enemy is dead hero wins - end game
            alert("Game over. You win!!!");
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
            alert('Game over. You lose.')
        }
}
