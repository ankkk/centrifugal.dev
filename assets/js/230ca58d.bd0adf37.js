"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[4085],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2818:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],s={id:"performance",title:"Faster performance"},l=void 0,p={unversionedId:"pro/performance",id:"pro/performance",title:"Faster performance",description:"Centrifugo PRO has performance improvements for several server parts. These improvements can help to reduce tail end-to-end latencies in application, increase server throughput and/or reduce CPU usage on server machines.",source:"@site/docs/pro/performance.md",sourceDirName:"pro",slug:"/pro/performance",permalink:"/docs/next/pro/performance",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/performance.md",tags:[],version:"current",frontMatter:{id:"performance",title:"Faster performance"},sidebar:"Pro",previous:{title:"Token revocation API",permalink:"/docs/next/pro/token_revocation"},next:{title:"Singleflight",permalink:"/docs/next/pro/singleflight"}},c={},u=[{value:"Faster HTTP API",id:"faster-http-api",level:2},{value:"Faster GRPC API",id:"faster-grpc-api",level:2},{value:"Faster HTTP proxy",id:"faster-http-proxy",level:2},{value:"Faster GRPC proxy",id:"faster-grpc-proxy",level:2},{value:"Faster JWT decoding",id:"faster-jwt-decoding",level:2},{value:"Faster GRPC unidirectional stream",id:"faster-grpc-unidirectional-stream",level:2},{value:"Examples",id:"examples",level:2},{value:"Publish HTTP API",id:"publish-http-api",level:3},{value:"History HTTP API",id:"history-http-api",level:3}],d={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Centrifugo PRO has performance improvements for several server parts. These improvements can help to reduce tail end-to-end latencies in application, increase server throughput and/or reduce CPU usage on server machines."),(0,a.kt)("h2",{id:"faster-http-api"},"Faster HTTP API"),(0,a.kt)("p",null,"Centrifugo PRO has an optimized JSON serialization/deserialization for HTTP API."),(0,a.kt)("p",null,"The effect can be noticeable under load. The exact numbers heavily depend on usage scenario. According to our benchmarks you can expect 10-15% more requests/sec for small message publications over HTTP API, and up to several times throughput boost when you are frequently get lots of messages from a history, see a couple of examples below."),(0,a.kt)("h2",{id:"faster-grpc-api"},"Faster GRPC API"),(0,a.kt)("p",null,"Centrifugo PRO has an optimized Protobuf serialization/deserialization for GRPC API. The effect can be noticeable under load. The exact numbers heavily depend on usage scenario."),(0,a.kt)("h2",{id:"faster-http-proxy"},"Faster HTTP proxy"),(0,a.kt)("p",null,"Centrifugo PRO has an optimized JSON serialization/deserialization for HTTP proxy. The effect can be noticeable under load. The exact numbers heavily depend on usage scenario."),(0,a.kt)("h2",{id:"faster-grpc-proxy"},"Faster GRPC proxy"),(0,a.kt)("p",null,"Centrifugo PRO has an optimized Protobuf serialization/deserialization for GRPC API. The effect can be noticeable under load. The exact numbers heavily depend on usage scenario."),(0,a.kt)("h2",{id:"faster-jwt-decoding"},"Faster JWT decoding"),(0,a.kt)("p",null,"Centrifugo PRO has an optimized decoding of JWT claims."),(0,a.kt)("h2",{id:"faster-grpc-unidirectional-stream"},"Faster GRPC unidirectional stream"),(0,a.kt)("p",null,"Centrifugo PRO has an optimized Protobuf deserialization for GRPC unidirectional stream. This only affects deserialization of initial connect command."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Let's look at quick live comparisons of Centrifugo OSS and Centrifugo PRO regarding HTTP API performance."),(0,a.kt)("h3",{id:"publish-http-api"},"Publish HTTP API"),(0,a.kt)("video",{width:"100%",controls:!0},(0,a.kt)("source",{src:"/img/pro_api_publish_perf.mp4",type:"video/mp4"}),"Sorry, your browser doesn't support embedded video."),(0,a.kt)("p",null,"In this video you can see a 13% speed up for publish operation. But for more complex API calls with larger payloads the difference can be much bigger. See next example that demonstrates this."),(0,a.kt)("h3",{id:"history-http-api"},"History HTTP API"),(0,a.kt)("video",{width:"100%",controls:!0},(0,a.kt)("source",{src:"/img/pro_api_history_perf.mp4",type:"video/mp4"}),"Sorry, your browser doesn't support embedded video."),(0,a.kt)("p",null,"In this video you can see an almost 2x overall speed up while asking 100 messages from Centrifugo history API."))}f.isMDXComponent=!0}}]);