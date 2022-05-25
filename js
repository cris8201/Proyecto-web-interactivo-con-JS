let Oshawott = {
    name: 'Oshawott',
    health: 100,
    strength: 14,
    defense: 12,
    velocidad: 13,
    intelligence: 11,
    heroClass: 'Oshawott',
    criticoChance: 15,
    specialAenemyAtaque: 'Acua Cola',
  };
  
  let mage = {
    name: 'Mage',
    health: 100,
    strength: 7,
    defense: 17,
    velocidad: 16,
    intelligence: 17,
    heroClass: 'mage',
    criticoChance: 14,
    specialAenemyAtaque: 'Fireball meteor',
  };
  let hero;
  

  
 
  
  let enemies = [
   
    {
      name: 'Bulbasur',
      health: 120,
      strength: 20,
      defense: 15,
      velocidad: 10,
     
      enemyImg:
        'https://i.pinimg.com/originals/80/de/af/80deafc0e3c789a6cc08e0c18e090672.png',
    },
    {
      name: 'Charmander',
      health: 80,
      strength: 16,
      defense: 12,
      velocidad: 14,
     
      enemyImg:
        'https://wallpaperaccess.com/full/840573.png',
    },
    {
      name: 'Pikachu',
      health: 90,
      strength: 14,
      defense: 13,
      velocidad: 16,
      
      enemyImg:
        'https://nintenduo.com/wp-content/uploads/2022/05/Pokemon-Home-Cambio-Ataques-01.webp',
    },
  ];
  
  function selectHero(heroClass) {
    console.log(`You have selected ${heroClass}`);
  
    switch (heroClass) {
      case 'Oshawott':
        hero = warrior;
        console.log(hero, 'Oshawott');
  
        break;
  
      case 'mage':
        hero = mage;
        console.log(hero, 'hide mage');
        break;
  
    
  
      default:
        hero = warrior;
        console.log(hero, 'default Oshawott');
        break;
    }
  }
  
  function hideRestOfHeros(heroClass) {
    switch (heroClass) {
      case 'Oshawott':
        document.getElementById('mage').style.display = 'none';
        
      
        console.log('hererere');
        break;
      case 'mage':
        document.getElementById('warrior').style.display = 'none';
       
        
        break;
      // case 'assassins':
      //   document.getElementById('warrior').style.display = 'none';
      //   document.getElementById('mage').style.display = 'none';
      
      //   break;
      // case 'hunter':
      //   document.getElementById('warrior').style.display = 'none';
      //   document.getElementById('mage').style.display = 'none';
      
  
      //   break;
  
      default:
        document.getElementById('Oshawott').style.display = 'inline-block';
        document.getElementById('Picacku').style.display = 'inline-block';
       
        break;
    }
  }
  let Oshawottgolpeas = 0;
  let logText = document.querySelector('#text');
  function startGame() {
    console.log('start game');
    if (hero == undefined) {
      hero = Oshawott;
      return;
    }
    hideRestOfHeros(hero.heroClass);
    let enemy = randomEnemy();
    document.querySelector('.enemies').style.display = 'inline-block';
    document.querySelector('#special').disabled = true;
    document.querySelector('#Ataque').addEventListener('click', function () {
      console.log('Ataque');
      OshawottAtaque(hero, enemy);
    });
    document.querySelector('#Defensa').addEventListener('click', function () {
      console.log('Defensa');
      OshawottDefensa(hero, enemy);
    });
  
    document.querySelector('#special').addEventListener('click', function () {
      console.log('special');
      OshawottSpecial(hero, enemy);
      document.querySelector('#special').disabled = true;
    });
  }
  
  function setHeroStatus() {
    document.getElementById('Oshawott-hp').innerHTML = Oshawott.health;
    document.getElementById('Oshawott-str').innerHTML = Oshawott.strength;
    document.getElementById('Oshawott-def').innerHTML = Oshawott.defense;
    document.getElementById('Oshawott-velocidad').innerHTML = Oshawott.velocidad;
  
    document.getElementById('mage-hp').innerHTML = mage.health;
    document.getElementById('mage-str').innerHTML = mage.strength;
    document.getElementById('mage-def').innerHTML = mage.defense;
    document.getElementById('mage-velocidad').innerHTML = mage.velocidad;
  }
  function setEnemyStatus(enemy) {
    document.getElementById('enemy-hp').innerHTML = enemy.health;
    document.getElementById('enemy-str').innerHTML = enemy.strength;
    document.getElementById('enemy-def').innerHTML = enemy.defense;
    document.getElementById('enemy-velocidad').innerHTML = enemy.velocidad;
    document.getElementById('enemy-name').innerHTML = enemy.name;
    document.getElementById('enemy-image').src = enemy.enemyImg;
  }
  setHeroStatus();
  document.querySelector('.enemies').style.display = 'none';
  
  function OshawottAtaque(jugador, target) {
    let daño = Math.floor(Math.random() * jugador.strength) * 1.5;
    let enemyDefensaNumber = Math.floor(Math.random() * 9) + 1;
    if (enemyDefensaNumber >= 7) {
      enemyDefensa(target, jugador);
    }
    console.log(Oshawottgolpeas, '1');
    Oshawottgolpeas++;
    if (Oshawottgolpeas == 7) {
      document.querySelector('#special').disabled = false;
      console.log('se dispara el especial');
      Oshawottgolpeas = 0;
    }
  
    console.log(Oshawottgolpeas, '2');
    if (daño == jugador.criticoChance) {
      console.info('critico golpea');
      daño = Math.floor(Math.random() * jugador.strength) * 3;
      generateText(
        `${jugador.name} criticamente golpea ${target.name} con ${daño} daño`
      );
    }
    target.health -= daño;
    document.querySelector('#enemy-hp').innerHTML = target.health;
  
    generateText(`Oshawott golpea ${target.name} con ${daño} daño.`);
  
    setTimeout(() => {
      enemyAtaque(target, jugador);
    }, 3000);
    let rndNumber = randomNumber();
  }
  
  function generateText(text) {
    logText.innerHTML = '';
  
    return (logText.innerHTML = text);
  }
  
  function enemyAtaque(enemy, target) {
    let daño = Math.floor(Math.random() * enemy.strength) * 1.5;
    generateText(`${enemy.name} golpea ${target.heroClass} con ${daño} daño.`);
    target.health -= daño;
  
    document.querySelector(`#${target.heroClass}-hp`).innerHTML = target.health;
  }
  
  function OshawottDefensa(jugador, enemy) {
    generateText(`${jugador.name} se esta defendiendo.`);
    let daño = jugador.Defensa - enemy.strength;
  
    setTimeout(() => {
      generateText(`${enemy.name} golpea ${jugador.name} con ${daño} daño.`);
      jugador.health -= daño;
      

      document.querySelector(`#${jugador.heroClass}-hp`).innerHTML = jugador.health;
    }, 4000);
  }
  
  function enemyDefensa(enemy, jugador) {
    // generateText(`${enemy.name} is defending.`);
    // let daño = enemy.defense - jugador.strength;
    let daño = jugador.Defensa - enemy.strength;
    setTimeout(() => {
      generateText(`${enemy.name}  se esta defendiendo, reciv ${daño} daño.`);
      enemies.health -= daño;
      document.querySelector('#enemy-hp').innerHTML = enemy.health;
    }, 5000);
  }
  
  function randomEnemy() {
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    console.log(enemy);
    setEnemyStatus(enemy);
    return enemy;
  }
  
  function randomNumber() {
    const number = Math.floor(Math.random() * 99);
    return number;
  }
  
  function OshawottSpecial(jugador, enemy) {
    let daño = jugador.strength * 2.5;
    generateText(
      `${jugador.name} esta usando su atque especial : ${jugador.specialAenemyAtaque}, genera ${daño}  daño a ${enemy.name}.`
    );
    let enemyDefensaNumber = Math.floor(Math.random() * 9) + 1;
    if (enemyDefensaNumber >= 7) {
      enemyDefend(enemy, jugador);
    }
    enemy.health -= daño;
    document.querySelector('#enemy-hp').innerHTML = enemy.health;
  
    setTimeout(() => {
      enemyAtaque(enemy, jugador);
    }, 3000);
  }

