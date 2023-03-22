import React, { Component } from 'react';
import init from '../../assets/img/init.svg';

class Footer extends Component{
    render(){
       return (
          <footer>
          	<p>Built for you by <a href="http://theinitgroup.com" target="_BLANK" rel="noopener noreferrer"><img src={init} alt="The INiT Group" /></a></p>
          </footer>
       );
    }
}

export default Footer;
