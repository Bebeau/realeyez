import React, { Component } from 'react';

import Helmet from 'react-helmet';

class Header extends Component{
    render(){
       return (
       		<div>
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
		            
		            <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
		            <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
		            <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
		            <link rel="manifest" href="favicon/site.webmanifest" />
		            <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#1a1d40" />
		            <link rel="shortcut icon" href="favicon/favicon.ico" />
		            <meta name="msapplication-TileColor" content="#da532c" />
		            <meta name="msapplication-config" content="favicon/browserconfig.xml" />
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

	       		<header>
	          		<div className="logo" />
	          	</header>
          	</div>
       );
    }
}

export default Header;
