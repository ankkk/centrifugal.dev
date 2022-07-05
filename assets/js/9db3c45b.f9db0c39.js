"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1977],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1413:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"user_block",title:"User blocking API"},s=void 0,u={unversionedId:"pro/user_block",id:"pro/user_block",title:"User blocking API",description:"In addition to detailed observability properties Centrifugo PRO provides instruments for performing protective actions. One of such instruments is user blocking API which allows blocking a specific user in Centrifugo.",source:"@site/docs/pro/user_block.md",sourceDirName:"pro",slug:"/pro/user_block",permalink:"/docs/next/pro/user_block",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/user_block.md",tags:[],version:"current",frontMatter:{id:"user_block",title:"User blocking API"},sidebar:"Pro",previous:{title:"Connections API",permalink:"/docs/next/pro/connections"},next:{title:"Token revocation API",permalink:"/docs/next/pro/token_revocation"}},c={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Configure",id:"configure",level:2},{value:"Redis persistence engine",id:"redis-persistence-engine",level:3},{value:"Database persistence engine",id:"database-persistence-engine",level:3},{value:"Block user API",id:"block-user-api",level:2},{value:"Block user params",id:"block-user-params",level:4},{value:"Block user result",id:"block-user-result",level:4},{value:"Unblock user API",id:"unblock-user-api",level:2},{value:"Unblock user params",id:"unblock-user-params",level:4},{value:"Unblock user result",id:"unblock-user-result",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to detailed observability properties Centrifugo PRO provides instruments for performing protective actions. One of such instruments is user blocking API which allows blocking a specific user in Centrifugo."),(0,o.kt)("p",null,"When user is blocked it will be disconnected from Centrifugo immediately and also on the next connect attempt right after JWT decoded (so that Centrifugo got a user ID) or after result from connect proxy received. In case of using connect proxy you can actually disconnect user yourself by implementing blocking check on the application backend side \u2013 but possibility to block user in Centrifugo can still be helpful."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"By default, information about user block/unblock requests shared throughout Centrifugo cluster and kept in memory. So user will be blocked until Centrifugo restart."),(0,o.kt)("p",null,"But it's possible to enable blocking information persistence by configuring a persistence storage \u2013 in this case information will survive Centrifugo restarts."),(0,o.kt)("p",null,"Centrifugo also automatically expires entries in the storage to keep working set of blocked users reasonably small. Keeping pool of blocked users small allows avoiding expensive database lookups on every check \u2013 information is loaded periodically from the storage and all checks performed over in-memory data structure \u2013 thus user blocking checks are cheap and have a small impact on the overall system performance."),(0,o.kt)("h2",{id:"configure"},"Configure"),(0,o.kt)("p",null,"User block feature is enabled by default in Centrifugo PRO (blocking information will be stored in process memory). To keep blocking information persistently you need to configure persistence engine."),(0,o.kt)("p",null,"There are two types of persistent engines supported at the moment:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"redis")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"database"))),(0,o.kt)("h3",{id:"redis-persistence-engine"},"Redis persistence engine"),(0,o.kt)("p",null,"Blocking data can be kept in Redis. To enable this configuration should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "user_block": {\n        "persistence_engine": "redis",\n        "redis_address": "localhost:6379"\n    }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Unlike many other Redis features in Centrifugo consistent sharding is not supported for blocking data. The reason is that we don't want to loose blocking information when additional Redis node added. So only one Redis shard can be provided for ",(0,o.kt)("inlineCode",{parentName:"p"},"user_block")," feature. This should be fine given that working set of blocked users should be reasonably small and old entries expire. If you try to set several Redis shards here Centrifugo will exit with an error on start."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"One more thing you may notice is that Redis configuration here does not have ",(0,o.kt)("inlineCode",{parentName:"p"},"use_redis_from_engine")," option. The reason is that since Redis is not shardable here reusing Redis configuration here could cause problems at the moment of Redis scaling \u2013 which we want to avoid thus require explicit configuration here."))),(0,o.kt)("h3",{id:"database-persistence-engine"},"Database persistence engine"),(0,o.kt)("p",null,"Blocking data can be kept in the relational database. Only PostgreSQL is supported."),(0,o.kt)("p",null,"To enable this configuration should be like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "database": {\n        "dsn": "postgresql://postgres:test@127.0.0.1:5432/postgres"\n    },\n    "user_block": {\n        "persistence_engine": "database"\n    }\n}\n')),(0,o.kt)("h2",{id:"block-user-api"},"Block user API"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "block_user", "params": {"user": "2695", "expire_at": 1635845122}}\' \\\n  http://localhost:8000/api\n')),(0,o.kt)("h4",{id:"block-user-params"},"Block user params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"User ID to block")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expire_at"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"Unix time in the future when user blocking information should expire (Unix seconds). While optional ",(0,o.kt)("strong",{parentName:"td"},"we recommend to use a reasonably small expiration time")," to keep working set of blocked users small (since Centrifugo nodes periodically load all entries from the storage to construct in-memory cache).")))),(0,o.kt)("h4",{id:"block-user-result"},"Block user result"),(0,o.kt)("p",null,"Empty object at the moment."),(0,o.kt)("h2",{id:"unblock-user-api"},"Unblock user API"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "unblock_user", "params": {"user": "2695"}}\' \\\n  http://localhost:8000/api\n')),(0,o.kt)("h4",{id:"unblock-user-params"},"Unblock user params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"User ID to unblock")))),(0,o.kt)("h4",{id:"unblock-user-result"},"Unblock user result"),(0,o.kt)("p",null,"Empty object at the moment."))}m.isMDXComponent=!0}}]);