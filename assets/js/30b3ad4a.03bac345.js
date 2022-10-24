"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5304],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,v=p["".concat(a,".").concat(h)]||p[h]||u[h]||i;return t?r.createElement(v,l(l({ref:n},d),{},{components:t})):r.createElement(v,l({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(3117),o=(t(7294),t(3905));const i={id:"codes",title:"Error and disconnect codes"},l=void 0,s={unversionedId:"server/codes",id:"version-3/server/codes",title:"Error and disconnect codes",description:"This chapter describes error and disconnect codes Centrifugo uses in a client protocol, also error codes which a server API can return in response.",source:"@site/versioned_docs/version-3/server/codes.md",sourceDirName:"server",slug:"/server/codes",permalink:"/docs/3/server/codes",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/server/codes.md",tags:[],version:"3",frontMatter:{id:"codes",title:"Error and disconnect codes"},sidebar:"Guides",previous:{title:"Configure TLS",permalink:"/docs/3/server/tls"}},a={},c=[{value:"Client error codes",id:"client-error-codes",level:2},{value:"Internal",id:"internal",level:3},{value:"Unauthorized",id:"unauthorized",level:3},{value:"Unknown Channel",id:"unknown-channel",level:3},{value:"Permission Denied",id:"permission-denied",level:3},{value:"Method Not Found",id:"method-not-found",level:3},{value:"Already Subscribed",id:"already-subscribed",level:3},{value:"Limit Exceeded",id:"limit-exceeded",level:3},{value:"Bad Request",id:"bad-request",level:3},{value:"Not Available",id:"not-available",level:3},{value:"Token Expired",id:"token-expired",level:3},{value:"Expired",id:"expired",level:3},{value:"Too Many Requests",id:"too-many-requests",level:3},{value:"Unrecoverable Position",id:"unrecoverable-position",level:3},{value:"Client disconnect codes",id:"client-disconnect-codes",level:2},{value:"Normal",id:"normal",level:3},{value:"Shutdown",id:"shutdown",level:3},{value:"Invalid Token",id:"invalid-token",level:3},{value:"Bad Request",id:"bad-request-1",level:3},{value:"Server Error",id:"server-error",level:3},{value:"Expired",id:"expired-1",level:3},{value:"Subscription Expired",id:"subscription-expired",level:3},{value:"Stale",id:"stale",level:3},{value:"Slow",id:"slow",level:3},{value:"Write Error",id:"write-error",level:3},{value:"Insufficient State",id:"insufficient-state",level:3},{value:"Force Reconnect",id:"force-reconnect",level:3},{value:"Force No Reconnect",id:"force-no-reconnect",level:3},{value:"Connection Limit",id:"connection-limit",level:3},{value:"Server API error codes",id:"server-api-error-codes",level:2},{value:"Internal",id:"internal-1",level:3},{value:"Unknown channel",id:"unknown-channel-1",level:3},{value:"Method Not Found",id:"method-not-found-1",level:3},{value:"Bad Request",id:"bad-request-2",level:3},{value:"Not Available",id:"not-available-1",level:3},{value:"Unrecoverable Position",id:"unrecoverable-position-1",level:3}],d={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This chapter describes error and disconnect codes Centrifugo uses in a client protocol, also error codes which a server API can return in response."),(0,o.kt)("h2",{id:"client-error-codes"},"Client error codes"),(0,o.kt)("p",null,"Client errors are errors that can be returned to a client in replies to commands. This is specific for bidirectional client protocol only. For example, an error can be returned inside a reply to a subscribe command issued by a client."),(0,o.kt)("p",null,"Here is the list of Centrifugo built-in client error codes (with proxy feature you have a way to use custom error codes in replies or reuse existing)."),(0,o.kt)("h3",{id:"internal"},"Internal"),(0,o.kt)("p",null,'Code:    100,\nMessage: "internal server error".'),(0,o.kt)("p",null,"Error Internal means server error, if returned this is a signal that something went wrong with a server itself and client most probably not guilty."),(0,o.kt)("h3",{id:"unauthorized"},"Unauthorized"),(0,o.kt)("p",null,'Code:    101,\nMessage: "unauthorized".'),(0,o.kt)("p",null,"Error Unauthorized says that request is unauthorized."),(0,o.kt)("h3",{id:"unknown-channel"},"Unknown Channel"),(0,o.kt)("p",null,'Code:    102,\nMessage: "unknown channel".'),(0,o.kt)("p",null,"Error Unknown Channel means that channel name does not exist."),(0,o.kt)("p",null,"Usually this is returned when client uses channel with a namespace which is not defined in Centrifugo configuration."),(0,o.kt)("h3",{id:"permission-denied"},"Permission Denied"),(0,o.kt)("p",null,'Code:    103,\nMessage: "permission denied".'),(0,o.kt)("p",null,"Error Permission Denied means that access to resource not allowed."),(0,o.kt)("h3",{id:"method-not-found"},"Method Not Found"),(0,o.kt)("p",null,'Code:    104,\nMessage: "method not found".'),(0,o.kt)("p",null,"Error Method Not Found means that method sent in command does not exist."),(0,o.kt)("h3",{id:"already-subscribed"},"Already Subscribed"),(0,o.kt)("p",null,'Code:    105,\nMessage: "already subscribed".'),(0,o.kt)("p",null,"Error Already Subscribed returned when client wants to subscribe on channel it already subscribed to."),(0,o.kt)("h3",{id:"limit-exceeded"},"Limit Exceeded"),(0,o.kt)("p",null,'Code:    106,\nMessage: "limit exceeded".'),(0,o.kt)("p",null,"Error Limit Exceeded says that some sort of limit exceeded, server logs should give more detailed information. See also ErrorTooManyRequests which is more specific for rate limiting purposes."),(0,o.kt)("h3",{id:"bad-request"},"Bad Request"),(0,o.kt)("p",null,'Code:    107,\nMessage: "bad request".'),(0,o.kt)("p",null,"Error Bad Request says that server can not process received data because it is malformed. Retrying request does not make sense."),(0,o.kt)("h3",{id:"not-available"},"Not Available"),(0,o.kt)("p",null,'Code:    108,\nMessage: "not available".'),(0,o.kt)("p",null,"Error Not Available means that resource is not enabled."),(0,o.kt)("p",null,"For example, this can be returned when trying to access history or presence in a channel that is not configured for having history or presence features."),(0,o.kt)("h3",{id:"token-expired"},"Token Expired"),(0,o.kt)("p",null,'Code:    109,\nMessage: "token expired".'),(0,o.kt)("p",null,"Error Token Expired indicates that connection token expired."),(0,o.kt)("h3",{id:"expired"},"Expired"),(0,o.kt)("p",null,'Code:    110,\nMessage: "expired".'),(0,o.kt)("p",null,"Error Expired indicates that connection expired (no token involved)."),(0,o.kt)("h3",{id:"too-many-requests"},"Too Many Requests"),(0,o.kt)("p",null,'Code:    111,\nMessage: "too many requests".'),(0,o.kt)("p",null,"Error Too Many Requests means that server rejected request due to rate limiting strategies."),(0,o.kt)("h3",{id:"unrecoverable-position"},"Unrecoverable Position"),(0,o.kt)("p",null,'Code:    112,\nMessage: "unrecoverable position".'),(0,o.kt)("p",null,"Error Unrecoverable Position means that stream does not contain required range of publications to fulfill a history query."),(0,o.kt)("p",null,"This can happen due to wrong epoch passed."),(0,o.kt)("h2",{id:"client-disconnect-codes"},"Client disconnect codes"),(0,o.kt)("p",null,"Client can be disconnected by a Centrifugo server with custom code and string reason. Here is the list of Centrifugo built-in disconnect codes (with proxy feature you have a way to use custom disconnect codes)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We expect that in most situations developers don't need to programmatically deal with handling various disconnect codes, but since Centrifugo sends them and codes shown in server metrics \u2013 they are documented. Actually most client connectors don't provide access to reading a disconnect code these days (only a reason). This is what we are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifuge/issues/149"},"planning to improve"),".")),(0,o.kt)("h3",{id:"normal"},"Normal"),(0,o.kt)("p",null,"Code:      3000."),(0,o.kt)("p",null,"DisconnectNormal is clean disconnect when client cleanly closed connection. This is mostly useful for server metrics, since client never receives this disconnect code (since already gone)."),(0,o.kt)("h3",{id:"shutdown"},"Shutdown"),(0,o.kt)("p",null,'Code:      3001,\nReason:    "shutdown",\nReconnect: true.'),(0,o.kt)("p",null,"Disconnect Shutdown sent when node is going to shut down."),(0,o.kt)("h3",{id:"invalid-token"},"Invalid Token"),(0,o.kt)("p",null,'Code:      3002,\nReason:    "invalid token",\nReconnect: false.'),(0,o.kt)("p",null,"Disconnect Invalid Token sent when client came with invalid token."),(0,o.kt)("h3",{id:"bad-request-1"},"Bad Request"),(0,o.kt)("p",null,'Code:      3003,\nReason:    "bad request",\nReconnect: false.'),(0,o.kt)("p",null,"Disconnect Bad Request sent when client uses malformed protocol"),(0,o.kt)("h3",{id:"server-error"},"Server Error"),(0,o.kt)("p",null,'Code:      3004,\nReason:    "internal server error",\nReconnect: true.'),(0,o.kt)("p",null,"Disconnect Server Error sent when internal error occurred on server."),(0,o.kt)("h3",{id:"expired-1"},"Expired"),(0,o.kt)("p",null,'Code:      3005,\nReason:    "expired",\nReconnect: true.'),(0,o.kt)("p",null,"Disconnect Expired sent when client connection expired."),(0,o.kt)("h3",{id:"subscription-expired"},"Subscription Expired"),(0,o.kt)("p",null,'Code:      3006,\nReason:    "subscription expired",\nReconnect: true.'),(0,o.kt)("p",null,"Disconnect Subscription Expired sent when client subscription expired."),(0,o.kt)("h3",{id:"stale"},"Stale"),(0,o.kt)("p",null,'Code:      3007,\nReason:    "stale",\nReconnect: false.'),(0,o.kt)("p",null,"Disconnect Stale sent to close connection that did not become authenticated in configured interval after dialing. Usually this means a broken client implementation."),(0,o.kt)("h3",{id:"slow"},"Slow"),(0,o.kt)("p",null,'Code:      3008,\nReason:    "slow",\nReconnect: true.'),(0,o.kt)("p",null,"Disconnect Slow sent when a client can't read messages fast enough."),(0,o.kt)("h3",{id:"write-error"},"Write Error"),(0,o.kt)("p",null,'Code:      3009,\nReason:    "write error",\nReconnect: true.'),(0,o.kt)("p",null,"Disconnect Write Error sent when an error occurred while writing to client connection."),(0,o.kt)("h3",{id:"insufficient-state"},"Insufficient State"),(0,o.kt)("p",null,'Code:      3010,\nReason:    "insufficient state",\nReconnect: true.'),(0,o.kt)("p",null,"Disconnect Insufficient State sent when server detects wrong client position in channel Publication stream. Disconnect allows client to restore missed publications on reconnect."),(0,o.kt)("h3",{id:"force-reconnect"},"Force Reconnect"),(0,o.kt)("p",null,'Code:      3011,\nReason:    "force reconnect",\nReconnect: true.'),(0,o.kt)("p",null,"Disconnect Force Reconnect sent when server disconnects connection but want it to return back shortly."),(0,o.kt)("h3",{id:"force-no-reconnect"},"Force No Reconnect"),(0,o.kt)("p",null,'Code:      3012,\nReason:    "force disconnect",\nReconnect: false.'),(0,o.kt)("p",null,"Disconnect Force No Reconnect sent when server disconnects connection and asks it to not reconnect again."),(0,o.kt)("h3",{id:"connection-limit"},"Connection Limit"),(0,o.kt)("p",null,'Code:      3013,\nReason:    "connection limit",\nReconnect: false.'),(0,o.kt)("p",null,"Disconnect Connection Limit can be sent when client connection exceeds a configured connection limit (per user ID or due to other rule)."),(0,o.kt)("h2",{id:"server-api-error-codes"},"Server API error codes"),(0,o.kt)("p",null,"Server API errors are errors that can be returned to a API caller in replies to commands (in both HTTP and GRPC server APIs)."),(0,o.kt)("h3",{id:"internal-1"},"Internal"),(0,o.kt)("p",null,'Code:    100,\nMessage: "internal server error".'),(0,o.kt)("p",null,"ErrorInternal means server error, if returned this is a signal that something went wrong with Centrifugo itself."),(0,o.kt)("h3",{id:"unknown-channel-1"},"Unknown channel"),(0,o.kt)("p",null,'Code:    102,\nMessage: "unknown channel".'),(0,o.kt)("p",null,"Error Unknown Channel means that namespace in channel name does not exist."),(0,o.kt)("h3",{id:"method-not-found-1"},"Method Not Found"),(0,o.kt)("p",null,'Code:    104,\nMessage: "method not found".'),(0,o.kt)("p",null,"Error Method Not Found means that method sent in command does not exist in Centrifugo."),(0,o.kt)("h3",{id:"bad-request-2"},"Bad Request"),(0,o.kt)("p",null,'Code:    107,\nMessage: "bad request".'),(0,o.kt)("p",null,"Error Bad Request says that Centrifugo can not parse received data because it is malformed or there are required fields missing."),(0,o.kt)("h3",{id:"not-available-1"},"Not Available"),(0,o.kt)("p",null,'Code:    108,\nMessage: "not available".'),(0,o.kt)("p",null,"Error Not Available means that resource is not enabled."),(0,o.kt)("h3",{id:"unrecoverable-position-1"},"Unrecoverable Position"),(0,o.kt)("p",null,'Code:    112,\nMessage: "unrecoverable position".'),(0,o.kt)("p",null,"ErrorUnrecoverablePosition means that stream does not contain required range of publications to fulfill a history query."),(0,o.kt)("p",null,"This can happen due to wrong epoch."))}u.isMDXComponent=!0}}]);