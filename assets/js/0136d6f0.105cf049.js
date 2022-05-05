"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1152],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7621:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],s={id:"introduction",title:"Centrifugo introduction"},c=void 0,l={unversionedId:"getting-started/introduction",id:"version-3/getting-started/introduction",title:"Centrifugo introduction",description:"Centrifugo is an open-source scalable real-time messaging server in a language-agnostic way.",source:"@site/versioned_docs/version-3/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/docs/getting-started/introduction",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/getting-started/introduction.md",tags:[],version:"3",frontMatter:{id:"introduction",title:"Centrifugo introduction"},sidebar:"Introduction",next:{title:"Install Centrifugo",permalink:"/docs/getting-started/installation"}},u={},d=[{value:"Motivation",id:"motivation",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Join community",id:"join-community",level:2}],p={toc:d};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Centrifugo is an open-source scalable real-time messaging server in a language-agnostic way."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Real-time?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By real-time, we indicate a soft real-time. Due to network latencies, garbage collection cycles, and so on, the delay of a delivered message can be up to several hundred milliseconds or higher."))),(0,r.kt)("p",null,"It can be a missing piece in your application architecture to send real-time updates to users. Think chats, live comments, multiplayer games, streaming metrics \u2013 you'll be able to build amazing web and mobile real-time apps with a help of Centrifugo."),(0,r.kt)("p",null,"Centrifugo works in conjunction with applications written in any programming language \u2013 both on the backend and frontend sides. It runs as a standalone service hosted on your hardware and fits well to both monolithic and microservice architectures. "),(0,r.kt)("p",null,"Centrifugo is fast and scales well to support millions of concurrent client connections. It provides several real-time transports to choose from and a set of features to simplify building real-time applications."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Centrifugo was born to help applications with a server-side written in a language or a framework without built-in concurrency support. In this case, dealing with persistent connections is a real headache that usually can only be resolved by introducing a shift in the technology stack and spending enough time to create a production-ready solution."),(0,r.kt)("p",null,"For example, frameworks like Django, Flask, Yii, Laravel, Ruby on Rails, and others have poor and not performant support of working with many persistent connections for the real-time messaging task."),(0,r.kt)("p",null,"In this case, Centrifugo is a very straightforward and non-obtrusive way to introduce real-time updates and handle lots of persistent connections without radical changes in application backend architecture. Developers could proceed writing a backend with a favorite language or favorite framework, keep existing architecture \u2013 and just let Centrifugo deal with persistent connections."),(0,r.kt)("p",null,"At the moment, Centrifugo provides some advanced and unique features that can simplify a developer's life and save months of development, even if the application backend is built with the asynchronous concurrent language. One example is that Centrifugo can scale out-of-the-box to many machines with several supported brokers. And there are more things to mention \u2013 see detailed highlights further in the docs."),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"As mentioned above, Centrifugo runs as a standalone service that cares about handling persistent connections from application users. Application backend and frontend can be written in any programming language. Clients connect to Centrifugo and subscribe to channels."),(0,r.kt)("p",null,"As soon as some event happens application backend can publish a message with event payload into a channel using Centrifugo API. The message will be delivered to all clients currently connected and subscribed to a channel."),(0,r.kt)("p",null,"So Centrifugo is a user-facing PUB/SUB server in a nutshell. Here is a simplified scheme: "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Centrifugo scheme",src:n(8687).Z,width:"1186",height:"626"})),(0,r.kt)("h2",{id:"join-community"},"Join community"),(0,r.kt)("p",null,"We have rooms in Telegram and Discord:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://t.me/joinchat/ABFVWBE0AhkyyhREoaboXQ"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Telegram-Group-orange?style=flat&logo=telegram",alt:"Join the chat at https://t.me/joinchat/ABFVWBE0AhkyyhREoaboXQ"}))," ","\xa0",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/tYgADKx"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/719186998686122046?style=flat&label=Discord&logo=discord",alt:"Join the chat at https://discord.gg/tYgADKx"}))),(0,r.kt)("p",null,"See you there!"))}m.isMDXComponent=!0},8687:function(e,t,n){t.Z=n.p+"assets/images/scheme_sketch-74c962b2089dc49399e093b1e9812403.png"}}]);