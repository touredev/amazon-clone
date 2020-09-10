import React from "react";
import "./Home.css";
import Product from "../../components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.amazon.fr/images/G/08/kindle/journeys/OTJiNjVkMWQt/OTJiNjVkMWQt-ZjFlY2I4OGMt-w1500._CB407379395_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="13921051"
            title="Echo Dot (3ème génération), Enceinte connectée avec Alexa, Tissu anthracite"
            price={39.99}
            image="https://www.amazon.fr/images/I/61u48FEs0rL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="483369919"
            title="Découvrez Echo Studio, Enceinte connectée avec audio haute-fidélité et Alexa"
            price={199.99}
            image="https://www.amazon.fr/images/I/91Z0cGhaeCL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="7415568"
            title="Découvrez Echo Flex, Contrôlez les appareils connectés par simple commande vocale avec Alexa"
            price={29.99}
            image="https://www.amazon.fr/images/I/712ktIAwjvL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="5645646"
            title="FITUEYES Meuble TV Pied avec 3 Etagères Support Pivotant pour Téléviseur de 32 à 60 Pouce"
            price={63.66}
            image="https://www.amazon.fr/images/I/61PAS%2B0s1YL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="67908454"
            title="MCorz Original Xiaomi TV Box S (EU Version) 4K Ultra HD avec Dolby Audio"
            price={52.90}
            image="https://www.amazon.fr/images/I/51gZPkkPAXL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="358722024"
            title="TV LED 4K 108 cm LG 43UM7400 Téléviseur LCD 43 pouces TV Connectée"
            price={469.47}
            image="https://www.amazon.fr/images/I/719dEKVEVdL._AC_SX425_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
