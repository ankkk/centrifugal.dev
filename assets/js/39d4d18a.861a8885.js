"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var i=n(3117),o=n(7294),r=n(3905);class a extends o.Component{constructor(){super(),this.onChange=this.onChange.bind(this),this.onClick=this.onClick.bind(this),this.state={config:null,output:"Here will be configuration for v3",logs:"Here will be log of changes made in your config"}}onClick(e){if(!this.state.config)return void alert("Provide a configuration");let t;try{t=JSON.parse(this.state.config)}catch{return void alert("Invalid JSON")}let n=[],i=[],o=function(e){let t="config top-level";return void 0!==e&&(t="namespace {"+e.name+"}"),t},r=function(e,r,a){i.push("`"+e+"` renamed to `"+r+"`");let s=o(a);void 0===a&&(a=t),void 0===a[r]&&void 0!==a[e]&&(a[r]=a[e],delete a[e],n.push("renamed "+e+" to "+r+" in "+s))},a=function(e,r){i.push("`"+e+"` removed");let a=o(r);void 0===r&&(r=t),void 0!==r[e]&&(delete r[e],n.push("removed "+e+" from "+a))},s=function(e,r){i.push("`"+e+"` should be converted to duration");let a=o(r);if(void 0===r&&(r=t),void 0!==r[e]){let t=r[e];"number"==typeof t&&(Math.floor(t)===t?r[e]=r[e]+"s":r[e]=1e3*t+"ms",n.push("updated "+e+" to duration value "+r[e]+" in "+a))}},l=!1;for(var d in t)d.startsWith("proxy_")&&(l=!0);if(l&&void 0===t.proxy_http_headers){let e=["Origin","User-Agent","Cookie","Authorization","X-Real-Ip","X-Forwarded-For","X-Request-Id"];if(void 0!==t.proxy_extra_http_headers)for(var p in t.proxy_extra_http_headers)e.push(t.proxy_extra_http_headers[p]);t.proxy_http_headers=e,n.push("set list of headers for HTTP proxy (since v3 requires explicit values)"),a("proxy_extra_http_headers")}if(function(e,r,a){i.push("`"+e+"` is now required");let s=o(a);void 0===a&&(a=t),void 0===a[e]&&(a[e]=r,n.push("added "+e+" to "+s))}("allowed_origins",[]),a("v3_use_offset"),a("redis_streams"),a("tls_autocert_force_rsa"),a("redis_pubsub_num_workers"),a("sockjs_disable"),r("secret","token_hmac_secret_key"),r("history_lifetime","history_ttl"),r("history_recover","recover"),r("server_side","protected"),r("client_presence_ping_interval","client_presence_update_interval"),r("client_ping_interval","websocket_ping_interval"),r("client_message_write_timeout","websocket_write_timeout"),r("client_request_max_size","websocket_message_size_limit"),r("client_presence_expire_interval","presence_ttl"),r("memory_history_meta_ttl","history_meta_ttl"),r("redis_history_meta_ttl","history_meta_ttl"),r("redis_sequence_ttl","history_meta_ttl"),r("redis_presence_ttl","presence_ttl"),s("presence_ttl"),s("websocket_write_timeout"),s("websocket_ping_interval"),s("client_presence_update_interval"),s("history_ttl"),s("history_meta_ttl"),s("nats_dial_timeout"),s("nats_write_timeout"),s("graphite_interval"),s("shutdown_timeout"),s("shutdown_termination_delay"),s("proxy_connect_timeout"),s("proxy_refresh_timeout"),s("proxy_rpc_timeout"),s("proxy_subscribe_timeout"),s("proxy_publish_timeout"),s("client_expired_close_delay"),s("client_expired_sub_close_delay"),s("client_stale_close_delay"),s("client_channel_position_check_delay"),s("node_info_metrics_aggregate_interval"),s("websocket_ping_interval"),s("websocket_write_timeout"),s("sockjs_heartbeat_delay"),s("redis_idle_timeout"),s("redis_connect_timeout"),s("redis_read_timeout"),s("redis_write_timeout"),void 0!==t.namespaces){let e=[];for(let n of t.namespaces)r("history_lifetime","history_ttl",n),s("history_ttl",n),r("history_recover","recover",n),r("server_side","protected",n),e.push(n);t.namespaces=e}if(void 0!==t.redis_host&&void 0!==t.redis_port){let e=[],i=t.redis_host.toString().split(","),o=t.redis_port.toString().split(",");if(i.length!==o.length)return void alert("Sorry, too difficult Redis configuration to automatically convert");for(let t in i){let n=i[t]+":"+o[t];e.push(n)}t.redis_address=e,a("redis_host"),a("redis_port"),n.push("redis configuration updated, but you should check it manually")}else void 0!==t.redis_url&&r("redis_url","redis_address");r("redis_cluster_addrs","redis_cluster_address"),r("redis_sentinels","redis_sentinel_address"),r("redis_master_name","redis_sentinel_master_name"),this.setState({output:JSON.stringify(t,null,"\t")}),this.setState({logs:JSON.stringify(n,null,"\t")}),console.log(i.join("\n\n"))}onChange(e){this.setState({config:e.target.value})}render(){return o.createElement("div",null,o.createElement("textarea",{onChange:this.onChange,placeholder:"Paste your Centrifugo v2 JSON config here...",style:{width:"100%",height:"300px",border:"2px solid #ccc"}}),o.createElement("button",{onClick:this.onClick},"Convert"),o.createElement("pre",{style:{marginTop:"10px"}},this.state.output),o.createElement("pre",{style:{marginTop:"10px"}},this.state.logs))}}const s={id:"migration_v3",title:"Migrating to v3"},l=void 0,d={unversionedId:"getting-started/migration_v3",id:"version-3/getting-started/migration_v3",title:"Migrating to v3",description:"This chapter aims to help developers migrate from Centrifugo v2 to Centrifugo v3. Migration should mostly affect the backend part only, so you won't need to change the code of your frontend applications at all. In most cases, all you should do is adapt Centrifugo configuration to match v3 changes and redeploy Centrifugo using v3 build instead of v2.",source:"@site/versioned_docs/version-3/getting-started/migration-v3.md",sourceDirName:"getting-started",slug:"/getting-started/migration_v3",permalink:"/docs/3/getting-started/migration_v3",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/getting-started/migration-v3.md",tags:[],version:"3",frontMatter:{id:"migration_v3",title:"Migrating to v3"},sidebar:"Introduction",previous:{title:"Design overview",permalink:"/docs/3/getting-started/design"}},p={},u=[{value:"Client-side changes",id:"client-side-changes",level:2},{value:"No unlimited history by default",id:"no-unlimited-history-by-default",level:3},{value:"Publication limit for recovery",id:"publication-limit-for-recovery",level:3},{value:"Seq/Gen fields removed",id:"seqgen-fields-removed",level:3},{value:"Server-side changes",id:"server-side-changes",level:2},{value:"Time interval options are duration",id:"time-interval-options-are-duration",level:3},{value:"Channel options changes",id:"channel-options-changes",level:3},{value:"Some command-line flags removed",id:"some-command-line-flags-removed",level:3},{value:"Enforced request Origin check",id:"enforced-request-origin-check",level:3},{value:"Updated GRPC API Protobuf package",id:"updated-grpc-api-protobuf-package",level:3},{value:"Channels API method changed",id:"channels-api-method-changed",level:3},{value:"HTTP proxy changes",id:"http-proxy-changes",level:3},{value:"JWT changes",id:"jwt-changes",level:3},{value:"Redis configuration changes",id:"redis-configuration-changes",level:3},{value:"Redis streams used by default",id:"redis-streams-used-by-default",level:3},{value:"SockJS disabled by default",id:"sockjs-disabled-by-default",level:3},{value:"Other configuration changes",id:"other-configuration-changes",level:3},{value:"v2 to v3 config converter",id:"v2-to-v3-config-converter",level:3}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter aims to help developers migrate from Centrifugo v2 to Centrifugo v3. Migration should mostly affect the backend part only, so you won't need to change the code of your frontend applications at all. In most cases, all you should do is adapt Centrifugo configuration to match v3 changes and redeploy Centrifugo using v3 build instead of v2."),(0,r.kt)("p",null,"There are a couple of exceptions - read carefully about client-side changes below."),(0,r.kt)("p",null,"In any case \u2013 don't forget to test your application before running in production."),(0,r.kt)("h2",{id:"client-side-changes"},"Client-side changes"),(0,r.kt)("p",null,"Client protocol has some backward incompatible changes regarding working with history API and removing deprecated fields."),(0,r.kt)("h3",{id:"no-unlimited-history-by-default"},"No unlimited history by default"),(0,r.kt)("p",null,"Call to ",(0,r.kt)("inlineCode",{parentName:"p"},"history")," API from client-side now does not return all publications from history cache. It returns only information about a stream with zero publications. Clients should explicitly provide a limit when calling history API. Also, the maximum allowed limit can be set by ",(0,r.kt)("inlineCode",{parentName:"p"},"client_history_max_publication_limit")," option (by default ",(0,r.kt)("inlineCode",{parentName:"p"},"300"),")."),(0,r.kt)("p",null,"We provide a boolean flag ",(0,r.kt)("inlineCode",{parentName:"p"},"use_unlimited_history_by_default")," on configuration file top level to enable previous behavior while you migrate client applications to use explicit limit."),(0,r.kt)("h3",{id:"publication-limit-for-recovery"},"Publication limit for recovery"),(0,r.kt)("p",null,"The maximum number of messages that can be recovered is now limited by ",(0,r.kt)("inlineCode",{parentName:"p"},"client_recovery_max_publication_limit")," option which is by default ",(0,r.kt)("inlineCode",{parentName:"p"},"300"),"."),(0,r.kt)("h3",{id:"seqgen-fields-removed"},"Seq/Gen fields removed"),(0,r.kt)("p",null,"Deprecated seq/gen now removed and Centrifugo uses ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," field for a position in a stream. This means that there is no need for ",(0,r.kt)("inlineCode",{parentName:"p"},"v3_use_offset")," option anymore \u2013 it's not used in Centrifugo v3."),(0,r.kt)("h2",{id:"server-side-changes"},"Server-side changes"),(0,r.kt)("h3",{id:"time-interval-options-are-duration"},"Time interval options are duration"),(0,r.kt)("p",null,"In Centrifugo v3 all time intervals should be configured using ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration"),"."),(0,r.kt)("p",null,"For example ",(0,r.kt)("inlineCode",{parentName:"p"},'"proxy_connect_timeout": 1')," should be changed to ",(0,r.kt)("inlineCode",{parentName:"p"},'"proxy_connect_timeout": "1s"'),"."),(0,r.kt)("p",null,"We provide a ",(0,r.kt)("a",{parentName:"p",href:"#v2-to-v3-config-converter"},"configuration converter")," which takes this change into account."),(0,r.kt)("h3",{id:"channel-options-changes"},"Channel options changes"),(0,r.kt)("p",null,"In Centrifugo v3 ",(0,r.kt)("inlineCode",{parentName:"p"},"history_recover")," option becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"recover"),"."),(0,r.kt)("p",null,"Option ",(0,r.kt)("inlineCode",{parentName:"p"},"history_lifetime")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"history_ttl")," and it's now a ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration"),"."),(0,r.kt)("p",null,"Option ",(0,r.kt)("inlineCode",{parentName:"p"},"server_side")," removed, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/channels#protected"},"protected")," option as a replacement."),(0,r.kt)("p",null,"We provide a ",(0,r.kt)("a",{parentName:"p",href:"#v2-to-v3-config-converter"},"configuration converter")," which takes these changes into account."),(0,r.kt)("h3",{id:"some-command-line-flags-removed"},"Some command-line flags removed"),(0,r.kt)("p",null,"Configuring over command-line flags is not very convenient for production deployments, Centrifugo v3 reduced the number of command-line flags available \u2013 it mostly has flags frequently useful for development now. "),(0,r.kt)("h3",{id:"enforced-request-origin-check"},"Enforced request Origin check"),(0,r.kt)("p",null,"In Centrifugo v3 you should explicitly ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#allowed_origins"},"set a list of allowed origins")," which are allowed to connect to client transport endpoints."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "allowed_origins": ["https://mysite.com"]\n}\n')),(0,r.kt)("p",null,"There is a way to disable origin check, but it's discouraged and ",(0,r.kt)("strong",{parentName:"p"},"insecure")," in case you are using connect proxy feature."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "allowed_origins": ["*"]\n}\n')),(0,r.kt)("h3",{id:"updated-grpc-api-protobuf-package"},"Updated GRPC API Protobuf package"),(0,r.kt)("p",null,"In Centrifugo v3 we addressed an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifugo/issues/379"},"issue")," where package name in Protobuf definitions resulted in some inconvenience and attempts to rename it. But it's not possible to rename it since GRPC uses it as part of RPC methods internally. Now GRPC API package looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"package centrifugal.centrifugo.api;\n")),(0,r.kt)("p",null,"This means you need to regenerate your GRPC code which communicates with Centrifugo using the latest Protobuf definitions. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/server_api#grpc-api"},"GRPC API doc"),"."),(0,r.kt)("h3",{id:"channels-api-method-changed"},"Channels API method changed"),(0,r.kt)("p",null,"The response format of ",(0,r.kt)("inlineCode",{parentName:"p"},"channels")," API call changed in v3. See description in ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/server_api#channels"},"API doc"),". "),(0,r.kt)("p",null,"The channels method has new additional possibilities like showing the number of connections in a channel and filter channels by pattern."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Channels API call still has the same concern as before: this method does not scale well for many active channels in a system and is mostly recommended for administrative/debug purposes.")),(0,r.kt)("h3",{id:"http-proxy-changes"},"HTTP proxy changes"),(0,r.kt)("p",null,"When using HTTP proxy you should now set an explicit list of headers you want to proxy. To mimic the behavior of Centrifugo v2 add to your configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=config.json",title:"config.json"},'{\n    "proxy_http_headers": [\n        "Origin",\n        "User-Agent",\n        "Cookie",\n        "Authorization",\n        "X-Real-Ip",\n        "X-Forwarded-For",\n        "X-Request-Id"\n    ]\n}\n')),(0,r.kt)("p",null,"If you had a list of extra HTTP headers using ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy_extra_http_headers")," then additionally extend list above with values from ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy_extra_http_headers"),". Then you can remove ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy_extra_http_headers")," - it's not used anymore."),(0,r.kt)("p",null,"Another important change is how Centrifugo proxies binary data over HTTP JSON proxy. Previously proxy mode (whether to use base64 fields or not) could be configured using ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding=binary")," URL param of connection. With Centrifugo v3 it's only possible to use binary mode by enabling ",(0,r.kt)("inlineCode",{parentName:"p"},'"proxy_binary_encoding": true')," option. BTW according to our community poll only 2% of Centrifugo users used binary mode in HTTP proxy. If you have problems with new behavior \u2013 write about your situation to our community chats \u2013 and we will see what's possible."),(0,r.kt)("h3",{id:"jwt-changes"},"JWT changes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"eto")," claim of subscription JWT removed. But since Centrifugo v3 introduced an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"expire_at")," claim it's still possible to implement one-time subscription tokens without enabling subscription expiration workflow by setting ",(0,r.kt)("inlineCode",{parentName:"p"},'"expire_at: 0"')," in subscription JWT claims."),(0,r.kt)("h3",{id:"redis-configuration-changes"},"Redis configuration changes"),(0,r.kt)("p",null,"Redis configuration was a bit messy - especially in the Redis sharding case, in v3 we decided to clean up it a bit. Make it more explicit and reduce the number of possible ways to configure."),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/engines#redis-engine"},"Redis Engine docs")," for the new configuration details. The important thing is that there is no separate ",(0,r.kt)("inlineCode",{parentName:"p"},"redis_host")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"redis_port")," option anymore \u2013 those are replaced with single ",(0,r.kt)("inlineCode",{parentName:"p"},"redis_address")," option."),(0,r.kt)("h3",{id:"redis-streams-used-by-default"},"Redis streams used by default"),(0,r.kt)("p",null,"Centrifugo v3 will use Redis Stream data structure to keep history instead of lists."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This requires Redis >= 5.0.1 to work. If you still need List data structure or have an old Redis version you can use ",(0,r.kt)("inlineCode",{parentName:"p"},'"redis_use_lists": true')," to mimic the default behavior of Centrifugo v2.")),(0,r.kt)("h3",{id:"sockjs-disabled-by-default"},"SockJS disabled by default"),(0,r.kt)("p",null,"Our poll showed that most Centrifugo users do not use SockJS transport. In v3 it's disabled by default. You can enable it by setting ",(0,r.kt)("inlineCode",{parentName:"p"},'"sockjs": true')," in configuration."),(0,r.kt)("h3",{id:"other-configuration-changes"},"Other configuration changes"),(0,r.kt)("p",null,"Here is a full list of configuration option changes. We provide a best-effort ",(0,r.kt)("a",{parentName:"p",href:"#v2-to-v3-config-converter"},"configuration converter"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"allowed_origins")," is now required to be set to authorize requests with ",(0,r.kt)("inlineCode",{parentName:"p"},"Origin")," header"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v3_use_offset")," removed"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis_streams")," removed"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tls_autocert_force_rsa")," removed"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis_pubsub_num_workers")," removed"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sockjs_disable")," removed"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"secret")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"history_lifetime")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"history_ttl")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"history_recover")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"recover")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"client_presence_ping_interval")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"client_presence_update_interval")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"client_ping_interval")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"websocket_ping_interval")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"client_message_write_timeout")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"websocket_write_timeout")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"client_request_max_size")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"websocket_message_size_limit")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"client_presence_expire_interval")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"presence_ttl")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"memory_history_meta_ttl")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis_history_meta_ttl")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis_sequence_ttl")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis_presence_ttl")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"presence_ttl")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"presence_ttl")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"websocket_write_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"websocket_ping_interval")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"client_presence_update_interval")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"history_ttl")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nats_dial_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nats_write_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphite_interval")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shutdown_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shutdown_termination_delay")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy_connect_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy_refresh_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy_rpc_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy_subscribe_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy_publish_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"client_expired_close_delay")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"client_expired_sub_close_delay")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"client_stale_close_delay")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"client_channel_position_check_delay")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"node_info_metrics_aggregate_interval")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"websocket_ping_interval")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"websocket_write_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sockjs_heartbeat_delay")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis_idle_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis_connect_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis_read_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis_write_timeout")," should be converted to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis_cluster_addrs")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"redis_cluster_address")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis_sentinels")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"redis_sentinel_address")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"redis_master_name")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"redis_sentinel_master_name")),(0,r.kt)("h3",{id:"v2-to-v3-config-converter"},"v2 to v3 config converter"),(0,r.kt)("p",null,"Here is a converter between Centrifugo v2 and v3 JSON configuration. It can help to translate most of the things automatically for you."),(0,r.kt)("p",null,"If you are using Centrifugo with TOML format then you can use ",(0,r.kt)("a",{parentName:"p",href:"https://pseitz.github.io/toml-to-json-online-converter/"},"online converter")," as initial step. Or ",(0,r.kt)("a",{parentName:"p",href:"https://jsonformatter.org/yaml-to-json"},"yaml-to-json")," and ",(0,r.kt)("a",{parentName:"p",href:"https://jsonformatter.org/json-to-yaml"},"json-to-yaml")," for YAML."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It's fully client-side: your data won't be sent anywhere.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Unfortunately, we can't migrate environment variables and command-line flags automatically - so if you are using env vars or command-line flags to configure Centrifugo you still need to migrate manually. Also, be aware: this converter tool is the best effort only \u2013 we can not guarantee it solves all corner cases, especially in Redis configuration. You may still need to fix some things manually, for example - properly fill ",(0,r.kt)("inlineCode",{parentName:"p"},"allowed_origins"),".")),(0,r.kt)(a,{mdxType:"ConfigConverter"}))}m.isMDXComponent=!0}}]);