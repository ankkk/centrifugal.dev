"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(3117),o=(n(7294),n(3905));const r={id:"highlights",title:"Main highlights"},a=void 0,s={unversionedId:"getting-started/highlights",id:"getting-started/highlights",title:"Main highlights",description:"At this point you know how to build the simplest real-time app with Centrifugo. Beyond the core PUB/SUB functionality Centrifugo provides more features and primitives to build scalable real-time applications. Let's summarize main Centrifugo \u2728highlights\u2728 here. Every point is then extended throughout the documentation.",source:"@site/docs/getting-started/highlights.md",sourceDirName:"getting-started",slug:"/getting-started/highlights",permalink:"/docs/getting-started/highlights",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/getting-started/highlights.md",tags:[],version:"current",frontMatter:{id:"highlights",title:"Main highlights"},sidebar:"Introduction",previous:{title:"Quickstart tutorial",permalink:"/docs/getting-started/quickstart"},next:{title:"Integration guide",permalink:"/docs/getting-started/integration"}},l={},c=[{value:"Simple integration",id:"simple-integration",level:3},{value:"Great performance",id:"great-performance",level:3},{value:"Built-in scalability",id:"built-in-scalability",level:3},{value:"Strict client protocol",id:"strict-client-protocol",level:3},{value:"Variety of real-time transports",id:"variety-of-real-time-transports",level:3},{value:"Flexible authentication",id:"flexible-authentication",level:3},{value:"Connection management",id:"connection-management",level:3},{value:"Channel (room) concept",id:"channel-room-concept",level:3},{value:"Different types of subscriptions",id:"different-types-of-subscriptions",level:3},{value:"RPC over bidirectional connection",id:"rpc-over-bidirectional-connection",level:3},{value:"Online presence information",id:"online-presence-information",level:3},{value:"Message history in channels",id:"message-history-in-channels",level:3},{value:"Embedded admin web UI",id:"embedded-admin-web-ui",level:3},{value:"Cross-platform",id:"cross-platform",level:3},{value:"Ready to deploy",id:"ready-to-deploy",level:3},{value:"Open-source",id:"open-source",level:3},{value:"Pro features",id:"pro-features",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At this point you know how to build the simplest real-time app with Centrifugo. Beyond the core PUB/SUB functionality Centrifugo provides more features and primitives to build scalable real-time applications. Let's summarize main Centrifugo \u2728highlights\u2728 here. Every point is then extended throughout the documentation."),(0,o.kt)("h3",{id:"simple-integration"},"Simple integration"),(0,o.kt)("p",null,"Centrifugo was originally designed to be used in conjunction with frameworks without built-in concurrency support (like Django, Laravel, etc.)."),(0,o.kt)("p",null,"It works as a standalone service with well-defined communication contracts. It fits very well in both monolithic and microservice architecture. Application developers should not change backend philosophy at all \u2013 just integrate with Centrifugo ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/server_api"},"HTTP or GRPC API")," and let users enjoy real-time updates."),(0,o.kt)("h3",{id:"great-performance"},"Great performance"),(0,o.kt)("p",null,"Centrifugo is pretty fast. It's written in Go language, built on top of fast and battle-tested open-source libraries, has some smart internal optimizations like message queuing on broadcasts, smart batching to reduce the number of RTT with broker, connection hub sharding to avoid lock contention, JSON and Protobuf encoding speedups over code generation and other."),(0,o.kt)("p",null,"See a ",(0,o.kt)("a",{parentName:"p",href:"/blog/2020/02/10/million-connections-with-centrifugo"},"Million WebSocket with Centrifugo")," post in our blog to see some real-world numbers."),(0,o.kt)("h3",{id:"built-in-scalability"},"Built-in scalability"),(0,o.kt)("p",null,"Centrifugo scales well to many machines with a help of PUB/SUB brokers. So as soon as you have more client connections in the application \u2013 you can spread them over different Centrifugo nodes which will be connected together into a cluster."),(0,o.kt)("p",null,"The main PUB/SUB engine Centrifugo integrates with is Redis. It supports client-side consistent sharding and Redis Cluster \u2013 so a single Redis instance won't be a bottleneck also."),(0,o.kt)("p",null,"There are other options to scale: KeyDB, Nats, Tarantool. ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/engines"},"See docs"),"."),(0,o.kt)("h3",{id:"strict-client-protocol"},"Strict client protocol"),(0,o.kt)("p",null,"Centrifugo supports JSON and binary Protobuf protocol for client-server communication. The bidirectional protocol is defined by a strict schema and several ready-to-use SDKs wrap this protocol, handle asynchronous message passing, timeouts, reconnect, and various Centrifugo client API features. See the detailed information about client real-time transports in a ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/overview"},"dedicated section"),"."),(0,o.kt)("h3",{id:"variety-of-real-time-transports"},"Variety of real-time transports"),(0,o.kt)("p",null,"The main transport in Centrifugo is WebSocket. It's a bidirectional transport on top of TCP with low overhead. For browsers that do not support WebSocket Centrifugo provides its own bidirectional WebSocket emulation layer based on HTTP-streaming and EventSource (SSE), and also supports SockJS as an older but battle-tests WebSocket polyfill option, and WebTransport in experimental form."),(0,o.kt)("p",null,"Centrifugo also supports unidirectional transports for real-time updates: like SSE (EventSource), HTTP streaming, GRPC unidirectional stream. Using unidirectional transport is sufficient for many real-time applications and does not require using custom client connectors \u2013 just native APIs or GRPC-generated code."),(0,o.kt)("p",null,"See the detailed information about client real-time transports in a ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/overview"},"dedicated section"),"."),(0,o.kt)("h3",{id:"flexible-authentication"},"Flexible authentication"),(0,o.kt)("p",null,"Centrifugo can authenticate connections using ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/authentication"},"JWT (JSON Web Token)")," or by ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/proxy"},"issuing an HTTP/GRPC")," request to your application backend upon connection attempt. It's possible to proxy original request headers or request metadata (in the case of GRPC connection)."),(0,o.kt)("p",null,"It supports the ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7517"},"JWK specification"),"."),(0,o.kt)("h3",{id:"connection-management"},"Connection management"),(0,o.kt)("p",null,"Connections can expire, developers can choose a way to handle connection refresh \u2013 using a client-side refresh workflow, or a server-side call from Centrifugo to the application backend. "),(0,o.kt)("h3",{id:"channel-room-concept"},"Channel (room) concept"),(0,o.kt)("p",null,"Centrifugo is a PUB/SUB server \u2013 users subscribe on channels to receive real-time updates. Message sent to a channel will be delivered to all active subscribers."),(0,o.kt)("h3",{id:"different-types-of-subscriptions"},"Different types of subscriptions"),(0,o.kt)("p",null,"Centrifugo is unique in terms of the fact that it supports both client-side and ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/server_subs"},"server-side channel subscriptions"),"."),(0,o.kt)("h3",{id:"rpc-over-bidirectional-connection"},"RPC over bidirectional connection"),(0,o.kt)("p",null,"You can fully utilize bidirectional connections by sending RPC calls from the client-side to a configured endpoint on your backend. Calling RPC over WebSocket avoids sending headers on each request \u2013 thus reducing external traffic and, in most cases, provides better latency characteristics."),(0,o.kt)("h3",{id:"online-presence-information"},"Online presence information"),(0,o.kt)("p",null,"It's possible to turn on an online presence feature for channels so you will have information about active channel subscribers. Channel join and leave events (when a user subscribes/unsubscribes) can also be sent."),(0,o.kt)("h3",{id:"message-history-in-channels"},"Message history in channels"),(0,o.kt)("p",null,"Optionally Centrifugo allows turning on history for publications in channels. This publication history has a limited size and retention period (TTL). With a channel history, Centrifugo can help to survive the mass reconnect scenario. Clients can automatically recover missed messages from a cache \u2013 thus reducing the load on your primary database. It's also possible to manually iterate over a stream from a client or a server-side."),(0,o.kt)("h3",{id:"embedded-admin-web-ui"},"Embedded admin web UI"),(0,o.kt)("p",null,"Built-in administrative ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/admin_web"},"web UI")," allows publishing messages to channels, looking at Centrifugo cluster state, monitoring stats, etc."),(0,o.kt)("h3",{id:"cross-platform"},"Cross-platform"),(0,o.kt)("p",null,"Centrifugo works on Linux, macOS, and Windows."),(0,o.kt)("h3",{id:"ready-to-deploy"},"Ready to deploy"),(0,o.kt)("p",null,"Centrifugo supports various deploy ways: in Docker, using prepared RPM or DEB packages, via Kubernetes Helm chart. It supports automatic TLS with Let's Encrypt TLS, outputs Prometheus/Graphite metrics, has an official Grafana dashboard for Prometheus data source."),(0,o.kt)("h3",{id:"open-source"},"Open-source"),(0,o.kt)("p",null,"Centrifugo stands on top of open-source library Centrifuge (MIT license). The OSS version of Centrifugo is based on the permissive open-source license (Apache 2.0). All client connectors are also MIT-licensed."),(0,o.kt)("h3",{id:"pro-features"},"Pro features"),(0,o.kt)("p",null,"Centrifugo PRO extends Centrifugo with several unique features which can give interesting advantages for business adopters. "),(0,o.kt)("p",null,"With Centrifugo PRO it's possible to trace specific user or specific channel events in real-time. Centrifugo PRO integrates with ClickHouse for real-time connection analytics. This all may help with understanding client behavior, inspect and analyze an application on a very granular level."),(0,o.kt)("p",null,"Centrifugo PRO offers even more extensions that tend to be useful in practice. This includes user active status and throttling features. Active status is useful to build messenger-like applications where you want to show online indicators of users based on last activity time, throttling can help you limit the number of operations each user may execute on a Centrifugo cluster."),(0,o.kt)("p",null,"For additional details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/pro/overview"},"Centrifugo PRO documentation"),"."))}p.isMDXComponent=!0}}]);