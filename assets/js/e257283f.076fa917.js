"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8791],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=i.createContext({}),c=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(r.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(r,".").concat(m)]||d[m]||u[m]||o;return t?i.createElement(h,s(s({ref:n},p),{},{components:t})):i.createElement(h,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6104:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=t(3117),a=t(102),o=(t(7294),t(3905)),s=["components"],l={id:"capabilities",title:"Channel capabilities"},r=void 0,c={unversionedId:"pro/capabilities",id:"pro/capabilities",title:"Channel capabilities",description:"At this point you know that Centrifugo allows configuring channel permissions on a per-namespace level. When creating a new real-time feature it's recommended to create a new namespace for it and configure permissions. To achieve a better channel permission control inside a namespace Centrifugo provides possibility to set capabilities on individual connection basis, or individual channel subscription basis.",source:"@site/docs/pro/capabilities.md",sourceDirName:"pro",slug:"/pro/capabilities",permalink:"/docs/next/pro/capabilities",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/capabilities.md",tags:[],version:"current",frontMatter:{id:"capabilities",title:"Channel capabilities"},sidebar:"Pro",previous:{title:"Analytics with ClickHouse",permalink:"/docs/next/pro/analytics"},next:{title:"User status",permalink:"/docs/next/pro/user_status"}},p={},u=[{value:"Connection capabilities",id:"connection-capabilities",level:2},{value:"Caps processing behavior",id:"caps-processing-behavior",level:3},{value:"Expiration considirations",id:"expiration-considirations",level:3},{value:"Revoking connection caps",id:"revoking-connection-caps",level:3},{value:"Example: wildcard match",id:"example-wildcard-match",level:3},{value:"Example: regex match",id:"example-regex-match",level:3},{value:"Example: different types of match",id:"example-different-types-of-match",level:3},{value:"Example: full access to all channels",id:"example-full-access-to-all-channels",level:3},{value:"Subscription capabilities",id:"subscription-capabilities",level:2},{value:"Expiration considirations",id:"expiration-considirations-1",level:3},{value:"Revoking subscription permissions",id:"revoking-subscription-permissions",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At this point you know that Centrifugo allows configuring channel permissions on a per-namespace level. When creating a new real-time feature it's recommended to create a new namespace for it and configure permissions. To achieve a better channel permission control inside a namespace Centrifugo provides possibility to set capabilities on individual connection basis, or individual channel subscription basis."),(0,o.kt)("p",null,"Let's start by looking at connection-wide capabilities first."),(0,o.kt)("h2",{id:"connection-capabilities"},"Connection capabilities"),(0,o.kt)("p",null,"Connection capabilities can be set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in connection JWT (in ",(0,o.kt)("inlineCode",{parentName:"li"},"caps")," claim)"),(0,o.kt)("li",{parentName:"ul"},"in connect proxy result (",(0,o.kt)("inlineCode",{parentName:"li"},"caps")," field)")),(0,o.kt)("p",null,"For example, here we are issuing permissions to subscribe on channel ",(0,o.kt)("inlineCode",{parentName:"p"},"news")," and channel ",(0,o.kt)("inlineCode",{parentName:"p"},"user_42")," to a client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "caps": [\n        {\n            "channels": ["news", "user_42"],\n            "allow": ["sub"]\n        }\n    ]\n}\n')),(0,o.kt)("h3",{id:"caps-processing-behavior"},"Caps processing behavior"),(0,o.kt)("p",null,"Centrifugo processes caps objects till it finds a match to a channel. At this point it applies permissions in the matched object and stops processing remaining caps. If no match found \u2013 then ",(0,o.kt)("inlineCode",{parentName:"p"},"103 permission denied")," returned to a client (of course if namespace does not have other permission-related options enabled). Let's consider example like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="WRONG!"',title:'"WRONG!"'},'{\n    "caps": [\n        {\n            "channels": ["news"],\n            "allow": ["pub"]\n        },\n        {\n            "channels": ["news"],\n            "allow": ["sub"]\n        },\n    ]\n}\n')),(0,o.kt)("p",null,"Here we have two entries for channel ",(0,o.kt)("inlineCode",{parentName:"p"},"news"),", but when client subscribes on ",(0,o.kt)("inlineCode",{parentName:"p"},"news")," only the first entry will be taken into considiration by Centrifugo \u2013 so Subscription attempt will be rejected (since first cap object does not have ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," capability). In real life you don't really want to have cap objects with identical channels \u2013 but below we will introduce wildcard matching where understanding how caps processed becomes important."),(0,o.kt)("p",null,"Another example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="WRONG!"',title:'"WRONG!"'},'{\n    "caps": [\n        {\n            "channels": ["news", "user_42"],\n            "allow": ["sub"]\n        },\n        {\n            "channels": ["user_42"],\n            "allow": ["pub", "hst", "prs"]\n        },\n    ]\n}\n')),(0,o.kt)("p",null,"One could expect that client will have ",(0,o.kt)("inlineCode",{parentName:"p"},'["sub", "pub", "hst", "prs"]')," capabilities for a channel ",(0,o.kt)("inlineCode",{parentName:"p"},"user_42"),". But it's not true since Centrifugo processes caps objects and channels inside caps object in order \u2013 it finds a match to ",(0,o.kt)("inlineCode",{parentName:"p"},"user_42")," in first caps object, it contains only ",(0,o.kt)("inlineCode",{parentName:"p"},'"sub"')," capability, processing stops. So user can subscribe to a channel, but can not publish, can not call history and presence APIs even though those capabilities are mentioned in ",(0,o.kt)("inlineCode",{parentName:"p"},"caps")," object. The correct way to give all caps to the channel ",(0,o.kt)("inlineCode",{parentName:"p"},"user_42")," would be to split channels into different caps objects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="CORRECT"',title:'"CORRECT"'},'{\n    "caps": [\n        {\n            "channels": ["news"],\n            "allow": ["sub"]\n        },\n        {\n            "channels": ["user_42"],\n            "allow": ["sub", "pub", "hst", "prs"]\n        },\n    ]\n}\n')),(0,o.kt)("p",null,"The processing behaves like this to avoid potential problems with possibly conflicting matches (mostly when using wildcard and regex matching \u2013 see below) and still allow overriding capabilities for specific channels."),(0,o.kt)("h3",{id:"expiration-considirations"},"Expiration considirations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In JWT auth case \u2013 capabilities in JWT will work till token expiration, that's why it's important to keep reasonably small token expiration times. We can recommend using sth like 5-10 mins as a good expiration value, but of course this is application specific."),(0,o.kt)("li",{parentName:"ul"},"In connect proxy case \u2013 capabilities will work until client connection close (disconnect) or connection refresh triggered (with refresh proxy you can provide an updated set of capabilities).")),(0,o.kt)("h3",{id:"revoking-connection-caps"},"Revoking connection caps"),(0,o.kt)("p",null,"If at some point you need to revoke some capability from a client:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simplest way is to wait for a connection expiration, then upon refresh:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"if using proxy \u2013 provide new caps in refresh proxy result, Centrifugo will update caps and unsubscribe a client from channels it does not have permissions anymore (",(0,o.kt)("strong",{parentName:"li"},"only those obtained due to previous connection-wide capabilities"),")."),(0,o.kt)("li",{parentName:"ul"},"if JWT auth - provide new caps in connection token, Centrifugo will update caps and unsubscribe a client from channels it does not have permissions anymore (",(0,o.kt)("strong",{parentName:"li"},"only those obtained due to previous connection-wide capabilities"),")."))),(0,o.kt)("li",{parentName:"ul"},"In case of using connect proxy \u2013 you can disconnect a user (or client) with a reconnect code. New capabilities will be asked upon reconnection."),(0,o.kt)("li",{parentName:"ul"},"In case of using token auth \u2013 revoke token (Centrifugo PRO feature) and disconnect user (or client) with reconnect code. Upon reconnection user will receive an error that token revoked and will try to load a new one.")),(0,o.kt)("h3",{id:"example-wildcard-match"},"Example: wildcard match"),(0,o.kt)("p",null,"It's possible to use wildcards in channel resource names. For example, let's give a permission to subscribe on all channels in ",(0,o.kt)("inlineCode",{parentName:"p"},"news")," namespace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "caps": [\n        {\n            "channels": ["news:*"],\n            "match": "wildcard",\n            "allow": ["sub"]\n        }\n    ]\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Match type is used for all ",(0,o.kt)("inlineCode",{parentName:"p"},"channels")," in caps object. If you need different matching behavior for different channels then split them on different caps objects."))),(0,o.kt)("h3",{id:"example-regex-match"},"Example: regex match"),(0,o.kt)("p",null,"Or regex:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "caps": [\n        {\n            "channels": ["^posts_[\\d]+$"],\n            "match": "regex",\n            "allow": ["sub"]\n        }\n    ]\n}\n')),(0,o.kt)("h3",{id:"example-different-types-of-match"},"Example: different types of match"),(0,o.kt)("p",null,"Of course it's possible to combine different types of match inside one ",(0,o.kt)("inlineCode",{parentName:"p"},"caps")," array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "caps": [\n        {\n            "channels": ["^posts_[\\d]+$"],\n            "match": "regex",\n            "allow": ["sub"]\n        }\n        {\n            "channels": ["user_42"],\n            "allow": ["sub"]\n        }\n    ]\n}\n')),(0,o.kt)("h3",{id:"example-full-access-to-all-channels"},"Example: full access to all channels"),(0,o.kt)("p",null,"Let's look how to allow all permissions to a client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "caps": [\n        {\n            "channels": ["*"],\n            "match": "wildcard",\n            "allow": ["sub", "pub", "hst", "prs"]\n        }\n    ]\n}\n')),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Full access warn")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Should we mention that giving full access to a client is something to wisely consider? \ud83e\udd14"))),(0,o.kt)("h2",{id:"subscription-capabilities"},"Subscription capabilities"),(0,o.kt)("p",null,"Subscription capabilities can be set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in subscription JWT (in ",(0,o.kt)("inlineCode",{parentName:"li"},"allow")," claim)"),(0,o.kt)("li",{parentName:"ul"},"in subscribe proxy result (",(0,o.kt)("inlineCode",{parentName:"li"},"allow")," field)")),(0,o.kt)("p",null,"Subscription token already belongs to a channel (it has a ",(0,o.kt)("inlineCode",{parentName:"p"},"channel")," claim). So users with a valid subscription token can subscribe to a channel. But it's possible to additionally grant channel permissions to a user for publishing and calling presence and history using ",(0,o.kt)("inlineCode",{parentName:"p"},"allow")," claim:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "allow": ["pub", "hst", "prs"]\n}\n')),(0,o.kt)("p",null,"Putting ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," permission to the Subscription token does not make much sense \u2013 Centrifugo only expects valid token for a subscription permission check."),(0,o.kt)("h3",{id:"expiration-considirations-1"},"Expiration considirations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In JWT auth case \u2013 capabilities in subscription JWT will work till token expiration, that's why it's important to keep reasonably small token expiration times. We can recommend using sth like 5-10 mins as a good expiration value, but of course this is application specific."),(0,o.kt)("li",{parentName:"ul"},"In subscribe proxy case \u2013 capabilities will work until client unsubscribe (or connection close).")),(0,o.kt)("h3",{id:"revoking-subscription-permissions"},"Revoking subscription permissions"),(0,o.kt)("p",null,"If at some point you need to revoke some capability from a client:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simplest way is to wait for a subscription expiration, then upon refresh:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"provide new caps in subscription token, Centrifugo will update channel caps."))),(0,o.kt)("li",{parentName:"ul"},"In case of using subscribe proxy \u2013 you can unsubscribe a user (or client) with a resubscribe code. Or disconnect with reconnect code. New capabilities will be set up upon resubscription/reconnection."),(0,o.kt)("li",{parentName:"ul"},"In case of using JWT auth \u2013 revoke token (Centrifugo PRO feature) and unsubscribe/disconnect user (or client) with resubscribe/reconnect code. Upon resubscription/reconnection user will receive an error that token revoked and will try to load a new one.")))}m.isMDXComponent=!0}}]);