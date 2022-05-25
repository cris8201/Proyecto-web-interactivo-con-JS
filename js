let Oshawott = {
    name: 'Oshawott',
    health: 100,
    strength: 14,
    defense: 12,
    velocidad: 13,
    intelligence: 11,
    contrincanteClass: 'Oshawott',
    criticoChance: 15,
    specialAenemigoAtaque: 'Acua Cola',
  };
  
 
  let contrincante;
  

  let enemigos = [
   
    {
      name: 'Bulbasur',
      health: 120,
      strength: 20,
      defense: 15,
      velocidad: 10,
     
      enemigoImg:
        'https://i.pinimg.com/originals/80/de/af/80deafc0e3c789a6cc08e0c18e090672.png',
    },
    {
      name: 'Charmander',
      health: 80,
      strength: 16,
      defense: 12,
      velocidad: 14,
     
      enemigoImg:
        'https://wallpaperaccess.com/full/840573.png',
    },
    {
      name: 'Pikachu',
      health: 90,
      strength: 14,
      defense: 13,
      velocidad: 16,
      
      enemigoImg:
        'https://nintenduo.com/wp-content/uploads/2022/05/Pokemon-Home-Cambio-Ataques-01.webp',
    },
  ];
  
  function selectcontrincante(contrincanteClass) {
    console.log(`You have selected ${contrincanteClass}`);
  
    switch (contrincanteClass) {
      case 'Oshawott':
        contrincante = warrior;
        console.log(contrincante, 'Oshawott');
  
        break;
  
      case 'contrincante':
        contrincante = contrincante;
        console.log(contrincante, 'hide contrincante');
        break;
  
    }
  }
  
  function hideRestOfcontrincantes(contrincanteClass) {
    switch (contrincanteClass) {
      case 'Oshawott':
        document.getElementById('contrincante').style.display = 'none';
        break;
     
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
    if (contrincante == undefined) {
      contrincante = Oshawott;
      return;
    }
    hideRestOfcontrincantes(contrincante.contrincanteClass);
    let enemigo = randomenemigo();
    document.querySelector('.enemigos').style.display = 'inline-block';
    document.querySelector('#special').disabled = true;
    document.querySelector('#Ataque').addEventListener('click', function () {
      console.log('Ataque');
      OshawottAtaque(contrincante, enemigo);
    });
    document.querySelector('#Defensa').addEventListener('click', function () {
      console.log('Defensa');
      OshawottDefensa(contrincante, enemigo);
    });
  
    document.querySelector('#special').addEventListener('click', function () {
      console.log('special');
      OshawottSpecial(contrincante, enemigo);
      document.querySelector('#special').disabled = true;
    });
  }
  
  function setcontrincanteStatus() {
    document.getElementById('Oshawott-hp').innerHTML = Oshawott.health;
    document.getElementById('Oshawott-str').innerHTML = Oshawott.strength;
    document.getElementById('Oshawott-def').innerHTML = Oshawott.defense;
    document.getElementById('Oshawott-velocidad').innerHTML = Oshawott.velocidad;
  
    
  }
  function setenemigoStatus(enemigo) {
    document.getElementById('enemigo-hp').innerHTML = enemigo.health;
    document.getElementById('enemigo-str').innerHTML = enemigo.strength;
    document.getElementById('enemigo-def').innerHTML = enemigo.defense;
    document.getElementById('enemigo-velocidad').innerHTML = enemigo.velocidad;
    document.getElementById('enemigo-name').innerHTML = enemigo.name;
    document.getElementById('enemigo-image').src = enemigo.enemigoImg;
  }
  setcontrincanteStatus();
  document.querySelector('.enemigos').style.display = 'none';
  
  function OshawottAtaque(jugador, target) {
    let daño = Math.floor(Math.random() * jugador.strength) * 1.5;
    let enemigoDefensaNumber = Math.floor(Math.random() * 9) + 1;
    if (enemigoDefensaNumber >= 7) {
      enemigoDefensa(target, jugador);
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
    document.querySelector('#enemigo-hp').innerHTML = target.health;
  
    generateText(`Oshawott golpea ${target.name} con ${daño} daño.`);
  
    setTimeout(() => {
      enemigoAtaque(target, jugador);
    }, 3000);
    let rndNumber = randomNumber();
  }
  
  function generateText(text) {
    logText.innerHTML = '';
  
    return (logText.innerHTML = text);
  }
  
  function enemigoAtaque(enemigo, target) {
    let daño = Math.floor(Math.random() * enemigo.strength) * 1.5;
    generateText(`${enemigo.name} golpea ${target.contrincanteClass} con ${daño} daño.`);
    target.health -= daño;
  
    document.querySelector(`#${target.contrincanteClass}-hp`).innerHTML = target.health;
  }
  
  function OshawottDefensa(jugador, enemigo) {
    generateText(`${jugador.name} se esta defendiendo.`);
    let daño = jugador.Defensa - enemigo.strength;
  
    setTimeout(() => {
      generateText(`${enemigo.name} golpea ${jugador.name} con ${daño} daño.`);
      jugador.health -= daño;
      

      document.querySelector(`#${jugador.contrincanteClass}-hp`).innerHTML = jugador.health;
    }, 4000);
  }
  
  function enemigoDefensa(enemigo, jugador) {
    
    let daño = jugador.Defensa - enemigo.strength;
    setTimeout(() => {
      generateText(`${enemigo.name},  se esta defendiendo`);
      enemigos.health -= daño;
      document.querySelector('#enemigo-hp').innerHTML = enemigo.health;
    }, 5000);
  }
  
  function randomenemigo() {
    let enemigo = enemigos[Math.floor(Math.random() * enemigos.length)];
    console.log(enemigo);
    setenemigoStatus(enemigo);
    return enemigo;
  }
  
  function randomNumber() {
    const number = Math.floor(Math.random() * 99);
    return number;
  }
  
  function OshawottSpecial(jugador, enemigo) {
    let daño = jugador.strength * 2.5;
    generateText(
      `${jugador.name} esta usando su atque especial : ${jugador.specialAenemigoAtaque}, causa ${daño}  daño a ${enemigo.name}.`
    );
    let enemigoDefensaNumber = Math.floor(Math.random() * 9) + 1;
    if (enemigoDefensaNumber >= 7) {
      enemigoDefend(enemigo, jugador);
    }
    enemigo.health -= daño;
    document.querySelector('#enemigo-hp').innerHTML = enemigo.health;
  
    setTimeout(() => {
      enemigoAtaque(enemigo, jugador);
    }, 3000);
  }
