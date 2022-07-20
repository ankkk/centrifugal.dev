"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5184],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=u(n),f=i,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},904:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),s=["components"],a={id:"redis_engine",title:"Optimized Redis engine"},l=void 0,u={unversionedId:"pro/redis_engine",id:"pro/redis_engine",title:"Optimized Redis engine",description:"Centrifugo PRO has an optimized version of Redis Engine which provides two important benefits:",source:"@site/docs/pro/redis_engine.md",sourceDirName:"pro",slug:"/pro/redis_engine",permalink:"/docs/pro/redis_engine",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/redis_engine.md",tags:[],version:"current",frontMatter:{id:"redis_engine",title:"Optimized Redis engine"},sidebar:"Pro",previous:{title:"Faster performance",permalink:"/docs/pro/performance"},next:{title:"Singleflight",permalink:"/docs/pro/singleflight"}},d={},p=[{value:"Enable optimized Redis engine",id:"enable-optimized-redis-engine",level:2},{value:"Sharded PUB/SUB",id:"sharded-pubsub",level:2}],c={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo PRO has an optimized version of Redis Engine which provides two important benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Drastically reduced memory allocations which transforms to less CPU usage of Centrifugo node"),(0,o.kt)("li",{parentName:"ul"},"Support Redis Cluster ",(0,o.kt)("a",{parentName:"li",href:"https://redis.io/docs/manual/pubsub/#sharded-pubsub"},"sharded PUB/SUB")," (introduced in Redis v7)")),(0,o.kt)("h2",{id:"enable-optimized-redis-engine"},"Enable optimized Redis engine"),(0,o.kt)("p",null,"By default, Centrifugo PRO uses the same Redis Engine as the OSS version. You need to explicily enable an optimized version of Redis engine. This is done due to some limitations of the optimized version:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It requires Redis >= 6"),(0,o.kt)("li",{parentName:"ul"},"It works only over the latest Redis protocol RESP 3"),(0,o.kt)("li",{parentName:"ul"},"It does not support keeping history in Redis Lists \u2013 only in Stream data structure")),(0,o.kt)("p",null,"If you are OK with all these limitations then:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    "redis_optimized": true\n}\n')),(0,o.kt)("p",null,"\u2013 will enable using an optimized Redis Engine by Centrifugo PRO."),(0,o.kt)("h2",{id:"sharded-pubsub"},"Sharded PUB/SUB"),(0,o.kt)("p",null,"As you may know default PUB/SUB does not scale well in Redis Cluster as publications in channels propagate to all nodes in Redis Cluster. So PUB/SUB scalability is limited by network and reduces as soon as number of nodes in Redis Cluster increases. See more detailed description ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redis/redis/issues/2672"},"in this issue"),". Redis v7 introduced ",(0,o.kt)("a",{parentName:"p",href:"https://redis.io/docs/manual/pubsub/#sharded-pubsub"},"sharded PUB/SUB")," to fix this."),(0,o.kt)("p",null,"Centrifugo PRO provides an integer option called ",(0,o.kt)("inlineCode",{parentName:"p"},"redis_num_cluster_shards"),". By default it's ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," \u2013 which means that Centrifugo uses global PUB/SUB in Redis Cluster. If you set ",(0,o.kt)("inlineCode",{parentName:"p"},"redis_num_cluster_shards")," to the value greater than zero then Centrifugo will split keyspace and PUB/SUB to the configured number of shards."),(0,o.kt)("p",null,"For example, you can set the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"32")," \u2013 and this tells Centrifugo to split key space and channel space to ",(0,o.kt)("inlineCode",{parentName:"p"},"32")," parts spread over Redis Cluster. And will use separate sharded PUB/SUB routines for each shard. This way it's possible to avoid limitations of PUB/SUB in a single Redis Cluster."))}f.isMDXComponent=!0}}]);