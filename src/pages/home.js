import React, { Component } from 'react';
// import axios from 'axios';
// import Dropdown from 'react-dropdown';
import StripeCheckout from 'react-stripe-checkout';

import Helmet from 'react-helmet';
import Header from './layout/header';
import Footer from './layout/footer';

import '../assets/sass/style.css';

import combatWhite from '../assets/img/products/combatWhite.jpg';
import lookWhite from '../assets/img/products/lookWhite.jpg';
import politeJacket from '../assets/img/products/politeJacket.jpg';
import madeGrey from '../assets/img/products/madeGrey.jpg';
import snapback from '../assets/img/products/snapback.jpg';
import dtomBlack from '../assets/img/products/dtomBlack.jpg';
import dtomGreen from '../assets/img/products/dtomGreen.jpg';
import dtomRed from '../assets/img/products/dtomRed.jpg';
import backstabber from '../assets/img/products/backstabber.jpg';
import dogtags from '../assets/img/products/dogtags.jpg';
import politeSweats from '../assets/img/products/politeSweats.jpg';
import target from '../assets/img/products/target.jpg';

const products = [
  {
    id: 'prod_CIp2BBLBuBWOQn',
    img: [dtomGreen,dtomBlack,dtomRed],
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

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toggled: false
//     }
//   }
//   handleClick() {
//     this.setState({
//       toggled: !this.state.toggled
//     });
//   }
//   render() {
//     return ( 
//       <button 
//         onClick={ this.handleClick.bind(this) } 
//         className= { this.state.toggled ? "selected" : "" }
//       >
//         { this.props.size } 
//       </button>
//     )    
//   }
// };

// class Thumb extends React.Component {
//   render() {
//     return (
//       <img src={this.props.img} alt="" />
//     )
//   }
// };

class Product extends React.Component {
  // openModal(){
  //   <MyModal 
  //     index={this.props.index}
  //     img={this.props.img}
  //     title={this.props.title}
  //     desc={this.props.desc}
  //     price={this.props.price}
  //     size={this.props.size}
  //     color={this.props.color}
  //   />
  // }
  render() {
    return (
      <img src={this.props.img[0]} alt="" />
    )
  }
};

// class MyModal extends Component{
//   render(){
//     const { index, img, title, desc, price, size, color } = this.props;
//     return (
//        <section id="productDetails">

//           <div className="half">

//             {this.props.img ?
//               <div id="size">
//                 {this.props.img.map((size, index) => (
//                   <Button
//                     key={index}
//                     size={size}
//                   />
//                 ))}
//               </div>
//             : null}
            
//             <h3 className="price">${this.props.price}</h3>

//             {this.props.size ?
//               <div id="size">
//                 {this.props.size.map((size, index) => (
//                   <Button
//                     key={index}
//                     size={size}
//                   />
//                 ))}
//               </div>
//             : null}

//             {this.props.color ?
//               <Dropdown 
//                 options={this.props.color} 
//                 onChange={this._onSelect} 
//                 value="" 
//                 placeholder="Select color" 
//               />
//             : null}

//             <Checkout
//               key={index}
//               amount={this.props.price * 100}
//             />

//           </div>

//           <div className="half">
            
//             <h3>{this.props.title}</h3>
//             <p id="desc">
//               {this.props.desc}
//             </p>
//             <button className="closeModal">X</button>

//           </div>

//        </section>
//     );
//   }
// };
 
class Checkout extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '5'
    };
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  render() {
    const { amount } = this.props;
    return (
      <div id="donate">
        <div id="quote">
          <h1>Look, I've put so much into creating this shit, but I need your help to make it.</h1>
          <h2>Donate any amount to my pursuit of printing this product line, and I'll send you one of our snapbacks.</h2>
          <input type="number" min="5" name="quantity" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} placeholder="$5" />
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_test_ByoJucUkS7YYjs6OMlbtlA7x"
            image="https://gallery.mailchimp.com/5103cbe30f8ebcec739f1ae34/images/81cbeb07-c1ab-4f6a-8fe9-13f4de7ebb4f.jpg"
            bitcoin={true}
            name="Realeyez Apparel"
            description="Make 'em realize."
            currency="USD"
            amount={this.state.inputValue*100}
            shippingAddress={true}
          >
            <button>Donate</button>
          </StripeCheckout>
          <div className="hatCount">39 hats left</div>
        </div>
      </div>
    )
  }
};

class App extends Component{
  render(){
     return (
        <div id="product">
          <Helmet
            title="Realeyez Apparel"
            meta={[
              {
                name: 'description',
                content:
                  'I pledge allegiance to this lifestyle, and who is real for which they stand, one culture under none, unstoppable, with real eyes to realize it all.'
              },
              {
                name: 'keywords',
                content: 'streetwear fashion clothing apparel style culture hiphop'
              }
            ]}
            >
            <meta
              name="description"
              content="I pledge allegiance to this lifestyle, and who is real for which they stand, one culture under none, unstoppable, with real eyes to realize it all."
            />
            
            <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon/favicon-16x16.png" />
            <link rel="manifest" href="../assets/img/favicon/site.webmanifest" />
            <link rel="mask-icon" href="../assets/img/favicon/safari-pinned-tab.svg" color="#1a1d40" />
            <link rel="shortcut icon" href="../assets/img/favicon/favicon.ico" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="msapplication-config" content="../assets/img/favicon/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />

            <link rel="canonical" href="http://realeyezapparel.com/" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Realeyez Apparel" />
            <meta
              property="og:description"
              content="I pledge allegiance to this lifestyle, and who is real for which they stand, one culture under none, unstoppable, with real eyes to realize it all."
            />
            <meta property="og:url" content="http://realeyezapparel.com/" />
            <meta property="og:site_name" content="Realeyez Apparel" />
            <meta property="fb:app_id" content="305877862171" />
            <meta
              property="og:image"
              content="https://gallery.mailchimp.com/5103cbe30f8ebcec739f1ae34/images/6e234fa8-7f91-4891-8d6e-5561fbdd32d0.png"
            />
            <meta
              property="og:image:secure_url"
              content="https://gallery.mailchimp.com/5103cbe30f8ebcec739f1ae34/images/6e234fa8-7f91-4891-8d6e-5561fbdd32d0.png"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:description"
              content="I pledge allegiance to this lifestyle, and who is real for which they stand, one culture under none, unstoppable, with real eyes to realize it all."
            />
            <meta name="twitter:title" content="Realeyez Apparel" />
            <meta name="twitter:site" content="@realeyezapparel" />
            <meta
              name="twitter:image"
              content="https://gallery.mailchimp.com/5103cbe30f8ebcec739f1ae34/images/caaa7847-0ef7-49ca-9266-170fa3b28cb7.png"
            />
            
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-4879883-2"></script>

            <script>{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-4879883-2');
            `}</script>

            <script>{`!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1964686717087734');
              fbq('track', 'PageView');`}
            </script>

          </Helmet>
          <div id="fb-root" />
          <Header />
          <Checkout />
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
          <Footer />
        </div>
     );
  }
}

export default App;
