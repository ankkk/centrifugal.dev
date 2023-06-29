"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={id:"tls",title:"Configure TLS"},o=void 0,l={unversionedId:"server/tls",id:"version-4/server/tls",title:"Configure TLS",description:"TLS/SSL layer is very important not only for securing your connections but also to increase a",source:"@site/versioned_docs/version-4/server/tls.md",sourceDirName:"server",slug:"/server/tls",permalink:"/docs/4/server/tls",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/server/tls.md",tags:[],version:"4",frontMatter:{id:"tls",title:"Configure TLS"},sidebar:"Guides",previous:{title:"Load balancing",permalink:"/docs/4/server/load_balancing"},next:{title:"Error and disconnect codes",permalink:"/docs/4/server/codes"}},s={},c=[{value:"Using crt and key files",id:"using-crt-and-key-files",level:3},{value:"Automatic certificates",id:"automatic-certificates",level:3},{value:"TLS for GRPC API",id:"tls-for-grpc-api",level:3},{value:"TLS for GRPC unidirectional stream",id:"tls-for-grpc-unidirectional-stream",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"TLS/SSL layer is very important not only for securing your connections but also to increase a\nchance to establish Websocket connection."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In most situations you better put TLS termination task on your reverse proxy/load balancing software such as Nginx. This can be a good thing for performance.")),(0,i.kt)("p",null,"There are situations though when you want to serve secure connections by Centrifugo itself."),(0,i.kt)("p",null,"There are two ways to do this: using TLS certificate ",(0,i.kt)("inlineCode",{parentName:"p"},"cert")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," files that you've got\nfrom your CA provider or using automatic certificate handling via ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8555"},"ACME")," provider (only ",(0,i.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," at this moment)."),(0,i.kt)("h3",{id:"using-crt-and-key-files"},"Using crt and key files"),(0,i.kt)("p",null,"In first way you already have ",(0,i.kt)("inlineCode",{parentName:"p"},"cert")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," files. For development you can create self-signed\ncertificate - see ",(0,i.kt)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/ssl-certificate-self"},"this instruction")," as\nexample."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  ...\n  "tls": true,\n  "tls_key": "server.key",\n  "tls_cert": "server.crt"\n}\n')),(0,i.kt)("p",null,"And run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./centrifugo --config=config.json\n")),(0,i.kt)("h3",{id:"automatic-certificates"},"Automatic certificates"),(0,i.kt)("p",null,"For automatic certificates from Let's Encrypt add into configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  ...\n  "tls_autocert": true,\n  "tls_autocert_host_whitelist": "www.example.com",\n  "tls_autocert_cache_dir": "/tmp/certs",\n  "tls_autocert_email": "user@example.com",\n  "tls_autocert_http": true,\n  "tls_autocert_http_addr": ":80"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_autocert")," (boolean) says Centrifugo that you want automatic certificate handling using ACME provider."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_autocert_host_whitelist")," (string) is a string with your app domain address. This can be comma-separated\nlist. It's optional but recommended for extra security."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_autocert_cache_dir")," (string) is a path to a folder to cache issued certificate files. This is optional\nbut will increase performance."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_autocert_email")," (string) is optional - it's an email address ACME provider will send notifications\nabout problems with your certificates."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_autocert_http")," (boolean) is an option to handle http_01 ACME challenge on non-TLS port."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tls_autocert_http_addr")," (string) can be used to set address for handling http_01 ACME challenge (default is ",(0,i.kt)("inlineCode",{parentName:"p"},":80"),")"),(0,i.kt)("p",null,"When configured correctly and your domain is valid (",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," will not work) - certificates\nwill be retrieved on first request to Centrifugo."),(0,i.kt)("p",null,"Also Let's Encrypt certificates will be automatically renewed."),(0,i.kt)("p",null,"There are two options that allow Centrifugo to support TLS client connections from older\nbrowsers such as Chrome 49 on Windows XP and IE8 on XP:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls_autocert_force_rsa")," - this is a boolean option, by default ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),". When enabled it forces\nautocert manager generate certificates with 2048-bit RSA keys."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls_autocert_server_name")," - string option, allows to set server name for client handshake hello.\nThis can be useful to deal with old browsers without SNI support - see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/centrifugal/centrifugo/issues/144#issuecomment-279393819"},"comment"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"grpc_api_tls_disable")," boolean flag allows to disable TLS for GRPC API server but keep it on for HTTP endpoints."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"uni_grpc_tls_disable")," boolean flag allows to disable TLS for GRPC uni stream server but keep it on for HTTP endpoints."),(0,i.kt)("h3",{id:"tls-for-grpc-api"},"TLS for GRPC API"),(0,i.kt)("p",null,"You can provide custom certificate files to configure TLS for GRPC API server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grpc_api_tls")," boolean flag enables TLS for GRPC API server, requires an X509 certificate and a key file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grpc_api_tls_cert")," string provides a path to an X509 certificate file for GRPC API server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grpc_api_tls_key")," string provides a path to an X509 certificate key for GRPC API server")),(0,i.kt)("h3",{id:"tls-for-grpc-unidirectional-stream"},"TLS for GRPC unidirectional stream"),(0,i.kt)("p",null,"You can provide custom certificate files to configure TLS for GRPC unidirectional stream endpoint."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uni_grpc_tls")," boolean flag enables TLS for GRPC server, requires an X509 certificate and a key file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uni_grpc_tls_cert")," string provides a path to an X509 certificate file for GRPC uni stream server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uni_grpc_tls_key")," string provides a path to an X509 certificate key for GRPC uni stream server")))}u.isMDXComponent=!0}}]);