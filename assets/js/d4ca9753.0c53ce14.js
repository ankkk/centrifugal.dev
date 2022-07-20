"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[902],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2702:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],s={id:"client_api",title:"Client API showcase"},c=void 0,l={unversionedId:"getting-started/client_api",id:"version-3/getting-started/client_api",title:"Client API showcase",description:"This chapter showcases Centrifugo bidirectional client API capabilities \u2013 i.e. real-time messaging primitives available on a front-end (can be a browser or a mobile device).",source:"@site/versioned_docs/version-3/getting-started/client_api.md",sourceDirName:"getting-started",slug:"/getting-started/client_api",permalink:"/docs/3/getting-started/client_api",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/getting-started/client_api.md",tags:[],version:"3",frontMatter:{id:"client_api",title:"Client API showcase"},sidebar:"Introduction",previous:{title:"Main highlights",permalink:"/docs/3/getting-started/highlights"},next:{title:"Integration guide",permalink:"/docs/3/getting-started/integration"}},p={},u=[{value:"Connecting to a server",id:"connecting-to-a-server",level:2},{value:"Disconnecting from a server",id:"disconnecting-from-a-server",level:2},{value:"Reconnecting to a server",id:"reconnecting-to-a-server",level:2},{value:"Connection lifecycle events",id:"connection-lifecycle-events",level:2},{value:"Subscribe to a channel",id:"subscribe-to-a-channel",level:2},{value:"Server-side subscriptions",id:"server-side-subscriptions",level:2},{value:"Send RPC",id:"send-rpc",level:2},{value:"Call channel history",id:"call-channel-history",level:2},{value:"Presence and presence stats",id:"presence-and-presence-stats",level:2}],d={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This chapter showcases Centrifugo bidirectional client API capabilities \u2013 i.e. real-time messaging primitives available on a front-end (can be a browser or a mobile device)."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It's also possible to avoid using the client library at all ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/transports/overview"},"with unidirectional transports"),".")),(0,i.kt)("p",null,"This is a formal description \u2013 we use Javascript client ",(0,i.kt)("inlineCode",{parentName:"p"},"centrifuge-js")," for examples here. Refer to each specific client implementation for concrete method names and possibilities. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/transports/client_sdk"},"full list of Centrifugo client SDK"),". This description does not cover all protocol possibilities \u2013 just the most important to start with."),(0,i.kt)("p",null,"If you are looking for detailed information about client-server protocol internals then ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/transports/client_protocol"},"client protocol description")," chapter can help."),(0,i.kt)("h2",{id:"connecting-to-a-server"},"Connecting to a server"),(0,i.kt)("p",null,"Each Centrifugo client allows connecting to a server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket');\ncentrifuge.connect();\n")),(0,i.kt)("p",null,"In most cases you will need to pass JWT (JSON Web Token) for authentication, so the example above transforms to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket');\ncentrifuge.setToken('<USER-JWT>')\ncentrifuge.connect();\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/authentication"},"authentication")," chapter for more information on how to generate connection JWT."),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/proxy#connect-proxy"},"connect proxy")," then you may go without setting JWT."),(0,i.kt)("h2",{id:"disconnecting-from-a-server"},"Disconnecting from a server"),(0,i.kt)("p",null,"After connecting you can disconnect from a server at any moment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"centrifuge.disconnect();\n")),(0,i.kt)("h2",{id:"reconnecting-to-a-server"},"Reconnecting to a server"),(0,i.kt)("p",null,"Centrifugo clients automatically reconnect to a server in case of temporary connection loss, also clients periodically ping the server to detect broken connections."),(0,i.kt)("h2",{id:"connection-lifecycle-events"},"Connection lifecycle events"),(0,i.kt)("p",null,"All client implementations allow setting handlers on connect and disconnect events."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"centrifuge.on('connect', function(connectCtx){\n    console.log('connected', connectCtx)\n});\n\ncentrifuge.on('disconnect', function(disconnectCtx){\n    console.log('disconnected', disconnectCtx)\n});\n")),(0,i.kt)("h2",{id:"subscribe-to-a-channel"},"Subscribe to a channel"),(0,i.kt)("p",null,"Another core functionality of client API is the possibility to subscribe to a channel to receive all messages published to that channel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"centrifuge.subscribe('channel', function(messageCtx) {\n    console.log(messageCtx);\n})\n")),(0,i.kt)("p",null,"Client can subscribe to ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/channels"},"different channels"),". Subscribe method returns the",(0,i.kt)("inlineCode",{parentName:"p"}," Subscription")," object. It's also possible to react to different Subscription events: join and leave events, subscribe success and subscribe error events, unsubscribe events."),(0,i.kt)("p",null,"In idiomatic case messages published to channels from application backend ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/server_api"},"over Centrifugo server API"),". Though it's not always true."),(0,i.kt)("p",null,"Centrifugo also provides a message recovery feature to restore missed publications in channels. Publications can be missed due to temporary disconnects (bad network) or server reloads. Recovery happens automatically on reconnect (due to bad network or server reloads) as soon as recovery in the channel ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/channels#channel-options"},"properly configured"),". Client keeps last seen Publication offset and restores missed publications since known offset upon reconnecting. If recovery failed then client implementation provides a flag inside subscribe event to let the application know that some publications were missed \u2013 so you may need to load state from scratch from the application backend. Not all Centrifugo clients implement a recovery feature \u2013 refer to specific client implementation docs. More details about recovery in ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/history_and_recovery"},"a dedicated chapter"),"."),(0,i.kt)("h2",{id:"server-side-subscriptions"},"Server-side subscriptions"),(0,i.kt)("p",null,"To handle publications coming from ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/server_subs"},"server-side subscriptions")," client API allows listening publications simply on Centrifuge client instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"centrifuge.on('publish', function(messageCtx) {\n    console.log(messageCtx);\n});\n")),(0,i.kt)("p",null,"It's also possible to react on different server-side Subscription events: join and leave events, subscribe success, unsubscribe event. There is no subscribe error event here since the subscription was initiated on the server-side."),(0,i.kt)("h2",{id:"send-rpc"},"Send RPC"),(0,i.kt)("p",null,"A client can send RPC to a server. RPC is a call that is not related to channels at all. It's just a way to call the server method from the client-side over the WebSocket or SockJS connection. RPC is only available when ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/proxy#rpc-proxy"},"RPC proxy")," configured."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const rpcRequest = {'key': 'value'};\nconst data = await centrifuge.namedRPC('example_method', rpcRequest);\n")),(0,i.kt)("h2",{id:"call-channel-history"},"Call channel history"),(0,i.kt)("p",null,"Once subscribed client can call publication history inside a channel (only for channels where ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/channels#channel-options"},"history configured"),") to get last publications in channel:"),(0,i.kt)("p",null,"Get stream current top position:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const resp = await subscription.history();\nconsole.log(resp.offset);\nconsole.log(resp.epoch);\n")),(0,i.kt)("p",null,"Get up to 10 publications from history since known stream position:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const resp = await subscription.history({limit: 10, since: {offset: 0, epoch: '...'}});\nconsole.log(resp.publications);\n")),(0,i.kt)("p",null,"Get up to 10 publications from history since current stream beginning:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const resp = await subscription.history({limit: 10});\nconsole.log(resp.publications);\n")),(0,i.kt)("p",null,"Get up to 10 publications from history since current stream end in reversed order (last to first):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const resp = await subscription.history({limit: 10, reverse: true});\nconsole.log(resp.publications);\n")),(0,i.kt)("h2",{id:"presence-and-presence-stats"},"Presence and presence stats"),(0,i.kt)("p",null,"Once subscribed client can call presence and presence stats information inside channel (only for channels where ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/channels#channel-options"},"presence configured"),"):"),(0,i.kt)("p",null,"For presence (full information about active subscribers in channel):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const resp = await subscription.presence();\n// resp contains presence information - a map client IDs as keys \n// and client information as values.\n")),(0,i.kt)("p",null,"For presence stats (just a number of clients and unique users in a channel):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const resp = await subscription.presenceStats();\n// resp contains a number of clients and a number of unique users.\n")))}f.isMDXComponent=!0}}]);