"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={id:"client_message_batching",sidebar_label:"Message batching control",title:"Message batching control"},a=void 0,s={unversionedId:"pro/client_message_batching",id:"version-4/pro/client_message_batching",title:"Message batching control",description:"This PRO feature is under active development, some changes expected here \ud83d\udea7",source:"@site/versioned_docs/version-4/pro/client_msg_batching.md",sourceDirName:"pro",slug:"/pro/client_message_batching",permalink:"/docs/4/pro/client_message_batching",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/pro/client_msg_batching.md",tags:[],version:"4",frontMatter:{id:"client_message_batching",sidebar_label:"Message batching control",title:"Message batching control"},sidebar:"Pro",previous:{title:"Singleflight",permalink:"/docs/4/pro/singleflight"},next:{title:"CPU and RSS stats",permalink:"/docs/4/pro/process_stats"}},l={},c=[{value:"client_write_delay",id:"client_write_delay",level:2},{value:"client_reply_without_queue",id:"client_reply_without_queue",level:2},{value:"client_max_messages_in_frame",id:"client_max_messages_in_frame",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This PRO feature is under active development, some changes expected here \ud83d\udea7"),(0,r.kt)("p",null,"Centrifugo PRO provides advanced options to tweak connection message write behaviour."),(0,r.kt)("p",null,"By default, Centrifugo tries to write messages to clients as fast as possible. Centrifugo also does best effort combining different protocol messages into one transport frame (to reduce system calls and thus reduce CPU usage) without sacrificing delivery latency."),(0,r.kt)("p",null,"But still in this model if you have a lot of messages sent to each individual connection, you may have a lot of write system calls. These system calls have an huge impact on the server CPU utilization. Sometimes you want to trade-off delivery latency in favour of lower CPU consumption by Centrifugo node. It's possible to do by telling Centrifugo to slow down message delivery and collect messages to larger batches before sending them towards individual client. To achieve that Centrifugo PRO exposes additional configuration options."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note, this is only useful when you have lots of messages per client. This specific feature won't be helpful with a case when the message is broadcasted towards many different connections as the feature described here only batches message writing it terms of a single socket.")),(0,r.kt)("h2",{id:"client_write_delay"},"client_write_delay"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"client_write_delay")," is a duration option, it is a time Centrifugo will try to collect messages inside each connection message write loop before sending them towards the connection."),(0,r.kt)("p",null,"Enabling ",(0,r.kt)("inlineCode",{parentName:"p"},"client_write_delay")," may reduce CPU usage of both server and client in case of high message rate inside individual connections. The reduction happens due to the lesser number of system calls to execute. Enabling ",(0,r.kt)("inlineCode",{parentName:"p"},"client_write_delay")," limits the maximum throughput of messages towards the connection which may be achieved. For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"client_write_delay")," is 100ms then the max throughput per second will be ",(0,r.kt)("inlineCode",{parentName:"p"},"(1000 / 100) * client_max_messages_in_frame")," (16 by default), i.e. 160 messages per second. Though this should be more than enough for target Centrifugo use cases (frontend apps)."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    // Rest of config here ...\n    "client_write_delay": "100ms"\n}\n')),(0,r.kt)("h2",{id:"client_reply_without_queue"},"client_reply_without_queue"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"client_reply_without_queue")," is a boolean option to not use client queue for replies to commands. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," replies are written to the transport without going through the connection message queue."),(0,r.kt)("h2",{id:"client_max_messages_in_frame"},"client_max_messages_in_frame"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"client_max_messages_in_frame")," is an integer option which controls the maximum number of messages which may be joined by Centrifugo into one transport frame. By default, 16. Use -1 for unlimited number."))}p.isMDXComponent=!0}}]);