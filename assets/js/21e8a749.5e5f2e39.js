"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2026],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(3117),o=(r(7294),r(3905));const i={id:"overview",title:"Centrifugo PRO overview"},a=void 0,s={unversionedId:"pro/overview",id:"version-3/pro/overview",title:"Centrifugo PRO overview",description:"Centrifugo PRO is an extended version of Centrifugo with a set of additional features. These features can provide your business with unique benefits \u2013 drastically save development time, reduce resource usage on a server, protect your backend from misusing, and put the system observability to the next level.",source:"@site/versioned_docs/version-3/pro/overview.md",sourceDirName:"pro",slug:"/pro/overview",permalink:"/docs/3/pro/overview",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/pro/overview.md",tags:[],version:"3",frontMatter:{id:"overview",title:"Centrifugo PRO overview"},sidebar:"Pro",next:{title:"Install and run PRO version",permalink:"/docs/3/pro/install_and_run"}},l={},u=[{value:"Features",id:"features",level:2},{value:"Sandbox mode",id:"sandbox-mode",level:2},{value:"Pricing",id:"pricing",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo PRO is an extended version of Centrifugo with a set of additional features. These features can provide your business with unique benefits \u2013 drastically save development time, reduce resource usage on a server, protect your backend from misusing, and put the system observability to the next level."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"Centrifugo PRO includes the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Everything from Centrifugo OSS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/3/pro/tracing"},"Channel and user tracing")," provides a way to look at all client protocol frames in the specified channel or per user ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/3/pro/analytics"},"Real-time analytics with ClickHouse")," for a great system observability, reporting and trending."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/3/pro/user_status"},"User status")," feature to understand activity state for a list of users."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/3/pro/throttling"},"Operation throttling")," to protect client API from misusing and frontend bugs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/3/pro/user_connections"},"User connections API")," to query for all active user sessions with additional information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/3/pro/user_block"},"User blocking API")," to block/unblock abusive users by ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/3/pro/token_revocation"},"JWT revoking and invalidation")," to revoking tokens by token ID (JTI) and invalidating user's tokens on issue time basis."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/3/pro/performance"},"Faster performance")," to reduce resource usage on server side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/3/pro/singleflight"},"Singleflight")," for online presence and history to reduce load on the broker."),(0,o.kt)("li",{parentName:"ul"},"Near real-time ",(0,o.kt)("a",{parentName:"li",href:"/docs/3/pro/process_stats"},"CPU and RSS memory usage stats"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"PRO features can change with time. We reserve a right to move features from PRO to OSS version if there is a clear signal that this is required to do for the Centrifugo ecosystem.")),(0,o.kt)("h2",{id:"sandbox-mode"},"Sandbox mode"),(0,o.kt)("p",null,"You can try out Centrifugo PRO for free. When you start Centrifugo PRO without license key then it's running in a sandbox mode. Sandbox mode limits the usage of Centrifigo PRO in several ways. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Centrifugo handles up to 50 concurrent connections"),(0,o.kt)("li",{parentName:"ul"},"up to 2 server nodes supported"),(0,o.kt)("li",{parentName:"ul"},"up to 20 API requests per second allowed")),(0,o.kt)("p",null,"This mode should be enough for development and trying out PRO features, but must not be used in production environment as we can introduce additional limitations in the future."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Centrifugo PRO is distributed under ",(0,o.kt)("a",{parentName:"p",href:"/pro_license"},"commercial license")," which is different from OSS version. By downloading Centrifugo PRO you automatically accept license terms.")),(0,o.kt)("h2",{id:"pricing"},"Pricing"),(0,o.kt)("p",null,"To run without limits Centrifugo PRO requires a license key. At this point we are not issuing license keys for Centrifugo PRO as we are in the process of defining the pricing strategy for it. Please contact us over ",(0,o.kt)("inlineCode",{parentName:"p"},"centrifugal.dev@gmail.com"),", we can add you to the list of interested customers and will appreciate if you share which features you are mostly interested in."))}p.isMDXComponent=!0}}]);