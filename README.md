# Proyecto-web-interactivo-con-JS
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Pokemon</title>
  </head>
  <body>
    <div class="container">
      <div class="personajes">
        <div onclick="selectcontrincante('Oshawott')" id="Oshawott" class="personaje">
          <div class="personaje-name">
            <span>Oshawott</span>
          </div>
          <div class="personaje-info">
            <div class="personaje-image">
              <img
                src="https://numpaints.com/wp-content/uploads/2022/03/pokemon-Oshawott-paint-by-numbers.jpg"
                alt="Oshawott"
              />
            </div>
            <div class="personaje-stats">
              <ul>
                <li>
                  <span>HP:</span>
                  <span id="Oshawott-hp">100</span>
                </li>
                <li>
                  <span>Str:</span>
                  <span id="Oshawott-str">100</span>
                </li>
                <li>
                  <span>Def:</span>
                  <span id="Oshawott-def">100</span>
                </li>
                <li>
                  <span>velocidad:</span>
                  <span id="Oshawott-velocidad">100</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="vs">
          <img src="https://img.freepik.com/vector-gratis/versus-logo-vs-letras-deportes-competencia-lucha_29865-1568.jpg" alt="">


        </div>
      

        <div onclick="selectcontrincante('contrincante')" id="contrincante" class="personaje">
          <div class="personaje-name">
            <span>Pikachu</span>
          </div>
          <div class="personaje-info">
            <div class="personaje-image">
              <img src="https://nintenduo.com/wp-content/uploads/2022/05/Pokemon-Home-Cambio-Ataques-01.webp" alt="Pikachu" />
            </div>
            <div class="personaje-stats">
              <ul>
                <li>
                  <span>HP:</span>
                  <span id="contrincante-hp">100</span>
                </li>
                <li>
                  <span>Str:</span>
                  <span id="contrincante-str">100</span>
                </li>
                <li>
                  <span>Def:</span>
                  <span id="contrincante-def">100</span>
                </li>
                <li>
                  <span>velocidad:</span>
                  <span id="contrincante-velocidad">100</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
         <div class="enemigos">
         <div class="enemigo-name">
            <span id="enemigo-name"></span>
          </div>
          <div class="enemigo-info">
            <div class="enemigo-image">
              <img id="enemigo-image"

                alt="enemigo-name"
              />
            </div>
            <div class="enemigo-stats">
              <ul>
                <li>
                  <span>HP:</span>
                  <span id="enemigo-hp">100</span>
                </li>
                <li>
                  <span>Str:</span>
                  <span id="enemigo-str">100</span>
                </li>
                <li>
                  <span>Def:</span>
                  <span id="enemigo-def">100</span>
                </li>
                <li>
                  <span>velocidad:</span>
                  <span id="enemigo-velocidad">100</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
        <div class="actions">
          <div class="start">
        
        <a href="#" class="rainbow-button" onclick="startGame()"  id="start" alt="Elige contrincante"></a>
      </div>


      <div class="actionsButtons">
        
        <a href="#" class="rainbow-button"  id="Ataque" alt="Ataque"></a>
        <a href="#" class="rainbow-button"  id="Defensa"alt="Defensa"></a>
        <a href="#" class="rainbow-button"  id="special"alt="Ataque Especial"></a>
        
       
      </div>

  
        </div>
        <div class="log">
          <div id="log">
            <span id="text"></span>
          </div>
        </div>
      </div>

    </div>
    <script src="script.js"></script>
  </body>
</html>
