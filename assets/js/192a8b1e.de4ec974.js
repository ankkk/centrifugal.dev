"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5069],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5628:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var i=n(3117),a=n(102),o=(n(7294),n(3905)),r=["components"],s={id:"engines",title:"Engines and scalability"},l=void 0,d={unversionedId:"server/engines",id:"server/engines",title:"Engines and scalability",description:"The Engine in Centrifugo is responsible for publishing messages between nodes, handle PUB/SUB broker subscriptions, save/retrieve online presence and history data.",source:"@site/docs/server/engines.md",sourceDirName:"server",slug:"/server/engines",permalink:"/docs/server/engines",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/engines.md",tags:[],version:"current",frontMatter:{id:"engines",title:"Engines and scalability"},sidebar:"Guides",previous:{title:"Server-side subscriptions",permalink:"/docs/server/server_subs"},next:{title:"Proxy events to the backend",permalink:"/docs/server/proxy"}},u={},p=[{value:"Memory engine",id:"memory-engine",level:2},{value:"Memory engine options",id:"memory-engine-options",level:3},{value:"history_meta_ttl",id:"history_meta_ttl",level:4},{value:"Redis engine",id:"redis-engine",level:2},{value:"Redis engine options",id:"redis-engine-options",level:3},{value:"redis_address",id:"redis_address",level:4},{value:"redis_password",id:"redis_password",level:4},{value:"redis_user",id:"redis_user",level:4},{value:"redis_db",id:"redis_db",level:4},{value:"redis_tls",id:"redis_tls",level:4},{value:"redis_tls_skip_verify",id:"redis_tls_skip_verify",level:4},{value:"redis_prefix",id:"redis_prefix",level:4},{value:"redis_use_lists",id:"redis_use_lists",level:4},{value:"history_meta_ttl",id:"history_meta_ttl-1",level:4},{value:"Scaling with Redis tutorial",id:"scaling-with-redis-tutorial",level:3},{value:"Redis Sentinel for high availability",id:"redis-sentinel-for-high-availability",level:3},{value:"Haproxy instead of Sentinel configuration",id:"haproxy-instead-of-sentinel-configuration",level:3},{value:"Redis sharding",id:"redis-sharding",level:3},{value:"Redis cluster",id:"redis-cluster",level:3},{value:"KeyDB Engine",id:"keydb-engine",level:2},{value:"Tarantool engine",id:"tarantool-engine",level:2},{value:"Tarantool engine options",id:"tarantool-engine-options",level:3},{value:"tarantool_address",id:"tarantool_address",level:4},{value:"tarantool_mode",id:"tarantool_mode",level:4},{value:"tarantool_user",id:"tarantool_user",level:4},{value:"tarantool_password",id:"tarantool_password",level:4},{value:"history_meta_ttl",id:"history_meta_ttl-2",level:4},{value:"Nats broker",id:"nats-broker",level:2},{value:"Options",id:"options",level:3},{value:"nats_url",id:"nats_url",level:4},{value:"nats_prefix",id:"nats_prefix",level:4},{value:"nats_dial_timeout",id:"nats_dial_timeout",level:4},{value:"nats_write_timeout",id:"nats_write_timeout",level:4}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Engine in Centrifugo is responsible for publishing messages between nodes, handle PUB/SUB broker subscriptions, save/retrieve online presence and history data."),(0,o.kt)("p",null,"By default, Centrifugo uses a Memory engine. There are also Redis, KeyDB, Tarantool engines available. And Nats broker which also supports at most once PUB/SUB."),(0,o.kt)("p",null,"With default Memory engine you can start only one node of Centrifugo, while other engines allow running several nodes on different machines to scale client connections and for Centrifugo node high availability. In distributed case all Centrifugo nodes will be connected via broker PUB/SUB, will discover each other and deliver publications to the node where active channel subscribers exist."),(0,o.kt)("p",null,"Memory engine keeps history and presence data in process memory, so the data is lost upon server restart. When using Redis Engine the data is kept in Redis (where you can configure desired persistence properties) instead of Centrifugo node process memory, so channel history data won't be lost after Centrifugo server restart."),(0,o.kt)("p",null,"To set engine you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"engine")," configuration option. Available values are ",(0,o.kt)("inlineCode",{parentName:"p"},"memory"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"redis"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tarantool"),". The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"memory"),"."),(0,o.kt)("p",null,"For example to work with Redis engine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "redis"\n}\n')),(0,o.kt)("h2",{id:"memory-engine"},"Memory engine"),(0,o.kt)("p",null,"Used by default. Supports only one node. Nice choice to start with. Supports all features keeping everything in Centrifugo node process memory. You don't need to install Redis when using this engine."),(0,o.kt)("p",null,"Advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Super fast since it does not involve network at all"),(0,o.kt)("li",{parentName:"ul"},"Does not require separate broker setup")),(0,o.kt)("p",null,"Disadvantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Does not allow scaling nodes (actually you still can scale Centrifugo with Memory engine but you have to publish data into each Centrifugo node and you won't have consistent history and presence state throughout Centrifugo nodes)"),(0,o.kt)("li",{parentName:"ul"},"Does not persist message history in channels between Centrifugo restarts.")),(0,o.kt)("h3",{id:"memory-engine-options"},"Memory engine options"),(0,o.kt)("h4",{id:"history_meta_ttl"},"history_meta_ttl"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"Duration"),", default ",(0,o.kt)("inlineCode",{parentName:"p"},"2160h")," (90 days)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")," sets a time of history stream metadata expiration. "),(0,o.kt)("p",null,"When using a history in a channel, Centrifugo keeps some metadata for it. Metadata includes the latest stream offset and its epoch value. In some cases, when channels are created for \u0430 short time and then not used anymore, created metadata can stay in memory while not useful. For example, you can have a personal user channel but after using your app for a while user left it forever. From a long-term perspective, this can be an unwanted memory growth. Setting a reasonable value to this option can help to expire metadata faster (or slower if you need it). The rule of thumb here is to keep this value much bigger than maximum history TTL used in Centrifugo configuration."),(0,o.kt)("h2",{id:"redis-engine"},"Redis engine"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://redis.io/"},"Redis")," is an open-source, in-memory data structure store, used as a database, cache, and message broker."),(0,o.kt)("p",null,"Centrifugo Redis engine allows scaling Centrifugo nodes to different machines. Nodes will use Redis as a message broker (utilizing Redis PUB/SUB for node communication) and keep presence and history data in Redis."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Minimal Redis version is 5.0.1")),(0,o.kt)("h3",{id:"redis-engine-options"},"Redis engine options"),(0,o.kt)("p",null,"Several configuration options related to Redis engine."),(0,o.kt)("h4",{id:"redis_address"},"redis_address"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},'"127.0.0.1:6379"')," - Redis server address."),(0,o.kt)("h4",{id:"redis_password"},"redis_password"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},'""')," - Redis password."),(0,o.kt)("h4",{id:"redis_user"},"redis_user"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},'""')," - Redis user for ",(0,o.kt)("a",{parentName:"p",href:"https://redis.io/docs/manual/security/acl/"},"ACL-based")," auth."),(0,o.kt)("h4",{id:"redis_db"},"redis_db"),(0,o.kt)("p",null,"Integer, default ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," - number of Redis db to use."),(0,o.kt)("h4",{id:"redis_tls"},"redis_tls"),(0,o.kt)("p",null,"Boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," - enable Redis TLS connection."),(0,o.kt)("h4",{id:"redis_tls_skip_verify"},"redis_tls_skip_verify"),(0,o.kt)("p",null,"Boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," - disable Redis TLS host verification."),(0,o.kt)("h4",{id:"redis_prefix"},"redis_prefix"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},'"centrifugo"')," \u2013 custom prefix to use for channels and keys in Redis."),(0,o.kt)("h4",{id:"redis_use_lists"},"redis_use_lists"),(0,o.kt)("p",null,"Boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," \u2013 turns on using Redis Lists instead of Stream data structure for keeping history (not recommended, keeping this for backwards compatibility mostly)."),(0,o.kt)("h4",{id:"history_meta_ttl-1"},"history_meta_ttl"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"Duration"),", default ",(0,o.kt)("inlineCode",{parentName:"p"},"2160h")," (90 days)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")," sets a time of history stream metadata expiration. "),(0,o.kt)("p",null,"Similar to a Memory engine Redis engine also looks at ",(0,o.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")," option. Meta key in Redis is a HASH that contains the current offset number in channel and the stream epoch value."),(0,o.kt)("p",null,"When using a history in a channel, Centrifugo saves metadata for it. Metadata includes the latest stream offset and its epoch value. In some cases, when channels are created for \u0430 short time and then not used anymore, created metadata can stay in memory while not useful. For example, you can have a personal user channel but after using your app for a while user left it forever. From a long-term perspective, this can be an unwanted memory growth. Setting a reasonable value to this option can help. The rule of thumb here is to keep this value much bigger than maximum history TTL used in Centrifugo configuration."),(0,o.kt)("h3",{id:"scaling-with-redis-tutorial"},"Scaling with Redis tutorial"),(0,o.kt)("p",null,"Let's see how to start several Centrifugo nodes using the Redis Engine. We will start 3 Centrifugo nodes and all those nodes will be connected via Redis."),(0,o.kt)("p",null,"First, you should have Redis running. As soon as it's running - we can launch 3 Centrifugo instances. Open your terminal and start the first one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"centrifugo --config=config.json --port=8000 --engine=redis --redis_address=127.0.0.1:6379\n")),(0,o.kt)("p",null,"If your Redis is on the same machine and runs on its default port you can omit ",(0,o.kt)("inlineCode",{parentName:"p"},"redis_address")," option in the command above."),(0,o.kt)("p",null,"Then open another terminal and start another Centrifugo instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"centrifugo --config=config.json --port=8001 --engine=redis --redis_address=127.0.0.1:6379\n")),(0,o.kt)("p",null,"Note that we use another port number (",(0,o.kt)("inlineCode",{parentName:"p"},"8001"),") as port 8000 is already busy by our first Centrifugo instance. If you are starting Centrifugo instances on different machines then you most probably can use\nthe same port number (",(0,o.kt)("inlineCode",{parentName:"p"},"8000")," or whatever you want) for all instances."),(0,o.kt)("p",null,"And finally, let's start the third instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"centrifugo --config=config.json --port=8002 --engine=redis --redis_address=127.0.0.1:6379\n")),(0,o.kt)("p",null,"Now you have 3 Centrifugo instances running on ports 8000, 8001, 8002 and clients can connect to any of them. You can also send API requests to any of those nodes \u2013 as all nodes connected over Redis PUB/SUB message will be delivered to all interested clients on all nodes."),(0,o.kt)("p",null,"To load balance clients between nodes you can use Nginx \u2013 you can find its configuration here in the documentation."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In the production environment you will most probably run Centrifugo nodes on different hosts, so there will be no need to use different ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," numbers. ")),(0,o.kt)("p",null,"Here is a live example where we locally start two Centrifugo nodes both connected to local Redis:"),(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:"/img/redis_scale_example.mp4",type:"video/mp4"}),"Sorry, your browser doesn't support embedded video."),(0,o.kt)("h3",{id:"redis-sentinel-for-high-availability"},"Redis Sentinel for high availability"),(0,o.kt)("p",null,"Centrifugo supports the official way to add high availability to Redis - Redis ",(0,o.kt)("a",{parentName:"p",href:"http://redis.io/topics/sentinel"},"Sentinel"),"."),(0,o.kt)("p",null,"For this you only need to utilize 2 Redis Engine options: ",(0,o.kt)("inlineCode",{parentName:"p"},"redis_sentinel_address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"redis_sentinel_master_name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_sentinel_address")," (string, default ",(0,o.kt)("inlineCode",{parentName:"li"},'""'),") - comma separated list of Sentinel addresses for HA. At least one known server required."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_sentinel_master_name")," (string, default ",(0,o.kt)("inlineCode",{parentName:"li"},'""'),") - name of Redis master Sentinel monitors")),(0,o.kt)("p",null,"Also:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_sentinel_password")," \u2013 optional string password for your Sentinel, works with Redis Sentinel >= 5.0.1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis_sentinel_user")," - optional string user (used only in Redis ACL-based auth).")),(0,o.kt)("p",null,"So you can start Centrifugo which will use Sentinels to discover Redis master instances like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"centrifugo --config=config.json\n")),(0,o.kt)("p",null,"Where config.json:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "redis",\n    "redis_sentinel_address": "127.0.0.1:26379",\n    "redis_sentinel_master_name": "mymaster"\n}\n')),(0,o.kt)("p",null,"Sentinel configuration files can look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"port 26379\nsentinel monitor mymaster 127.0.0.1 6379 2\nsentinel down-after-milliseconds mymaster 10000\nsentinel failover-timeout mymaster 60000\n")),(0,o.kt)("p",null,"You can find how to properly set up Sentinels ",(0,o.kt)("a",{parentName:"p",href:"http://redis.io/topics/sentinel"},"in official documentation"),"."),(0,o.kt)("p",null,"Note that when your Redis master instance is down there will be a small downtime interval until Sentinels\ndiscover a problem and come to a quorum decision about a new master. The length of this period depends on\nSentinel configuration."),(0,o.kt)("h3",{id:"haproxy-instead-of-sentinel-configuration"},"Haproxy instead of Sentinel configuration"),(0,o.kt)("p",null,"Alternatively, you can use Haproxy between Centrifugo and Redis to let it properly balance traffic to Redis master. In this case, you still need to configure Sentinels but you can omit Sentinel specifics from Centrifugo configuration and just use Redis address as in a simple non-HA case."),(0,o.kt)("p",null,"For example, you can use something like this in Haproxy config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"listen redis\n    server redis-01 127.0.0.1:6380 check port 6380 check inter 2s weight 1 inter 2s downinter 5s rise 10 fall 2\n    server redis-02 127.0.0.1:6381 check port 6381 check inter 2s weight 1 inter 2s downinter 5s rise 10 fall 2 backup\n    bind *:16379\n    mode tcp\n    option tcpka\n    option tcplog\n    option tcp-check\n    tcp-check send PING\\r\\n\n    tcp-check expect string +PONG\n    tcp-check send info\\ replication\\r\\n\n    tcp-check expect string role:master\n    tcp-check send QUIT\\r\\n\n    tcp-check expect string +OK\n    balance roundrobin\n")),(0,o.kt)("p",null,"And then just point Centrifugo to this Haproxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'centrifugo --config=config.json --engine=redis --redis_address="localhost:16379"\n')),(0,o.kt)("h3",{id:"redis-sharding"},"Redis sharding"),(0,o.kt)("p",null,"Centrifugo has built-in Redis sharding support."),(0,o.kt)("p",null,"This resolves the situation when Redis becoming a bottleneck on a large Centrifugo setup. Redis is a single-threaded server, it's very fast but its power is not infinite so when your Redis approaches 100% CPU usage then the sharding feature can help your application to scale."),(0,o.kt)("p",null,"At moment Centrifugo supports a simple comma-based approach to configuring Redis shards. Let's just look at examples."),(0,o.kt)("p",null,"To start Centrifugo with 2 Redis shards on localhost running on port 6379 and port 6380 use config like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "redis",\n    "redis_address": [\n        "127.0.0.1:6379",\n        "127.0.0.1:6380",\n    ]\n}\n')),(0,o.kt)("p",null,"To start Centrifugo with Redis instances on different hosts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "redis",\n    "redis_address": [\n        "192.168.1.34:6379",\n        "192.168.1.35:6379",\n    ]\n}\n')),(0,o.kt)("p",null,"If you also need to customize AUTH password, Redis DB number then you can use an extended address notation."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Due to how Redis PUB/SUB works it's not possible (and it's pretty useless anyway) to run shards in one Redis instance using different Redis DB numbers.")),(0,o.kt)("p",null,"When sharding enabled Centrifugo will spread channels and history/presence keys over configured Redis instances using a consistent hashing algorithm. At moment we use Jump consistent hash algorithm (see ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1406.2294.pdf"},"paper")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dgryski/go-jump"},"implementation"),")."),(0,o.kt)("h3",{id:"redis-cluster"},"Redis cluster"),(0,o.kt)("p",null,"Running Centrifugo with Redis cluster is simple and can be achieved using ",(0,o.kt)("inlineCode",{parentName:"p"},"redis_cluster_address")," option. This is an array of strings. Each element of the array is a comma-separated Redis cluster seed node. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "redis_cluster_address": [\n        "localhost:30001,localhost:30002,localhost:30003"\n    ]\n}\n')),(0,o.kt)("p",null,"You don't need to list all Redis cluster nodes in config \u2013 only several working nodes are enough to start."),(0,o.kt)("p",null,"To set the same over environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'CENTRIFUGO_REDIS_CLUSTER_ADDRESS="localhost:30001" CENTRIFUGO_ENGINE=redis ./centrifugo\n')),(0,o.kt)("p",null,"If you need to shard data between several Redis clusters then simply add one more string with seed nodes of another cluster to this array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "redis_cluster_address": [\n        "localhost:30001,localhost:30002,localhost:30003",\n        "localhost:30101,localhost:30102,localhost:30103"\n    ]\n}\n')),(0,o.kt)("p",null,"Sharding between different Redis clusters can make sense due to the fact how PUB/SUB works in the Redis cluster. It does not scale linearly when adding nodes as all PUB/SUB messages got copied to every cluster node. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/antirez/redis/issues/2672"},"this discussion")," for more information on topic. To spread data between different Redis clusters Centrifugo uses the same consistent hashing algorithm described above (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"Jump"),")."),(0,o.kt)("p",null,"To reproduce the same over environment variable use ",(0,o.kt)("inlineCode",{parentName:"p"},"space")," to separate different clusters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'CENTRIFUGO_REDIS_CLUSTER_ADDRESS="localhost:30001,localhost:30002 localhost:30101,localhost:30102" CENTRIFUGO_ENGINE=redis ./centrifugo\n')),(0,o.kt)("h2",{id:"keydb-engine"},"KeyDB Engine"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EXPERIMENTAL")),(0,o.kt)("p",null,"Centrifugo Redis engine seamlessly works with ",(0,o.kt)("a",{parentName:"p",href:"https://keydb.dev/"},"KeyDB"),". KeyDB server is compatible with Redis and provides several additional features beyond. "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We can't give any promises about compatibility with KeyDB in the future Centrifugo releases - while KeyDB is fully compatible with Redis things should work just fine. That's why we consider this as ",(0,o.kt)("strong",{parentName:"p"},"EXPERIMENTAL")," feature.")),(0,o.kt)("p",null,"Use KeyDB instead of Redis only if you are sure you need it. Nothing stops you from running several Redis instances per each core you have, configure sharding, and obtain even better performance than KeyDB can provide (due to lack of synchronization between threads in Redis)."),(0,o.kt)("p",null,"To run Centrifugo with KeyDB all you need to do is use ",(0,o.kt)("inlineCode",{parentName:"p"},"redis")," engine but run the KeyDB server instead of Redis."),(0,o.kt)("h2",{id:"tarantool-engine"},"Tarantool engine"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EXPERIMENTAL")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.tarantool.io"},"Tarantool")," is a fast and flexible in-memory storage with different persistence/replication schemes and LuaJIT for writing custom logic on the Tarantool side. It allows implementing Centrifugo engine with unique characteristics."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"EXPERIMENTAL")," status of Tarantool integration means that we are still going to improve it and there could be breaking changes as integration evolves.")),(0,o.kt)("p",null,"There are many ways to operate Tarantool in production and it's hard to distribute Centrifugo Tarantool engine in a way that suits everyone. Centrifugo tries to fit generic case by providing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/tarantool-centrifuge"},"centrifugal/tarantool-centrifuge")," module and by providing ready-to-use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/rotor"},"centrifugal/rotor")," project based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/tarantool-centrifuge"},"centrifugal/tarantool-centrifuge")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tarantool/cartridge"},"Tarantool Cartridge"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To be honest we bet on the community help to push this integration further. Tarantool provides an incredible performance boost for presence and history operations (up to 5x more RPS compared to the Redis Engine) and a pretty fast PUB/SUB (comparable to what Redis Engine provides). Let's see what we can build together.")),(0,o.kt)("p",null,"There are several supported Tarantool topologies to which Centrifugo can connect:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One standalone Tarantool instance"),(0,o.kt)("li",{parentName:"ul"},"Many standalone Tarantool instances and consistently shard data between them"),(0,o.kt)("li",{parentName:"ul"},"Tarantool running in Cartridge"),(0,o.kt)("li",{parentName:"ul"},"Tarantool with replica and automatic failover in Cartridge"),(0,o.kt)("li",{parentName:"ul"},"Many Tarantool instances (or leader-follower setup) in Cartridge with consistent client-side sharding between them"),(0,o.kt)("li",{parentName:"ul"},"Tarantool with synchronous replication (Raft-based, Tarantool >= 2.7)")),(0,o.kt)("p",null,"After running Tarantool you can point Centrifugo to it (and of course scale Centrifugo nodes):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "tarantool",\n    "tarantool_address": "127.0.0.1:3301"\n}\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/rotor"},"centrifugal/rotor")," repo for ready-to-use engine based on Tarantool Cartridge framework."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/tarantool-centrifuge"},"centrifugal/tarantool-centrifuge")," repo for examples on how to run engine with Standalone single Tarantool instance or with Raft-based synchronous replication."),(0,o.kt)("h3",{id:"tarantool-engine-options"},"Tarantool engine options"),(0,o.kt)("h4",{id:"tarantool_address"},"tarantool_address"),(0,o.kt)("p",null,"String or array of strings. Default ",(0,o.kt)("inlineCode",{parentName:"p"},"tcp://127.0.0.1:3301"),"."),(0,o.kt)("p",null,"Connection address to Tarantool."),(0,o.kt)("h4",{id:"tarantool_mode"},"tarantool_mode"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},"standalone")),(0,o.kt)("p",null,"A mode how to connect to Tarantool. Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"standalone")," which connects to a single Tarantool instance address. Possible values are: ",(0,o.kt)("inlineCode",{parentName:"p"},"leader-follower")," (connects to a setup with Tarantool master and async replicas) and ",(0,o.kt)("inlineCode",{parentName:"p"},"leader-follower-raft")," (connects to a Tarantool with synchronous Raft-based replication)."),(0,o.kt)("p",null,"All modes support client-side consistent sharding (similar to what Redis engine provides)."),(0,o.kt)("h4",{id:"tarantool_user"},"tarantool_user"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),". Allows setting a user."),(0,o.kt)("h4",{id:"tarantool_password"},"tarantool_password"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),". Allows setting a password."),(0,o.kt)("h4",{id:"history_meta_ttl-2"},"history_meta_ttl"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"Duration"),", default ",(0,o.kt)("inlineCode",{parentName:"p"},"2160h"),"."),(0,o.kt)("p",null,"Same option as for Memory engine and Redis engine also applies to Tarantool case."),(0,o.kt)("h2",{id:"nats-broker"},"Nats broker"),(0,o.kt)("p",null,"It's possible to scale with ",(0,o.kt)("a",{parentName:"p",href:"https://nats.io/"},"Nats")," PUB/SUB server. Keep in mind, that Nats is called a ",(0,o.kt)("strong",{parentName:"p"},"broker")," here, ",(0,o.kt)("strong",{parentName:"p"},"not an Engine")," \u2013 Nats integration only implements PUB/SUB part of Engine, so carefully read limitations below."),(0,o.kt)("p",null,"Limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nats integration works only for unreliable at most once PUB/SUB. This means that history, presence, and message recovery Centrifugo features won't be available."),(0,o.kt)("li",{parentName:"ul"},"Nats wildcard channel subscriptions with symbols ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," and ",(0,o.kt)("inlineCode",{parentName:"li"},">")," not supported.")),(0,o.kt)("p",null,"First start Nats server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ nats-server\n[3569] 2020/07/08 20:28:44.324269 [INF] Starting nats-server version 2.1.7\n[3569] 2020/07/08 20:28:44.324400 [INF] Git commit [not set]\n[3569] 2020/07/08 20:28:44.325600 [INF] Listening for client connections on 0.0.0.0:4222\n[3569] 2020/07/08 20:28:44.325612 [INF] Server id is NDAM7GEHUXAKS5SGMA3QE6ZSO4IQUJP6EL3G2E2LJYREVMAMIOBE7JT4\n[3569] 2020/07/08 20:28:44.325617 [INF] Server is ready\n")),(0,o.kt)("p",null,"Then start Centrifugo with ",(0,o.kt)("inlineCode",{parentName:"p"},"broker")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"centrifugo --broker=nats --config=config.json\n")),(0,o.kt)("p",null,"And one more Centrifugo on another port (of course in real life you will start another Centrifugo on another machine):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"centrifugo --broker=nats --config=config.json --port=8001\n")),(0,o.kt)("p",null,"Now you can scale connections over Centrifugo instances, instances will be connected over Nats server."),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("h4",{id:"nats_url"},"nats_url"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},"nats://127.0.0.1:4222"),"."),(0,o.kt)("p",null,"Connection url in format ",(0,o.kt)("inlineCode",{parentName:"p"},"nats://derek:pass@localhost:4222"),"."),(0,o.kt)("h4",{id:"nats_prefix"},"nats_prefix"),(0,o.kt)("p",null,"String, default ",(0,o.kt)("inlineCode",{parentName:"p"},"centrifugo"),"."),(0,o.kt)("p",null,"Prefix for channels used by Centrifugo inside Nats."),(0,o.kt)("h4",{id:"nats_dial_timeout"},"nats_dial_timeout"),(0,o.kt)("p",null,"Duration, default ",(0,o.kt)("inlineCode",{parentName:"p"},"1s"),"."),(0,o.kt)("p",null,"Timeout for dialing with Nats."),(0,o.kt)("h4",{id:"nats_write_timeout"},"nats_write_timeout"),(0,o.kt)("p",null,"Duration, default ",(0,o.kt)("inlineCode",{parentName:"p"},"1s"),"."),(0,o.kt)("p",null,"Write (and flush) timeout for a connection to Nats."))}m.isMDXComponent=!0}}]);