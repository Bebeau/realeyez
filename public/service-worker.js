"use strict";var precacheConfig=[["/index.html","54b0e1a1f29e74e1a97de5e228a515b4"],["/static/css/main.2289b2a4.css","bbcde0ca2ef4a00bfb12b15c20891e3a"],["/static/js/main.52ecbb2a.js","46aa9796a9b0d5d235ee92a36482f3e0"],["/static/media/backstabber.97712267.jpg","977122671d6fa37982a79ec85fdda7e9"],["/static/media/combatWhite.c42c2a49.jpg","c42c2a491f966ddc822a4918f5ac0542"],["/static/media/dogtags.724b7493.jpg","724b74934a7039876bd6db12f700021a"],["/static/media/dtom1.3250b581.jpg","3250b581fb97d3eb93decf2c3c98e998"],["/static/media/dtom2.196c06b9.jpg","196c06b962c63c6a26cadf6c4b6de1e7"],["/static/media/dtomGreen.ed52d29a.jpg","ed52d29adadfcfdccc7d48b77b25baa3"],["/static/media/facebook.27488e24.svg","27488e249540284a5e627cf682e63c60"],["/static/media/init.f66c9165.svg","f66c9165c535f6ff327769075cb6734e"],["/static/media/instagram.4cdba622.svg","4cdba62291996fa4409e6d33efb675f0"],["/static/media/look.12e996a6.jpg","12e996a61fd19f365685122b8bc5b64f"],["/static/media/lookWhite.ef938183.jpg","ef938183aebae2e47ab4ab125fe1c3e3"],["/static/media/madeGrey.33e705ae.jpg","33e705ae2047ed13d4c68fe7e93ba30a"],["/static/media/peace.02aa46ea.png","02aa46ea3492cc6dae744b01ce604b14"],["/static/media/peace.73986e16.jpg","73986e16442328a62656dc1665fd942d"],["/static/media/politeJacket.914298b0.jpg","914298b0d46d33e4985641eb6117ef94"],["/static/media/politeSweats.bd4fab45.jpg","bd4fab45820c747127e33240da98cac5"],["/static/media/prey.32f5838f.jpg","32f5838f245891b87b889a3ace4aae37"],["/static/media/snapback.1412aa2c.jpg","1412aa2c12eb5519b9ebef56b3353297"],["/static/media/target.22fbb429.jpg","22fbb429b341482bd3094d0352bafbed"],["/static/media/target.a454c4d2.jpg","a454c4d2a5c5b46d62483b40cb448bef"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});