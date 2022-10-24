"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(3117),i=(n(7294),n(3905));const o={id:"throttling",title:"Operation throttling"},a=void 0,s={unversionedId:"pro/throttling",id:"version-3/pro/throttling",title:"Operation throttling",description:"The throttling feature allows limiting the number of operations each user can issue during a configured time interval. This is useful to protect the system from misusing or protect it from a bug in the application frontend code.",source:"@site/versioned_docs/version-3/pro/throttling.md",sourceDirName:"pro",slug:"/pro/throttling",permalink:"/docs/3/pro/throttling",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/pro/throttling.md",tags:[],version:"3",frontMatter:{id:"throttling",title:"Operation throttling"},sidebar:"Pro",previous:{title:"User status",permalink:"/docs/3/pro/user_status"},next:{title:"User connections API",permalink:"/docs/3/pro/user_connections"}},l={},u=[{value:"Redis throttling",id:"redis-throttling",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The throttling feature allows limiting the number of operations each user can issue during a configured time interval. This is useful to protect the system from misusing or protect it from a bug in the application frontend code."),(0,i.kt)("h2",{id:"redis-throttling"},"Redis throttling"),(0,i.kt)("p",null,"At this moment Centrifugo PRO provides throttling over Redis. It's only possible to throttle by the user ID. Requests from anonymous users can't be throttled. Throttling with Redis uses ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Token_bucket"},"token bucket algorithm")," internally."),(0,i.kt)("p",null,"Here is a list of operations that can be throttled:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"connect"),(0,i.kt)("li",{parentName:"ul"},"subscribe"),(0,i.kt)("li",{parentName:"ul"},"publish"),(0,i.kt)("li",{parentName:"ul"},"history"),(0,i.kt)("li",{parentName:"ul"},"presence"),(0,i.kt)("li",{parentName:"ul"},"presence_stats"),(0,i.kt)("li",{parentName:"ul"},"refresh"),(0,i.kt)("li",{parentName:"ul"},"sub_refresh"),(0,i.kt)("li",{parentName:"ul"},"rpc (with method resolution)")),(0,i.kt)("p",null,"An example configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "redis_throttling": {\n        "enabled": false,\n        "redis_address": "localhost:6379",\n        "buckets": {\n            "publish": {\n                "enabled": true,\n                "interval": "1s",\n                "rate": 1,\n                "capacity": 1\n            },\n            "rpc": {\n                "enabled": true,\n                "interval": "1s",\n                "rate": 10,\n                "capacity": 1,\n                "method_override": [\n                    {\n                        "method": "updateActiveStatus",\n                        "interval": "20s",\n                        "rate": 1,\n                        "capacity": 1\n                    }\n                ]\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"This configuration enables throttling and throttles publish attempts in a way that only 1 publication is possible in 1 second from the same user."),(0,i.kt)("p",null,"Redis configuration for throttling feature matches Centrifugo Redis engine configuration. So Centrifugo supports client-side consistent sharding to scale Redis, Redis Sentinel, Redis Cluster for throttling feature too."),(0,i.kt)("p",null,"It's also possible to reuse Centrifugo Redis engine by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"use_redis_from_engine")," option instead of custom throttling Redis address declaration, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "redis",\n    "redis_address": "localhost:6379",\n    "redis_throttling": {\n        "enabled": false,\n        "use_redis_from_engine": true,\n        "buckets": {\n            "publish": {\n                "enabled": true,\n                "interval": "1s",\n                "rate": 1,\n                "capacity": 1\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"In this case throttling will simply connect to Redis instances configured for an Engine."))}p.isMDXComponent=!0}}]);