(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=s,e.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),i=n("lwAK"),a=n("FYa8"),u=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var s=f[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var l=o.props[s],p=r[s]||new Set;p.has(l)?i=!1:(p.add(l),r[s]=p)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function y(t){var e=t.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(t)},e)}))})))}y.rewind=d.rewind;var h=y;e.default=h},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},Bycv:function(t,e,n){"use strict";var r=n("1OyB"),o=n("vuIU"),i=n("Ji7U"),a=n("md7G"),u=n("foSv"),c=n("q1tI"),s=n.n(c),l=n("8Kt/"),f=n.n(l),p=s.a.createElement;function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var y=function(t){Object(i.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return p(f.a,null,p("title",null,"Violet"),p("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),p("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap",rel:"stylesheet"}),p("link",{rel:"shortcut icon",type:"image/png",href:"/images/logo2.png"}))}}]),n}(c.Component);e.a=y},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=o},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||a()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},U8pU:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),a=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),s=n("RIqP");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(u){a(s,u);var c=l(s);function s(t){var i;return r(this,s),i=c.call(this,t),p&&(e.add(o(i)),n(o(i))),i}return i(s,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},aeIR:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return n("mnIH")}])},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},gOpN:function(t,e,n){"use strict";var r=n("1OyB"),o=n("vuIU"),i=n("Ji7U"),a=n("md7G"),u=n("foSv"),c=n("q1tI"),s=n.n(c).a.createElement;function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var f=function(t){Object(i.a)(n,t);var e=l(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return s("footer",null,s("div",{className:"row"},s("div",{className:"col span-1-of-2"},s("ul",{className:"footer-nav"},s("li",null,s("a",{href:"#"},"About us")),s("li",null,s("a",{href:"/privacy"},"Privacy")))),s("div",{className:"col span-1-of-2"},s("ul",{className:"social-links"},s("li",null,s("a",{href:"#"},s("i",{className:"ion-social-facebook"}))),s("li",null,s("a",{href:"#"},s("i",{className:"ion-social-twitter"}))),s("li",null,s("a",{href:"#"},s("i",{className:"ion-social-github"}))),s("li",null,s("a",{href:"#"},s("i",{className:"ion-social-instagram"})))))),s("div",{className:"row"},s("p",null,"This webpage was created for the Violet."),s("p",null,"Build with ",s("i",{className:"ion-ios-heart",style:{color:"#ea0000",padding:"0 3px"}})," by AFG")))}}]),n}(c.Component);e.a=f},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("U8pU"),o=n("JX7q");function i(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!==typeof e?Object(o.a)(t):e}},mnIH:function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),o=n("vuIU"),i=n("Ji7U"),a=n("md7G"),u=n("foSv"),c=n("q1tI"),s=n.n(c),l=n("Bycv"),f=n("gOpN"),p=s.a.createElement;function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var y=function(t){Object(i.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return p(s.a.Fragment,null,p(l.a,null),p("div",{style:{backgroundColor:"#8e44ad"}},p("nav",{style:{color:"white",backgroundColor:"rgba(0, 0, 0, 0.70)"}},p("div",{className:"row"},p("img",{src:"/images/logo2.png",alt:"Violet Logo",className:"logo"}),p("ul",{className:"main-nav"},p("li",null,p("a",{href:"/"},"Home")),p("li",null,p("a",{href:"/login"},"Login"))))),p("section",{style:{color:"white",backgroundColor:"rgba(0, 0, 0, 0.70)"},className:"section-features"},p("div",{className:"row"},p("h2",null,"Privacy"),p("p",{className:"long-copy"},"We do not store any personal data of your Spoitfy activities. Only the songs that you have listened is stored and the notes you wrote for a song is stored. After a while you must login to Violet via Spotify because your session is not permanent in the app. We use Spotify API below this you can find detailed explanation.")),p("div",{className:"row"},p("div",{className:"col span-1-of-4 box"},p("i",{className:"ion-log-in icon-big"}),p("h3",null,"User Information"),p("p",null,"We get the user information to log into the Violet but the data is not stored on Violet app.")),p("div",{className:"col span-1-of-4 box"},p("i",{className:"ion-music-note icon-big"}),p("h3",null,"User Current Playin Song"),p("p",null,"This is neccessary to what you are currently listening on Spotify so we can show the notes according to what you are listening.")),p("div",{className:"col span-1-of-4 box"},p("i",{className:"ion-headphone icon-big"}),p("h3",null,"Change user currently listenin song"),p("p",null,"If you click the headphone on the card current playing song can be change so in order to change this the permission is required.")),p("div",{className:"col span-1-of-4 box"},p("i",{className:"ion-ios-list icon-big"}),p("h3",null,"Notes"),p("p",null,"The notes you have wrote for a song is stored."))))),p(f.a,null))}}]),n}(c.Component);e.default=y},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[["aeIR",0,1]]]);