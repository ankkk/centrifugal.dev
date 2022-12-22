"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(3117),i=(n(7294),n(3905));const a={id:"uni_grpc",title:"Unidirectional GRPC",sidebar_label:"GRPC"},o=void 0,l={unversionedId:"transports/uni_grpc",id:"version-3/transports/uni_grpc",title:"Unidirectional GRPC",description:"It's possible to connect to GRPC unidirectional stream to consume real-time messages from Centrifugo. In this case you need to generate GRPC code for your language on client-side.",source:"@site/versioned_docs/version-3/transports/uni_grpc.md",sourceDirName:"transports",slug:"/transports/uni_grpc",permalink:"/docs/3/transports/uni_grpc",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/transports/uni_grpc.md",tags:[],version:"3",frontMatter:{id:"uni_grpc",title:"Unidirectional GRPC",sidebar_label:"GRPC"},sidebar:"Transports",previous:{title:"HTTP streaming",permalink:"/docs/3/transports/uni_http_stream"}},s={},p=[{value:"Supported data formats",id:"supported-data-formats",level:2},{value:"Options",id:"options",level:2},{value:"uni_grpc",id:"uni_grpc",level:3},{value:"uni_grpc_port",id:"uni_grpc_port",level:3},{value:"uni_grpc_address",id:"uni_grpc_address",level:3},{value:"uni_grpc_max_receive_message_size",id:"uni_grpc_max_receive_message_size",level:3},{value:"uni_grpc_tls",id:"uni_grpc_tls",level:3},{value:"uni_grpc_tls_cert",id:"uni_grpc_tls_cert",level:3},{value:"uni_grpc_tls_key",id:"uni_grpc_tls_key",level:3},{value:"Example",id:"example",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It's possible to connect to GRPC unidirectional stream to consume real-time messages from Centrifugo. In this case you need to generate GRPC code for your language on client-side."),(0,i.kt)("p",null,"Protobuf definitions can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifugo/blob/master/internal/unigrpc/unistream/unistream.proto"},"here"),"."),(0,i.kt)("p",null,"GRPC server will start on port ",(0,i.kt)("inlineCode",{parentName:"p"},"11000")," (default)."),(0,i.kt)("h2",{id:"supported-data-formats"},"Supported data formats"),(0,i.kt)("p",null,"JSON and binary."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"uni_grpc"},"uni_grpc"),(0,i.kt)("p",null,"Boolean, default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Enables unidirectional GRPC endpoint."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "uni_grpc": true\n}\n')),(0,i.kt)("h3",{id:"uni_grpc_port"},"uni_grpc_port"),(0,i.kt)("p",null,"String, default ",(0,i.kt)("inlineCode",{parentName:"p"},'"11000"'),"."),(0,i.kt)("p",null,"Port to listen on."),(0,i.kt)("h3",{id:"uni_grpc_address"},"uni_grpc_address"),(0,i.kt)("p",null,"String, default ",(0,i.kt)("inlineCode",{parentName:"p"},'""')," (listen on all interfaces)"),(0,i.kt)("p",null,"Address to bind uni GRPC to."),(0,i.kt)("h3",{id:"uni_grpc_max_receive_message_size"},"uni_grpc_max_receive_message_size"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"65536")," (64KB)"),(0,i.kt)("p",null,"Maximum allowed size of a first connect message received from GRPC connection in bytes."),(0,i.kt)("h3",{id:"uni_grpc_tls"},"uni_grpc_tls"),(0,i.kt)("p",null,"Boolean, default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Enable custom TLS for unidirectional GRPC server."),(0,i.kt)("h3",{id:"uni_grpc_tls_cert"},"uni_grpc_tls_cert"),(0,i.kt)("p",null,"String, default: ",(0,i.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,i.kt)("p",null,"Path to cert file."),(0,i.kt)("h3",{id:"uni_grpc_tls_key"},"uni_grpc_tls_key"),(0,i.kt)("p",null,"String, default: ",(0,i.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,i.kt)("p",null,"Path to key file."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"A basic example can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/examples/tree/master/v3/unidirectional/grpc"},"here"),". It uses Go language, but for other languages approach is mostly the same:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy Protobuf definitions"),(0,i.kt)("li",{parentName:"ol"},"Generate GRPC client code"),(0,i.kt)("li",{parentName:"ol"},"Use generated code to connect to Centrifugo"),(0,i.kt)("li",{parentName:"ol"},"Process Push messages, drop unknown Push types, handle those necessary for the application.")))}c.isMDXComponent=!0}}]);