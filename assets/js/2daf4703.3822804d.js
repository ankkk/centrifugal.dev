"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6791],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},954:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],s={id:"uni_sse",title:"Unidirectional SSE (EventSource)",sidebar_label:"SSE (EventSource)"},c=void 0,l={unversionedId:"transports/uni_sse",id:"transports/uni_sse",title:"Unidirectional SSE (EventSource)",description:"Default unidirectional SSE (EventSource) connection endpoint in Centrifugo is:",source:"@site/docs/transports/uni_sse.md",sourceDirName:"transports",slug:"/transports/uni_sse",permalink:"/docs/next/transports/uni_sse",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/uni_sse.md",tags:[],version:"current",frontMatter:{id:"uni_sse",title:"Unidirectional SSE (EventSource)",sidebar_label:"SSE (EventSource)"},sidebar:"Transports",previous:{title:"WebSocket",permalink:"/docs/next/transports/uni_websocket"},next:{title:"HTTP streaming",permalink:"/docs/next/transports/uni_http_stream"}},u={},p=[{value:"Connect command",id:"connect-command",level:2},{value:"Supported data formats",id:"supported-data-formats",level:2},{value:"Pings",id:"pings",level:2},{value:"Options",id:"options",level:2},{value:"uni_sse",id:"uni_sse",level:3},{value:"uni_sse_max_request_body_size",id:"uni_sse_max_request_body_size",level:3},{value:"Browser example",id:"browser-example",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Default unidirectional SSE (EventSource) connection endpoint in Centrifugo is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/connection/uni_sse\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Only parts of EventSource spec that make sense for Centrifugo are implemented. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"Last-Event-Id")," header not supported (since one connection can be subscribed to many channels) and multiline strings (since we are passing JSON-encoded objects to the client) etc."))),(0,a.kt)("h2",{id:"connect-command"},"Connect command"),(0,a.kt)("p",null,"Unfortunately SSE specification does not allow POST requests from a web browser, so the only way to pass initial connect command is over URL params. Centrifugo is looking for ",(0,a.kt)("inlineCode",{parentName:"p"},"cf_connect")," URL param for connect command. Connect command value expected to be a JSON-encoded string, properly encoded into URL. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const url = new URL('http://localhost:8000/connection/uni_sse');\nurl.searchParams.append(\"cf_connect\", JSON.stringify({\n    'token': '<JWT>'\n}));\n\nconst eventSource = new EventSource(url);\n")),(0,a.kt)("p",null,"Refer to the full Connect command description \u2013 it's ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/transports/uni_websocket#connect-command"},"the same as for unidirectional WebSocket"),"."),(0,a.kt)("p",null,"The length of URL query should be kept less than 2048 characters to work throughout browsers. This should be more than enough for most use cases.  "),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Centrifugo unidirectional SSE endpoint also supports POST requests. While it's not very useful for browsers which only allow GET requests for EventSource this can be useful when connecting from a mobile device. In this case you must send the connect object as a JSON body of a POST request (instead of using ",(0,a.kt)("inlineCode",{parentName:"p"},"cf_connect")," URL parameter), similar to what we have in unidirectional HTTP streaming transport case."))),(0,a.kt)("h2",{id:"supported-data-formats"},"Supported data formats"),(0,a.kt)("p",null,"JSON"),(0,a.kt)("h2",{id:"pings"},"Pings"),(0,a.kt)("p",null,"Centrifugo sends SSE data like this as pings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"event: ping\ndata:\n")),(0,a.kt)("p",null,"I.e. with event name ",(0,a.kt)("inlineCode",{parentName:"p"},"ping")," and empty data. You can ignore such messages or use them to detect broken connections (nothing received from a server for a long time)."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"uni_sse"},"uni_sse"),(0,a.kt)("p",null,"Boolean, default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"Enables unidirectional SSE (EventSource) endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "uni_sse": true\n}\n')),(0,a.kt)("h3",{id:"uni_sse_max_request_body_size"},"uni_sse_max_request_body_size"),(0,a.kt)("p",null,"Default: 65536 (64KB)"),(0,a.kt)("p",null,"Maximum allowed size of a initial HTTP POST request in bytes (when using HTTP POST requests to connect)."),(0,a.kt)("h2",{id:"browser-example"},"Browser example"),(0,a.kt)("p",null,"A basic browser example can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/examples/tree/master/unidirectional/sse"},"here"),"."))}m.isMDXComponent=!0}}]);