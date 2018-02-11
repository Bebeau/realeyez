import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
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

const products = [
  {
    img: [dtomGreen,dtomBlack,dtomRed],
    title: 'Dont Trap on Me',
    desc: 'Dont Trap on Me is a modernization of the Gadsden flag dating back to 1775. Originally given to the Commander and Chief of the Navy before departing on their first mission, and a second to the Congress of our home state of South Carolina. The Gadsden flag was considered one of the first flags of the United States. It was brought about during the America Revolution symbolizing the fight for independence. Since the Revolution, the flag has seen resurgences as a symbol of American patriotism, disagreement with government, or support for civil liberties. This mark is symbolic of a revolt against enslavement by debt, the use of money in coercion and/or extortion upon others. The spear of the stake is piercing through the snake, killing it in the shape of the money sign. A deadly reminder, Dont Trap on Me.',
    price: '200.00',
    size: ['S','M','L','XL','2XL'],
    color: [
      {value: 'Black', label: 'Black', img: [dtomBlack]},
      {value: 'Green', label: 'Green', img: [dtomGreen]},
      {value: 'Burgundy', label: 'Burgundy', img: [dtomRed]},
    ]
  },
  {
    img: [combatWhite],
    title: 'Combat',
    desc: 'I pledge allegiance to this lifestyle, and who is real for which they stand, one culture under none, unstoppable, with real eyes to realize it all.',
    price: '60.00',
    size: ['S','M','L','XL','2XL']
  },
  {
    img: [politeJacket],
    title: 'Polite Tactical Soft Shell',
    desc: 'Entitlement endangers existence. Irrationale evokes anger. Violence spawns violence. Yet through it all, polite tactics prosper. Be FUCKIN polite. We changed one letter to shift the focus of enforcement back towards unity and universal truths. We must quit passing blame and provoking. It is time we come together, take as stand, and hold each other accountable as we reenforce the peoples rule. Open enrollment has begun.',
    price: '300.00',
    size: ['S','M','L','XL','2XL']
  },
  {
    img: [madeGrey],
    title: 'Made',
    desc: 'This was a piece we put together in collaboration with the release of Ben Greats single, MADE. The print was a graffiti tag captured during the LA riots that reads, "Crips Bloods Mexicans together tonite.".',
    price: '60.00',
    size: ['S','M','L','XL','2XL']
  },
  {
    img: [snapback],
    title: 'Stay Woke',
    desc: 'Interaction, interface, and strategy design. Former senior UX designer for Wells Fargo. Former VP of product for LegalHub. Fan of the bitcoins.',
    price: '40.00'
  },
  {
    img: [lookWhite],
    title: 'Look',
    desc: '"You can rarely see what is right in front of you." Inspired by the false personas trying to take from thee. Nothing is really as it seems. Ask questions, seek answers, conclude understanding, fear no man, trust your truths.',
    price: '60.00',
    size: ['S','M','L','XL','2XL']
  }
];

class Size extends React.Component {
  render() {
    return (
      <button>{this.props.size}</button>
    )
  }
};

class Thumb extends React.Component {
  render() {
    return (
      <img src={this.props.img} alt="" />
    )
  }
};

class Product extends React.Component {
  openModal(){
     ModalManager.open(
      <MyModal 
        onRequestClose={() => true}
        index={this.props.index}
        img={this.props.img}
        title={this.props.title}
        desc={this.props.desc}
        price={this.props.price}
        size={this.props.size}
        color={this.props.color}
      />
    );
  }
  render() {
    return (
      <img src={this.props.img[0]} alt="" onClick={this.openModal.bind(this)} />
    )
  }
};

class MyModal extends Component{
   render(){
      const { onRequestClose, index, img, title, desc, price, size, color } = this.props;
      return (
         <Modal
            onRequestClose={onRequestClose}
            effect={Effect.Fall}>

            <div className="half">
              
              <h3 className="price">${this.props.price}</h3>

              {this.props.size ?
                <div id="size">
                  {this.props.size.map((size, index) => (
                    <Size
                      key={index}
                      size={size}
                    />
                  ))}
                </div>
              : null}

              {this.props.color ?
                <Dropdown options={this.props.color} onChange={this._onSelect} value="" placeholder="Select color" />
              : null}

              <Checkout
                key={index}
                amount={this.props.price * 100}
              />

            </div>

            <div className="half">
              
              <h3>{this.props.title}</h3>
              <p id="desc">
                {this.props.desc}
              </p>
              <button className="closeModal" onClick={ModalManager.close}>X</button>

            </div>

         </Modal>
      );
   }
};
 
class Checkout extends React.Component {
  onToken = (token, args) => {
    fetch('/charge', {
      method: 'POST',
      body: JSON.stringify(token)
    });
  }
  render() {
    const { amount } = this.props;
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_ByoJucUkS7YYjs6OMlbtlA7x"
        image="https://gallery.mailchimp.com/5103cbe30f8ebcec739f1ae34/images/3d1c6a78-e5ce-463b-88cb-a06040f17916.jpg"
        bitcoin={true}
        name="Realeyez Apparel"
        description="Make 'em realize."
        currency="USD"
        amount={this.props.amount}
        shippingAddress={true}
      >
      <button>Buy Now</button>
      </StripeCheckout>
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
              content=""
            />
            <meta
              property="og:image:secure_url"
              content=""
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
              content=""
            />
            
            <script id="stripe-js" src="https://js.stripe.com/v3/" async></script>

            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-4879883-8"></script>

            <script>{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-4879883-2');
            `}</script>

            <div id="fb-root" />
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
          <Header />
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
