"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9925],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5584:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=t(3117),i=t(102),o=(t(7294),t(3905)),r=["components"],s={id:"server_subs",title:"Server-side subscriptions"},c=void 0,l={unversionedId:"server/server_subs",id:"server/server_subs",title:"Server-side subscriptions",description:"Centrifugo clients can initiate a subscription to a channel by calling the Subscribe method of client protocol. In most cases, this is the most flexible approach since a client-side usually knows which channels it needs to consume at a concrete moment. But in some situations, all you need is to subscribe your connections to several channels on a server-side at the moment of connection establishment. So client effectively starts receiving publications from those channels without calling the Subscribe method at all.",source:"@site/docs/server/server_subs.md",sourceDirName:"server",slug:"/server/server_subs",permalink:"/docs/next/server/server_subs",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/server_subs.md",tags:[],version:"current",frontMatter:{id:"server_subs",title:"Server-side subscriptions"},sidebar:"Guides",previous:{title:"Private channels",permalink:"/docs/next/server/private_channels"},next:{title:"Engines, scalability",permalink:"/docs/next/server/engines"}},u={},p=[{value:"Dynamic server-side subscriptions",id:"dynamic-server-side-subscriptions",level:3},{value:"Automatic personal channel subscription",id:"automatic-personal-channel-subscription",level:3},{value:"Maintain single user connection",id:"maintain-single-user-connection",level:3}],m={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo clients can initiate a subscription to a channel by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscribe")," method of client protocol. In most cases, this is the most flexible approach since a client-side usually knows which channels it needs to consume at a concrete moment. But in some situations, all you need is to subscribe your connections to several channels on a server-side at the moment of connection establishment. So client effectively starts receiving publications from those channels without calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscribe")," method at all."),(0,o.kt)("p",null,"You can set a list of channels for a connection in two ways at the moment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"over connection JWT using ",(0,o.kt)("inlineCode",{parentName:"li"},"channels")," claim, which is an array of strings"),(0,o.kt)("li",{parentName:"ul"},"over connect proxy returning ",(0,o.kt)("inlineCode",{parentName:"li"},"channels")," field in result (also an array of strings)"),(0,o.kt)("li",{parentName:"ul"},"dynamically over server subscribe API")),(0,o.kt)("p",null,"On the client-side, you need to listen for publications from server-side channels using a top-level client event handler. For example with ",(0,o.kt)("inlineCode",{parentName:"p"},"centrifuge-js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var centrifuge = new Centrifuge(address);\n\ncentrifuge.on('publish', function(ctx) {\n    const channel = ctx.channel;\n    const payload = JSON.stringify(ctx.data);\n    console.log('Publication from server-side channel', channel, payload);\n});\n\ncentrifuge.connect();\n")),(0,o.kt)("p",null,"I.e. listen for publications without any usage of subscription objects. You can look at channel publication relates to using field in callback context as shown in the example."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The same ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/faq/#what-about-best-practices-with-amount-of-channels"},"best practices")," of working with channels and client-side subscriptions equally applicable to server-side subscription. "))),(0,o.kt)("h3",{id:"dynamic-server-side-subscriptions"},"Dynamic server-side subscriptions"),(0,o.kt)("p",null,"See subscribe and unsubscribe ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/server/server_api"},"server API")),(0,o.kt)("h3",{id:"automatic-personal-channel-subscription"},"Automatic personal channel subscription"),(0,o.kt)("p",null,"It's possible to automatically subscribe a user to a personal server-side channel."),(0,o.kt)("p",null,"To enable this you need to enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_subscribe_to_personal")," boolean option (by default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"). As soon as you do this every connection with a non-empty user ID will be automatically subscribed to a personal user-limited channel. Anonymous users with empty user IDs won't be subscribed to any channel."),(0,o.kt)("p",null,"For example, if you set this option and the user with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"87334")," connects to Centrifugo it will be automatically subscribed to channel ",(0,o.kt)("inlineCode",{parentName:"p"},"#87334")," and you can process personal publications on the client-side in the same way as shown above."),(0,o.kt)("p",null,"As you can see by default generated personal channel name belongs to the default namespace (i.e. no explicit namespace used). To set custom namespace name use ",(0,o.kt)("inlineCode",{parentName:"p"},"user_personal_channel_namespace")," option (string, default ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),") \u2013 i.e. the name of namespace from configured configuration namespaces array. In this case, if you set ",(0,o.kt)("inlineCode",{parentName:"p"},"user_personal_channel_namespace")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"personal")," for example \u2013 then the automatically generated personal channel will be ",(0,o.kt)("inlineCode",{parentName:"p"},"personal:#87334")," \u2013 user will be automatically subscribed to it on connect and you can use this channel name to publish personal notifications to the online user."),(0,o.kt)("h3",{id:"maintain-single-user-connection"},"Maintain single user connection"),(0,o.kt)("p",null,"Usage of personal channel subscription also opens a road to enable one more feature: maintaining only a single connection for each user globally around all Centrifugo nodes."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"user_personal_single_connection")," boolean option (default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") turns on a mode in which Centrifugo will try to maintain only a single connection for each user at the same moment. As soon as the user establishes a connection other connections from the same user will be closed with connection limit reason (client won't try to automatically reconnect)."),(0,o.kt)("p",null,"This feature works with a help of presence information inside a personal channel. So ",(0,o.kt)("strong",{parentName:"p"},"presence should be turned on in a personal channel"),"."),(0,o.kt)("p",null,"Example config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "user_subscribe_to_personal": true,\n  "user_personal_single_connection": true,\n  "user_personal_channel_namespace": "personal",\n  "namespaces": [\n    {\n      "name": "personal",\n      "presence": true\n    }\n  ]\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Centrifugo can't guarantee that other user connections will be closed \u2013 since Disconnect messages are distributed around Centrifugo nodes with at most once guarantee. So don't add critical business logic based on this feature to your application. Though this should work just fine most of the time if the connection between the Centrifugo node and PUB/SUB broker is OK."))))}d.isMDXComponent=!0}}]);