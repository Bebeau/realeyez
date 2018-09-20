import React, { Component } from 'react';

import Mailchimp from 'react-mailchimp-form'

import init from '../../assets/img/init.svg';

class Footer extends Component{
    render(){
       return (
          <footer>
          	<h3>I pledge allegiance to this lifestyle and who is real for which they stand, one culture under none, unstoppable, with real eyes to realize it all.</h3>
            <Mailchimp
              action='https://realeyezapparel.us2.list-manage.com/subscribe/post?u=5103cbe30f8ebcec739f1ae34&amp;id=550282ed98'
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Email',
                  type: 'email',
                  required: true
                }
              ]}
              messages={
                {
                  sending: "Sending...",
                  success: "Thank you for your support.",
                  error: "Oops, that didn't work.",
                  empty: "Please submit a vaild email address.",
                  duplicate: "This email address has already joined.",
                  button: "I Agree"
                }
              }
            />
            <a href="https://facebook.com/realeyezapparel" target="_BLANK" rel="noopener noreferrer"><i className="facebook" /></a>
            <a href="https://instagram.com/realeyezapparel" target="_BLANK" rel="noopener noreferrer"><i className="instagram" /></a>
          	<p>Built for you by <a href="http://theinitgroup.com" target="_BLANK"><img width="35px" src={init} alt="The INiT Group" /></a></p>
          </footer>
       );
    }
}

export default Footer;
