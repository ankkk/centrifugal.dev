"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8523],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5445:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=n(3117),o=n(102),r=(n(7294),n(3905)),a=["components"],s={id:"highlights",title:"Main highlights"},l=void 0,c={unversionedId:"getting-started/highlights",id:"version-3/getting-started/highlights",title:"Main highlights",description:"At this point you know how to build the simplest real-time app with Centrifugo. Beyond the core PUB/SUB functionality Centrifugo provides more features and primitives to build scalable real-time applications. Let's summarize main Centrifugo \u2728highlights\u2728 here. Every point is then extended throughout the documentation.",source:"@site/versioned_docs/version-3/getting-started/highlights.md",sourceDirName:"getting-started",slug:"/getting-started/highlights",permalink:"/docs/getting-started/highlights",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/getting-started/highlights.md",tags:[],version:"3",frontMatter:{id:"highlights",title:"Main highlights"},sidebar:"Introduction",previous:{title:"Quickstart tutorial",permalink:"/docs/getting-started/quickstart"},next:{title:"Client API showcase",permalink:"/docs/getting-started/client_api"}},u={},p=[{value:"Simple integration",id:"simple-integration",level:3},{value:"Great performance",id:"great-performance",level:3},{value:"Built-in scalability",id:"built-in-scalability",level:3},{value:"Strict client protocol",id:"strict-client-protocol",level:3},{value:"Variety of real-time transports",id:"variety-of-real-time-transports",level:3},{value:"Flexible authentication",id:"flexible-authentication",level:3},{value:"Connection management",id:"connection-management",level:3},{value:"Channel (room) concept",id:"channel-room-concept",level:3},{value:"Different types of subscriptions",id:"different-types-of-subscriptions",level:3},{value:"RPC over bidirectional connection",id:"rpc-over-bidirectional-connection",level:3},{value:"Online presence information",id:"online-presence-information",level:3},{value:"Message history in channels",id:"message-history-in-channels",level:3},{value:"Embedded admin web UI",id:"embedded-admin-web-ui",level:3},{value:"Cross-platform",id:"cross-platform",level:3},{value:"Ready to deploy",id:"ready-to-deploy",level:3},{value:"Open-source",id:"open-source",level:3},{value:"Pro features",id:"pro-features",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At this point you know how to build the simplest real-time app with Centrifugo. Beyond the core PUB/SUB functionality Centrifugo provides more features and primitives to build scalable real-time applications. Let's summarize main Centrifugo \u2728highlights\u2728 here. Every point is then extended throughout the documentation."),(0,r.kt)("h3",{id:"simple-integration"},"Simple integration"),(0,r.kt)("p",null,"Centrifugo was originally designed to be used in conjunction with frameworks without built-in concurrency support (like Django, Laravel, etc.). It works as a standalone service with well-defined communication contracts. It fits very well in both monolithic and microservice architecture. Application developers should not change backend philosophy at all \u2013 just integrate with Centrifugo HTTP or GRPC API and let users enjoy real-time updates. "),(0,r.kt)("h3",{id:"great-performance"},"Great performance"),(0,r.kt)("p",null,"Centrifugo is pretty fast. It's written in Go language, uses fast and battle-tested open-source libraries internally, has some internal optimizations like message queuing on broadcasts, smart batching to reduce the number of RTT with broker, connection hub sharding to avoid contention, JSON and Protobuf encoding speedups over code generation and other."),(0,r.kt)("p",null,"See a ",(0,r.kt)("a",{parentName:"p",href:"/blog/2020/02/10/million-connections-with-centrifugo"},"Million WebSocket with Centrifugo")," post in our blog to see some real-world numbers."),(0,r.kt)("h3",{id:"built-in-scalability"},"Built-in scalability"),(0,r.kt)("p",null,"Centrifugo scales to many machines with a help of PUB/SUB brokers. The main PUB/SUB engine Centrifugo integrates with is Redis. It supports client-side consistent sharding and Redis Cluster \u2013 so a single Redis instance won't be a bottleneck also. There are other options to scale: KeyDB, Nats, Tarantool."),(0,r.kt)("h3",{id:"strict-client-protocol"},"Strict client protocol"),(0,r.kt)("p",null,"Centrifugo supports JSON and binary Protobuf protocol for client-server communication. The bidirectional protocol is defined by strict schema and several ready-to-use connectors wrap this protocol, handle asynchronous message passing, timeouts, reconnect, and various Centrifugo client API features."),(0,r.kt)("h3",{id:"variety-of-real-time-transports"},"Variety of real-time transports"),(0,r.kt)("p",null,"The main transport in Centrifugo is WebSocket. It's a bidirectional transport on top of TCP with low overhead. For browsers that do not support WebSocket Centrifugo provides SockJS support."),(0,r.kt)("p",null,"Centrifugo v3 also introduced support for unidirectional transports for real-time updates: like SSE (EventSource), HTTP streaming, GRPC unidirectional stream. Using unidirectional transport is sufficient for many real-time applications and does not require using custom client connectors \u2013 just native APIs or GRPC-generated code."),(0,r.kt)("h3",{id:"flexible-authentication"},"Flexible authentication"),(0,r.kt)("p",null,"Centrifugo can authenticate connections using JWT (JSON Web Token) or by issuing an HTTP/GRPC request to your application backend upon connection attempt. It's possible to proxy original request headers or request metadata (in the case of GRPC connection). It supports the JWK specification."),(0,r.kt)("h3",{id:"connection-management"},"Connection management"),(0,r.kt)("p",null,"Connections can expire, developers can choose a way to handle connection refresh \u2013 using client-side refresh workflow, or server-side call from Centrifugo to the application backend. "),(0,r.kt)("h3",{id:"channel-room-concept"},"Channel (room) concept"),(0,r.kt)("p",null,"Centrifugo is a PUB/SUB server \u2013 users subscribe to channels to receive real-time updates. Message sent to a channel will be delivered to all active subscribers."),(0,r.kt)("p",null,"There are several different types of channels to deal with permissions."),(0,r.kt)("h3",{id:"different-types-of-subscriptions"},"Different types of subscriptions"),(0,r.kt)("p",null,"Centrifugo is unique in terms of the fact that it supports both client-side and server-side channel subscriptions."),(0,r.kt)("h3",{id:"rpc-over-bidirectional-connection"},"RPC over bidirectional connection"),(0,r.kt)("p",null,"You can fully utilize bidirectional persistent connections by sending RPC calls from the client-side to a configured endpoint on your backend. Calling RPC over WebSocket avoids sending headers on each request \u2013 thus reducing external traffic and, in most cases, provides better latency characteristics."),(0,r.kt)("h3",{id:"online-presence-information"},"Online presence information"),(0,r.kt)("p",null,"It's possible to turn on an online presence feature for channels so you will have information about active channel subscribers. Channel join and leave events (when a user subscribes/unsubscribes) can also be sent."),(0,r.kt)("h3",{id:"message-history-in-channels"},"Message history in channels"),(0,r.kt)("p",null,"Optionally Centrifugo allows turning on history for publications in channels. This publication history has a limited size and retention period (TTL). With a channel history, Centrifugo can help to survive the mass reconnect scenario. Clients can automatically recover missed messages from a cache \u2013 thus reducing the load on your primary database. It's also possible to manually iterate over a stream from a client or a server-side."),(0,r.kt)("h3",{id:"embedded-admin-web-ui"},"Embedded admin web UI"),(0,r.kt)("p",null,"Built-in administrative web UI allows publishing messages to channels, looking at Centrifugo cluster state, monitoring stats, etc."),(0,r.kt)("h3",{id:"cross-platform"},"Cross-platform"),(0,r.kt)("p",null,"Centrifugo works on Linux, macOS, and Windows."),(0,r.kt)("h3",{id:"ready-to-deploy"},"Ready to deploy"),(0,r.kt)("p",null,"Centrifugo supports various deploy ways: in Docker, using prepared RPM or DEB packages, via Kubernetes Helm chart. It supports automatic TLS with Let's Encrypt TLS, outputs Prometheus/Graphite metrics, has an official Grafana dashboard for Prometheus data source."),(0,r.kt)("h3",{id:"open-source"},"Open-source"),(0,r.kt)("p",null,"Centrifugo stands on top of open-source library Centrifuge (MIT license). The OSS version of Centrifugo is based on the permissive open-source license (Apache 2.0). All client connectors are also MIT-licensed."),(0,r.kt)("h3",{id:"pro-features"},"Pro features"),(0,r.kt)("p",null,"Centrifugo PRO extends Centrifugo with several unique features which can give interesting advantages for business adopters. "),(0,r.kt)("p",null,"With Centrifugo PRO it's possible to trace specific user or specific channel events in real-time. Centrifugo PRO integrates with ClickHouse for real-time connection analytics. This all may help with understanding client behavior, inspect and analyze an application on a very granular level."),(0,r.kt)("p",null,"Centrifugo PRO offers even more extensions that tend to be useful in practice. This includes user active status and throttling features. Active status is useful to build messenger-like applications where you want to show online indicators of users based on last activity time, throttling can help you limit the number of operations each user may execute on a Centrifugo cluster."),(0,r.kt)("p",null,"For additional details, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pro/overview"},"Centrifugo PRO documentation"),"."))}h.isMDXComponent=!0}}]);