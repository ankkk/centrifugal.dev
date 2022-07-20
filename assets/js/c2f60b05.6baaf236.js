"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7049],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return h}});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?t.createElement(m,s(s({ref:n},c),{},{components:a})):t.createElement(m,s({ref:n},c))}));function h(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3858:function(e,n,a){a.r(n),a.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var t=a(3117),i=a(102),o=(a(7294),a(3905)),s=["components"],r={id:"channels",title:"Channels"},l=void 0,p={unversionedId:"server/channels",id:"version-3/server/channels",title:"Channels",description:"Channel is a route for publications. Clients can be subscribed to a channel to receive real-time messages published to a channel \u2013 new publications and join/leave events (if enabled for a channel namespace). A channel subscriber can also ask for a channel presence or channel history information (if enabled for a channel namespace).",source:"@site/versioned_docs/version-3/server/channels.md",sourceDirName:"server",slug:"/server/channels",permalink:"/docs/3/server/channels",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/server/channels.md",tags:[],version:"3",frontMatter:{id:"channels",title:"Channels"},sidebar:"Guides",previous:{title:"Client authentication",permalink:"/docs/3/server/authentication"},next:{title:"Private channels",permalink:"/docs/3/server/private_channels"}},c={},u=[{value:"Channel name rules",id:"channel-name-rules",level:2},{value:"namespace boundary (<code>:</code>)",id:"namespace-boundary-",level:3},{value:"private channel prefix (<code>$</code>)",id:"private-channel-prefix-",level:3},{value:"user channel boundary (<code>#</code>)",id:"user-channel-boundary-",level:3},{value:"Channel options",id:"channel-options",level:2},{value:"publish",id:"publish",level:3},{value:"subscribe_to_publish",id:"subscribe_to_publish",level:3},{value:"anonymous",id:"anonymous",level:3},{value:"presence",id:"presence",level:3},{value:"presence_disable_for_client",id:"presence_disable_for_client",level:3},{value:"join_leave",id:"join_leave",level:3},{value:"history_size",id:"history_size",level:3},{value:"history_ttl",id:"history_ttl",level:3},{value:"position",id:"position",level:3},{value:"recover",id:"recover",level:3},{value:"history_disable_for_client",id:"history_disable_for_client",level:3},{value:"protected",id:"protected",level:3},{value:"proxy_subscribe",id:"proxy_subscribe",level:3},{value:"proxy_publish",id:"proxy_publish",level:3},{value:"subscribe_proxy_name",id:"subscribe_proxy_name",level:3},{value:"publish_proxy_name",id:"publish_proxy_name",level:3},{value:"Channel options config example",id:"channel-options-config-example",level:2},{value:"Channel namespaces",id:"channel-namespaces",level:2}],d={toc:u};function h(e){var n=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Channel is a route for publications. Clients can be subscribed to a channel to receive real-time messages published to a channel \u2013 new publications and join/leave events (if enabled for a channel namespace). A channel subscriber can also ask for a channel presence or channel history information (if enabled for a channel namespace)."),(0,o.kt)("p",null,"Channel is just a string - ",(0,o.kt)("inlineCode",{parentName:"p"},"news"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"comments"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"personal_feed")," are valid channel names. Though this string has some ",(0,o.kt)("a",{parentName:"p",href:"#channel-name-rules"},"predefined rules")," as we will see below. You can define different channel behavior using a set of available ",(0,o.kt)("a",{parentName:"p",href:"#channel-options"},"channel options"),"."),(0,o.kt)("p",null,"Channels are ephemeral \u2013 you don't need to create them explicitly. Channels created automatically by Centrifugo as soon as the first client subscribes to a channel. As soon as the last subscriber leaves a channel - it's automatically cleaned up."),(0,o.kt)("p",null,"Channel can belong to a channel namespace. ",(0,o.kt)("a",{parentName:"p",href:"#channel-namespaces"},"Channel namespacing")," is a mechanism to define different behavior for different channels in Centrifugo. Using namespaces is a recommended way to manage channels \u2013 to turn on only those channel options which are required for a specific real-time feature you are implementing on top of Centrifugo."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When using channel namespaces make sure you defined a namespace in configuration. Subscription attempts to a channel within a non-defined namespace will result into ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/codes#unknown-channel"},"102: unknown channel")," errors.")),(0,o.kt)("h2",{id:"channel-name-rules"},"Channel name rules"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Only ASCII symbols must be used in channel string"),"."),(0,o.kt)("p",null,"Channel name length limited by ",(0,o.kt)("inlineCode",{parentName:"p"},"255")," characters by default (can be changed via configuration file option ",(0,o.kt)("inlineCode",{parentName:"p"},"channel_max_length"),")."),(0,o.kt)("p",null,"Several symbols in channel names reserved for Centrifugo internal needs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":")," \u2013 for namespace channel boundary (see below)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$")," \u2013 for private channel prefix (see below)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#")," \u2013 for user channel boundary (see below)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"*")," \u2013 for the future Centrifugo needs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&")," \u2013 for the future Centrifugo needs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/")," \u2013 for the future Centrifugo needs")),(0,o.kt)("h3",{id:"namespace-boundary-"},"namespace boundary (",(0,o.kt)("inlineCode",{parentName:"h3"},":"),")"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},":")," \u2013 is a channel namespace boundary. Namespaces are used to set custom options to a group of channels. Each channel belonging to the same namespace will have the same channel options. Read more about available ",(0,o.kt)("a",{parentName:"p",href:"#channel-options"},"channel options")," and more about ",(0,o.kt)("a",{parentName:"p",href:"#channel-namespaces"},"namespaces")," below."),(0,o.kt)("p",null,"If the channel is ",(0,o.kt)("inlineCode",{parentName:"p"},"public:chat")," - then Centrifugo will apply options to this channel from the channel namespace with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"public"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A namespace is part of the channel name. If a user subscribed to a channel with namespace, like ",(0,o.kt)("inlineCode",{parentName:"p"},"public:chat")," \u2013 then you need to publish messages into ",(0,o.kt)("inlineCode",{parentName:"p"},"public:chat")," channel to be delivered to the user. We often see some confusion from developers trying to publish messages into ",(0,o.kt)("inlineCode",{parentName:"p"},"chat")," and thinking that namespace is somehow stripped upon subscription. It's not true.")),(0,o.kt)("h3",{id:"private-channel-prefix-"},"private channel prefix (",(0,o.kt)("inlineCode",{parentName:"h3"},"$"),")"),(0,o.kt)("p",null,"If the channel starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," then it is considered ",(0,o.kt)("em",{parentName:"p"},"private"),". The subscription on a private channel must be properly signed by your backend."),(0,o.kt)("p",null,"Use private channels if you pass sensitive data inside the channel and want to control access permissions on your backend."),(0,o.kt)("p",null,"For example ",(0,o.kt)("inlineCode",{parentName:"p"},"$secrets")," is a private channel, ",(0,o.kt)("inlineCode",{parentName:"p"},"$public:chat")," - is a private channel that belongs to namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"public"),"."),(0,o.kt)("p",null,"Subscription request to private channels requires additional JWT from your application backend. Read ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/private_channels"},"detailed chapter about private channels"),"."),(0,o.kt)("p",null,"If you need a personal channel for a single user (or maybe a channel for a short and stable set of users) then consider using a ",(0,o.kt)("inlineCode",{parentName:"p"},"user-limited")," channel (see below) as a simpler alternative that does not require an additional subscription token from your backend."),(0,o.kt)("p",null,"Also, consider using server-side subscriptions or subscribe proxy feature of Centrifugo to model channels with restrictive access. "),(0,o.kt)("h3",{id:"user-channel-boundary-"},"user channel boundary (",(0,o.kt)("inlineCode",{parentName:"h3"},"#"),")"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"#")," \u2013 is a user channel boundary. This is a separator to create personal channels for users (we call this ",(0,o.kt)("em",{parentName:"p"},"user-limited channels"),") without the need to provide a subscription token."),(0,o.kt)("p",null,"For example, if the channel is ",(0,o.kt)("inlineCode",{parentName:"p"},"news#42")," then the only user with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"42")," can subscribe to this channel (Centrifugo knows user ID because clients provide it in connection credentials with connection JWT)."),(0,o.kt)("p",null,"If you want to create a user-limited channel in namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"personal")," then you can use a name like ",(0,o.kt)("inlineCode",{parentName:"p"},"personal:user#42")," for example."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Channel like ",(0,o.kt)("inlineCode",{parentName:"p"},"$personal:user#42")," - i.e. channel with both private prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," and user channel boundary ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," does not have a lot of sense, most probably you can just use ",(0,o.kt)("inlineCode",{parentName:"p"},"personal:user#42")," as the ID of the user protected by authentication JWT or set by application backend when the connect proxy feature is used.")),(0,o.kt)("p",null,"Moreover, you can provide several user IDs in channel name separated by a comma: ",(0,o.kt)("inlineCode",{parentName:"p"},"dialog#42,43")," \u2013 in this case only the user with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"42")," and user with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"43")," will be able to subscribe on this channel."),(0,o.kt)("p",null,"This is useful for channels with a static list of allowed users, for example for single user personal messages channel, for dialog channel between certainly defined users. As soon as you need to manage access to a channel dynamically for many users this channel type does not suit well."),(0,o.kt)("h2",{id:"channel-options"},"Channel options"),(0,o.kt)("p",null,"Channel behavior can be modified by using channel options. Channel options can be defined on configuration top-level and for every namespace."),(0,o.kt)("h3",{id:"publish"},"publish"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"publish")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 when on allows clients to publish messages into channels directly (from a client-side)."),(0,o.kt)("p",null,"Keep in mind that your application will never receive such messages. In an idiomatic use case, all messages must be published to Centrifugo by an application backend using Centrifugo API (HTTP or GRPC). Or using ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/proxy#publish-proxy"},"publish proxy"),". Since in those cases your application has a chance to validate a message, save it into a database, and only after that broadcast to all subscribers."),(0,o.kt)("p",null,"But the ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," option still can be useful to send something without backend-side validation and saving it into a database. This option can also be handy for demos and quick prototyping real-time app ideas."),(0,o.kt)("h3",{id:"subscribe_to_publish"},"subscribe_to_publish"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"subscribe_to_publish")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") - when the ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," option is enabled client can publish into a channel without being subscribed to it. This option enables an automatic check that the client subscribed to a channel before allowing a client to publish."),(0,o.kt)("h3",{id:"anonymous"},"anonymous"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"anonymous")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 this option enables anonymous user access (i.e. for a user with an empty user ID). In most situations, your application works with authenticated users so every user has its unique user ID (set inside JWT ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," claim or provided by backend when using connect proxy). But if you provide real-time features for public access you may need unauthenticated access to some channels. Turn on this option and use an empty string as a user ID. See also related global option ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#client_anonymous"},"client_anonymous")," which allows anonymous users to connect without JWT. "),(0,o.kt)("h3",{id:"presence"},"presence"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"presence")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 enable/disable online presence information for channels. Online presence is information about clients currently subscribed to the channel. It contains each subscriber's client ID, user ID, connection info, and channel info. By default, this option is off so no presence information will be available for channels."),(0,o.kt)("p",null,"Enabling channel online presence adds some overhead since Centrifugo needs to maintain an additional data structure (in a process memory or a broker memory/disk)."),(0,o.kt)("h3",{id:"presence_disable_for_client"},"presence_disable_for_client"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"presence_disable_for_client")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 allows making presence calls available only for a server-side API. By default, presence information is available for both client and server-side APIs."),(0,o.kt)("h3",{id:"join_leave"},"join_leave"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"join_leave")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 enable/disable sending join(leave) messages when the client subscribes to a channel (unsubscribes from a channel). Join/leave event includes information about the connection that triggered an event \u2013 client ID, user ID, connection info, and channel info."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that join/leave messages can generate a big number of messages in a system if turned on for channels with a large number of active subscribers. If you have channels with a large number of subscribers consider avoiding using this feature or to scale Centrifugo.")),(0,o.kt)("h3",{id:"history_size"},"history_size"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"history_size")," (integer, default ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),") \u2013 history size (amount of messages) for channels. As Centrifugo keeps all history messages in process memory (or in a broker memory) it's very important to limit the maximum amount of messages in channel history with a reasonable value. ",(0,o.kt)("inlineCode",{parentName:"p"},"history_size")," defines the maximum amount of messages that Centrifugo will keep for ",(0,o.kt)("strong",{parentName:"p"},"each")," channel in the namespace. As soon as history has more messages than defined by history size \u2013 old messages will be evicted."),(0,o.kt)("p",null,"Setting only ",(0,o.kt)("inlineCode",{parentName:"p"},"history_size")," is not enough to enable history in channels \u2013 you also need to wisely configure ",(0,o.kt)("inlineCode",{parentName:"p"},"history_ttl")," option (see below). "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Enabling channel history adds some overhead (both memory and CPU) since Centrifugo needs to maintain an additional data structure (in a process memory or a broker memory/disk).")),(0,o.kt)("h3",{id:"history_ttl"},"history_ttl"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"history_ttl")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration"),", default ",(0,o.kt)("inlineCode",{parentName:"p"},"0s"),") \u2013 interval how long to keep channel history messages (with seconds precision)."),(0,o.kt)("p",null,"As all history is storing in process memory (or in a broker memory) it is also very important to get rid of old history data for unused (inactive for a long time) channels."),(0,o.kt)("p",null,"By default history TTL duration is zero \u2013 this means that channel history is disabled."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Again \u2013 to turn on history you should wisely configure both ",(0,o.kt)("inlineCode",{parentName:"strong"},"history_size")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"history_ttl")," options"),"."),(0,o.kt)("p",null,"For example for top-level channels (which do not belong to a namespace):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "history_size": 10,\n    "history_ttl": "60s"\n}\n')),(0,o.kt)("h3",{id:"position"},"position"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"position")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 when the ",(0,o.kt)("inlineCode",{parentName:"p"},"position")," feature is on Centrifugo tries to compensate at most once delivery of PUB/SUB messages checking client position inside a stream."),(0,o.kt)("p",null,"If Centrifugo detects a bad position of the client (i.e. potential message loss) it disconnects a client with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Insufficient state")," disconnect code. Also, when the position option is enabled Centrifugo exposes the current stream top ",(0,o.kt)("inlineCode",{parentName:"p"},"offset")," and current ",(0,o.kt)("inlineCode",{parentName:"p"},"epoch")," in subscribe reply making it possible for a client to manually recover its state upon disconnect using history API."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"position")," option must be used in conjunction with reasonably configured message history for a channel i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"history_size")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"history_ttl")," ",(0,o.kt)("strong",{parentName:"p"},"must be set")," (because Centrifugo uses channel history to check client position in a stream)."),(0,o.kt)("h3",{id:"recover"},"recover"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recover")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 when enabled Centrifugo will try to recover missed publications after a client reconnects for some reason (bad internet connection for example). Also when the recovery feature is on Centrifugo automatically enables properties of the ",(0,o.kt)("inlineCode",{parentName:"p"},"position")," option described above."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recover")," option must be used in conjunction with reasonably configured message history for channel i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"history_size")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"history_ttl")," ",(0,o.kt)("strong",{parentName:"p"},"must be set")," (because Centrifugo uses channel history to recover messages)."),(0,o.kt)("p",null,"Also, note that not all real-time events require this feature turned on so think wisely when you need this. When this option is turned on your application should be designed in a way to tolerate duplicate messages coming from a channel (currently Centrifugo returns recovered publications in order and without duplicates but this is an implementation detail that can be theoretically changed in the future). See more details about how recovery works in ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/history_and_recovery"},"special chapter"),"."),(0,o.kt)("h3",{id:"history_disable_for_client"},"history_disable_for_client"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"history_disable_for_client")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 allows making history available only for a server-side API. By default ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," \u2013 i.e. history calls are available for both client and server-side APIs."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"History recovery mechanism if enabled will continue to work for clients anyway even if ",(0,o.kt)("inlineCode",{parentName:"p"},"history_disable_for_client")," is on.")),(0,o.kt)("h3",{id:"protected"},"protected"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"protected")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 when on will prevent a client to subscribe to arbitrary channels in a namespace. In this case, Centrifugo will only allow a client to subscribe on user-limited channels, on channels returned by the proxy response, or channels listed inside JWT. Client-side subscriptions to arbitrary channels will be rejected with PermissionDenied error. Server-side channels belonging to the protected namespace passed by the client itself during connect will be ignored."),(0,o.kt)("h3",{id:"proxy_subscribe"},"proxy_subscribe"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"proxy_subscribe")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 turns on subscribe proxy, more info in ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/proxy"},"proxy chapter")),(0,o.kt)("h3",{id:"proxy_publish"},"proxy_publish"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"proxy_publish")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 turns on publish proxy, more info in ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/proxy"},"proxy chapter")),(0,o.kt)("h3",{id:"subscribe_proxy_name"},"subscribe_proxy_name"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"subscribe_proxy_name")," (string, default ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),") \u2013 turns on subscribe proxy when ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/proxy#granular-proxy-mode"},"granular proxy mode")," is used. Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy_subscribe")," option defined above is ignored in granular proxy mode."),(0,o.kt)("h3",{id:"publish_proxy_name"},"publish_proxy_name"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"publish_proxy_name")," (string, default ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),") \u2013 turns on publish proxy when ",(0,o.kt)("a",{parentName:"p",href:"/docs/3/server/proxy#granular-proxy-mode"},"granular proxy mode")," is used. Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy_publish")," option defined above is ignored in granular proxy mode."),(0,o.kt)("h2",{id:"channel-options-config-example"},"Channel options config example"),(0,o.kt)("p",null,"Let's look at how to set some of these options in a config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    "token_hmac_secret_key": "my-secret-key",\n    "api_key": "secret-api-key",\n    "anonymous": true,\n    "publish": true,\n    "subscribe_to_publish": true,\n    "presence": true,\n    "join_leave": true,\n    "history_size": 10,\n    "history_ttl": "300s",\n    "recover": true\n}\n')),(0,o.kt)("p",null,"Here we set channel options on config top-level \u2013 these options will affect channels without namespace. Below we describe namespaces and how to define channel options for a namespace."),(0,o.kt)("h2",{id:"channel-namespaces"},"Channel namespaces"),(0,o.kt)("p",null,"It's possible to configure a list of channel namespaces. Namespaces are optional but very useful. "),(0,o.kt)("p",null,"A namespace allows setting custom options for channels starting with the namespace name. This provides great control over channel behavior so you have a flexible way to define different channel options for different real-time features in the application."),(0,o.kt)("p",null,"Namespace has a name, and the same channel options (with the same defaults) as described above."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - unique namespace name (name must consist of letters, numbers, underscores, or hyphens and be more than 2 symbols length i.e. satisfy regexp ",(0,o.kt)("inlineCode",{parentName:"li"},"^[-a-zA-Z0-9_]{2,}$"),").")),(0,o.kt)("p",null,"If you want to use namespace options for a channel - you must include namespace name into channel name with ",(0,o.kt)("inlineCode",{parentName:"p"},":")," as a separator:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"public:messages")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gossips:messages")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gossips")," are namespace names. Centrifugo will look for ",(0,o.kt)("inlineCode",{parentName:"p"},":")," symbol in the channel name, will extract the namespace name, and will apply namespace options whenever required."),(0,o.kt)("p",null,"All things together here is an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," which includes some top-level channel options set and has 2 additional channel namespaces configured:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    "token_hmac_secret_key": "very-long-secret-key",\n    "api_key": "secret-api-key",\n    "anonymous": true,\n    "publish": true,\n    "presence": true,\n    "join_leave": true,\n    "history_size": 10,\n    "history_ttl": "30s",\n    "namespaces": [\n        {\n          "name": "public",\n          "publish": true,\n          "anonymous": true,\n          "history_size": 10,\n          "history_ttl": "300s",\n          "recover": true\n        },\n        {\n          "name": "gossips",\n          "presence": true,\n          "join_leave": true\n        }\n    ]\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Channel ",(0,o.kt)("inlineCode",{parentName:"li"},"news")," will use globally defined channel options."),(0,o.kt)("li",{parentName:"ul"},"Channel ",(0,o.kt)("inlineCode",{parentName:"li"},"public:news")," will use ",(0,o.kt)("inlineCode",{parentName:"li"},"public")," namespace options."),(0,o.kt)("li",{parentName:"ul"},"Channel ",(0,o.kt)("inlineCode",{parentName:"li"},"gossips:news")," will use ",(0,o.kt)("inlineCode",{parentName:"li"},"gossips")," namespace options."),(0,o.kt)("li",{parentName:"ul"},"Channel ",(0,o.kt)("inlineCode",{parentName:"li"},"xxx:hello")," will result into subscription error since there is no ",(0,o.kt)("inlineCode",{parentName:"li"},"xxx")," namespace defined in configuration above.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Channel namespaces also work with private channels and user-limited channels"),". For example, if you have a namespace called ",(0,o.kt)("inlineCode",{parentName:"p"},"dialogs")," then the private channel can be constructed as ",(0,o.kt)("inlineCode",{parentName:"p"},"$dialogs:gossips"),", user-limited channel can be constructed as ",(0,o.kt)("inlineCode",{parentName:"p"},"dialogs:dialog#1,2"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There is no inheritance in channel options and namespaces \u2013 for example, you defined ",(0,o.kt)("inlineCode",{parentName:"p"},"presence: true")," on a top level of configuration and then defined a namespace \u2013 that namespace won't have online presence enabled - you must enable it for a namespace explicitly. ")))}h.isMDXComponent=!0}}]);