import React, { Component } from 'react';
import ReactPixel from 'react-facebook-pixel';

import Header from './layout/header';
import Footer from './layout/footer';

import '../assets/sass/style.css';

import combatWhite from '../assets/img/products/combatWhite.jpg';
import lookWhite from '../assets/img/products/lookWhite.jpg';
import politeJacket from '../assets/img/products/politeJacket.jpg';
import madeGrey from '../assets/img/products/madeGrey.jpg';
import snapback from '../assets/img/products/snapback.jpg';
// import dtomBlack from '../assets/img/products/dtomBlack.jpg';
import dtomGreen from '../assets/img/products/dtomGreen.jpg';
// import dtomRed from '../assets/img/products/dtomRed.jpg';
import backstabber from '../assets/img/products/backstabber.jpg';
import dogtags from '../assets/img/products/dogtags.jpg';
import politeSweats from '../assets/img/products/politeSweats.jpg';
import target from '../assets/img/products/target.jpg';

import dtom1Art from '../assets/img/prints/dtom1.jpg';
import lookArt from '../assets/img/prints/look.jpg';
import targetArt from '../assets/img/prints/target.jpg';
import peaceArt from '../assets/img/prints/peace.jpg';
import dtom2Art from '../assets/img/prints/dtom2.jpg';
import preyArt from '../assets/img/prints/prey.jpg';

const advancedMatching = {};
const options = {
    autoConfig: true,
    debug: false,
};
ReactPixel.init('1964686717087734', advancedMatching, options);

const products = [
  {
    id: 'prod_CIp2BBLBuBWOQn',
    img: [dtomGreen],
    title: 'Dont Trap on Me',
    desc: 'A modernization of the Gadsden flag dating back to 1775. Originally given to the Commander and Chief of the Navy before departing on their first mission, and a second to the Congress of our home state of South Carolina. The Gadsden flag was considered one of the first flags of the United States. It was brought about during the America Revolution symbolizing the fight for independence. Since the Revolution, the flag has seen resurgences as a symbol of American patriotism, disagreement with government, or support for civil liberties. This mark is symbolic of a revolt against enslavement by debt, the use of money in coercion and/or extortion upon others. The spear of the stake is piercing through the snake, killing it in the shape of the money sign. A deadly reminder, Dont Trap on Me.',
    price: '200.00',
    size: ['S','M','L','XL','2XL']
  },
  {
    id: 'prod_CId9kTzQEr3FTe',
    img: [combatWhite],
    title: 'Combat',
    desc: 'I pledge allegiance to this lifestyle, and who is real for which they stand, one culture under none, unstoppable, with real eyes to realize it all.',
    price: '60.00',
    size: ['S','M','L','XL','2XL']
  },
  {
    id: 'prod_CIp62MoAdQqj8X',
    img: [politeJacket],
    title: 'Polite',
    desc: 'Entitlement endangers existence. Irrationale evokes anger. Violence spawns violence. Yet through it all, polite tactics prosper. Be FUCKIN polite. We changed one letter to shift the focus of enforcement back towards unity and universal truths. We must quit passing blame and provoking. It is time we come together, take as stand, and hold each other accountable as we reenforce the peoples rule.',
    price: '300.00',
    size: ['S','M','L','XL','2XL']
  },
  {
    id: 'prod_CIp9sqp3UlFn2O',
    img: [madeGrey],
    title: 'Made',
    desc: 'A graffiti tag taken from the 1992 LA riots paired with Ben Greats single MADE. Futures mistress is Historys whore. Made in America, Land of the free and shit, Trump in the White House, There go our leadership, Love lost its fight now, War come to see the bitch, Sacraficed alive now, Everybody plead the fifth. Never forget.',
    price: '60.00',
    size: ['S','M','L','XL','2XL']
  },
  {
    id: 'prod_CIp82rd2DZAtby',
    img: [snapback],
    title: 'Stay Woke',
    desc: 'A tribute to the mental stance, it is all in your head. Dont think too far outside of yourself. Block out the bad thoughts, and create what you think, forever making room for more.',
    price: '40.00'
  },
  {
    id: 'prod_CIpCGoxg9jy4k3',
    img: [lookWhite],
    title: 'Look',
    desc: '"You can rarely see what is right in front of you." Inspired by the false personas scheming to take from thee. Nothing is really as it seems. Ask questions, seek answers, conclude understanding, fear no man, trust your truths, and keep your eyes open.',
    price: '60.00',
    size: ['S','M','L','XL','2XL']
  },
  {
    id: 'prod_CIpceSB01nOb4H',
    img: [backstabber],
    title: 'Backstabber',
    desc: "They can't stab you in the back if your back isn't turned. Stop turning your back on people.",
    price: '60.00',
    size: ['S','M','L','XL','2XL']
  },
  {
    id: 'prod_CIpdaURayPdyYV',
    img: [dogtags],
    title: 'Dog Tags',
    desc: 'I pledge allegiance to this lifestyle, and who is real for which they stand, one culture under none, unstoppable, with real eyes to realize it all.',
    price: '40.00'
  },
  {
    id: 'prod_CJ418lsUsNqXKY',
    img: [politeSweats],
    title: 'Polite Sweatsuit',
    desc: 'I pledge allegiance to this lifestyle, and who is real for which they stand, one culture under none, unstoppable, with real eyes to realize it all.',
    price: '80.00'
  },
  {
    id: 'prod_CJ44XBL5bFlnd2',
    img: [target],
    title: 'Target',
    desc: 'I pledge allegiance to this lifestyle, and who is real for which they stand, one culture under none, unstoppable, with real eyes to realize it all.',
    price: '60.00'
  }
];

const prints = [
  {
    art: [dtom1Art]
  },
  {
    art: [targetArt]
  },
  {
    art: [lookArt]
  },
  {
    art: [peaceArt]
  },
  {
    art: [dtom2Art]
  },
  {
    art: [preyArt]
  }
];

class Product extends React.Component {
  render() {
    return (
      <img src={this.props.img[0]} alt="" />
    )
  }
};

class Print extends React.Component {
  render() {
    return (
      <img className="print" src={this.props.art[0]} alt="" />
    )
  }
};

class App extends Component{
  render(){
     return (
        <div>
          <Header />
          <section id="product">
            {products.map((product, index) => (
              <Product
                key={index}
                img={product.img}
                title={product.title}
                desc={product.desc}
                price={product.price}
                size={product.size}
                color={product.color}
              />
            ))}
            {prints.map((print, index) => (
              <Print
                key={index}
                art={print.art}
              />
            ))}
          </section>
          <Footer />
        </div>
     );
  }
}

export default App;
