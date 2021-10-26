import React from "react";

import pokemon1 from "./../images/pokemonImages/pokemon1.jpg";
import pokemon2 from "./../images/pokemonImages/pokemon2.jpg";
import pokemon3 from "./../images/pokemonImages/pokemon3.jpg";

export default function Card() {
  return (
    <div>
      <div id="cards">
        <figure class="card card--normal">
          <div class="card__image-container">
            <img src={pokemon1} alt="Eevee" class="card__image" />
          </div>

          <figcaption class="card__caption">
            <h1 class="card__name">Eevee</h1>

            <h3 class="card__type">normal</h3>

            <table class="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>55</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>55</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>50</td>
                </tr>

                <tr>
                  <th>Special Attack</th>
                  <td>45</td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td>65</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>55</td>
                </tr>
              </tbody>
            </table>

            <div class="card__abilities">
              <h4 class="card__ability">
                <span class="card__label">Ability</span>
                Run Away
              </h4>
              <h4 class="card__ability">
                <span class="card__label">Hidden Ability</span>
                Anticipation
              </h4>
            </div>
          </figcaption>
        </figure>

        <figure class="card card--water">
          <div class="card__image-container">
            <img src={pokemon2} alt="Vaporeon" class="card__image" />
          </div>

          <figcaption class="card__caption">
            <h1 class="card__name">Vaporeon</h1>

            <h3 class="card__type">water</h3>

            <table class="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>130</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>65</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>60</td>
                </tr>

                <tr>
                  <th>Special Attack</th>
                  <td>110</td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td>95</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>65</td>
                </tr>
              </tbody>
            </table>

            <div class="card__abilities">
              <h4 class="card__ability">
                <span class="card__label">Ability</span>
                Absorb
              </h4>
              <h4 class="card__ability">
                <span class="card__label">Hidden Ability</span>
                Hydration
              </h4>
            </div>
          </figcaption>
        </figure>

        <figure class="card card--electric">
          <div class="card__image-container">
            <img src={pokemon3} alt="Jolteon" class="card__image" />
          </div>

          <figcaption class="card__caption">
            <h1 class="card__name">Jolteon</h1>

            <h3 class="card__type">electric</h3>

            <table class="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>65</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>65</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>60</td>
                </tr>

                <tr>
                  <th>Special Attack</th>
                  <td>110</td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td>95</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>130</td>
                </tr>
              </tbody>
            </table>

            <div class="card__abilities">
              <h4 class="card__ability">
                <span class="card__label">Ability</span>
                Volt Absorb
              </h4>
              <h4 class="card__ability">
                <span class="card__label">Hidden Ability</span>
                Quick Feet
              </h4>
            </div>
          </figcaption>
        </figure>

        <figure class="card card--fire">
          <div class="card__image-container">
            <img src={pokemon1} alt="Flareon" class="card__image" />
          </div>

          <figcaption class="card__caption">
            <h1 class="card__name">Flareon</h1>

            <h3 class="card__type">fire</h3>

            <table class="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>65</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>130</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>60</td>
                </tr>

                <tr>
                  <th>Special Attack</th>
                  <td>95</td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td>110</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>65</td>
                </tr>
              </tbody>
            </table>

            <div class="card__abilities">
              <h4 class="card__ability">
                <span class="card__label">Ability</span>
                Flash Fire
              </h4>
              <h4 class="card__ability">
                <span class="card__label">Hidden Ability</span>
                Guts
              </h4>
            </div>
          </figcaption>
        </figure>

        <figure class="card card--psychic">
          <div class="card__image-container">
            <img src={pokemon2} alt="Espeon" class="card__image" />
          </div>

          <figcaption class="card__caption">
            <h1 class="card__name">Espeon</h1>

            <h3 class="card__type">psychic</h3>

            <table class="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>65</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>65</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>60</td>
                </tr>

                <tr>
                  <th>Special Attack</th>
                  <td>130</td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td>95</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>110</td>
                </tr>
              </tbody>
            </table>

            <div class="card__abilities">
              <h4 class="card__ability">
                <span class="card__label">Ability</span>
                Synchronize
              </h4>
              <h4 class="card__ability">
                <span class="card__label">Hidden Ability</span>
                Magic Bounce
              </h4>
            </div>
          </figcaption>
        </figure>

        <figure class="card card--dark">
          <div class="card__image-container">
            <img src={pokemon1} alt="Umbreon" class="card__image" />
          </div>

          <figcaption class="card__caption">
            <h1 class="card__name">Umbreon</h1>

            <h3 class="card__type">dark</h3>

            <table class="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>95</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>65</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>110</td>
                </tr>

                <tr>
                  <th>Special Attack</th>
                  <td>60</td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td>130</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>65</td>
                </tr>
              </tbody>
            </table>

            <div class="card__abilities">
              <h4 class="card__ability">
                <span class="card__label">Ability</span>
                Synchronize
              </h4>
              <h4 class="card__ability">
                <span class="card__label">Hidden Ability</span>
                Inner Focus
              </h4>
            </div>
          </figcaption>
        </figure>

        <figure class="card card--grass">
          <div class="card__image-container">
            <img src={pokemon2} alt="Leafeon" class="card__image" />
          </div>

          <figcaption class="card__caption">
            <h1 class="card__name">Leafeon</h1>

            <h3 class="card__type">grass</h3>

            <table class="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>65</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>110</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>130</td>
                </tr>

                <tr>
                  <th>Special Attack</th>
                  <td>60</td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td>65</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>95</td>
                </tr>
              </tbody>
            </table>

            <div class="card__abilities">
              <h4 class="card__ability">
                <span class="card__label">Ability</span>
                Leaf Guard
              </h4>
              <h4 class="card__ability">
                <span class="card__label">Hidden Ability</span>
                Chlorophyll
              </h4>
            </div>
          </figcaption>
        </figure>

        <figure class="card card--ice">
          <div class="card__image-container">
            <img src={pokemon3} alt="Glaceon" class="card__image" />
          </div>

          <figcaption class="card__caption">
            <h1 class="card__name">Glaceon</h1>

            <h3 class="card__type">ice</h3>

            <table class="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>65</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>60</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>110</td>
                </tr>

                <tr>
                  <th>Special Attack</th>
                  <td>130</td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td>95</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>65</td>
                </tr>
              </tbody>
            </table>

            <div class="card__abilities">
              <h4 class="card__ability">
                <span class="card__label">Ability</span>
                Snow Cloak
              </h4>
              <h4 class="card__ability">
                <span class="card__label">Hidden Ability</span>
                Ice Body
              </h4>
            </div>
          </figcaption>
        </figure>

        <figure class="card card--fairy">
          <div class="card__image-container">
            <img src={pokemon1} alt="Sylveon" class="card__image" />
          </div>

          <figcaption class="card__caption">
            <h1 class="card__name">Sylveon</h1>

            <h3 class="card__type">fairy</h3>

            <table class="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>95</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>65</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>65</td>
                </tr>

                <tr>
                  <th>Special Attack</th>
                  <td>110</td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td>130</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>60</td>
                </tr>
              </tbody>
            </table>

            <div class="card__abilities">
              <h4 class="card__ability">
                <span class="card__label">Ability</span>
                Cute Charm
              </h4>
              <h4 class="card__ability">
                <span class="card__label">Hidden Ability</span>
                Pixilate
              </h4>
            </div>
          </figcaption>
        </figure>
      </div>

      {/* <script id="card-template" type="text/x-handlebars-template">
    <figure class="card card--{{type}}">
      <div class="card__image-container">
        <img src="{{imageAddress}}" alt="{{name}}" class="card__image">   
      </div>
      
      <figcaption class="card__caption">
        <h1 class="card__name">{{name}}</h1>
    
        <h3 class="card__type">e
          {{type}}
        </h3>
    
        <table class="card__stats">
          <tr>
            <th>HP</th>
            <td>{{hp}}</td>
          </tr>
          <tr>
            <th>Attack</th>
            <td>{{attack}}</td>
          </tr>
          
          <tr>
            <th>Defense</th>
            <td>{{defense}}</td>
          </tr>
    
          <tr>
            <th>Special Attack</th>
            <td>{{spAttack}}</td>
          </tr>
          <tr>
            <th>Special Defense</th>
            <td>{{spDefense}}</td>
          </tr>
          <tr>
            <th>Speed</th>  
            <td>{{speed}}</td>
          </tr>
        </table>
        
        <div class="card__abilities">
          <h4 class="card__ability">
            <span class="card__label">Ability</span>
            {{ability1}}
          </h4>
          <h4 class="card__ability">
            <span class="card__label">Hidden Ability</span>
            {{ability2}}
          </h4>
        </div>
      </figcaption>
    </figure>
    </script> */}
    </div>
  );
}
