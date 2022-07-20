"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6877],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?i.createElement(f,a(a({ref:n},u),{},{components:t})):i.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2274:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=t(3117),r=t(102),o=(t(7294),t(3905)),a=["components"],s={id:"analytics",title:"Analytics with ClickHouse"},l=void 0,c={unversionedId:"pro/analytics",id:"version-3/pro/analytics",title:"Analytics with ClickHouse",description:"This feature allows exporting information about connections, subscriptions and client operations to ClickHouse thus providing an integration with a real-time (with seconds delay) analytics storage. ClickHouse is super fast and simple to operate with, and it allows effective data keeping for a window of time.",source:"@site/versioned_docs/version-3/pro/analytics.md",sourceDirName:"pro",slug:"/pro/analytics",permalink:"/docs/3/pro/analytics",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/pro/analytics.md",tags:[],version:"3",frontMatter:{id:"analytics",title:"Analytics with ClickHouse"},sidebar:"Pro",previous:{title:"User and channel tracing",permalink:"/docs/3/pro/tracing"},next:{title:"User status",permalink:"/docs/3/pro/user_status"}},u={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Connections table",id:"connections-table",level:2},{value:"Operations table",id:"operations-table",level:2},{value:"Query examples",id:"query-examples",level:2},{value:"Development",id:"development",level:2},{value:"How export works",id:"how-export-works",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This feature allows exporting information about connections, subscriptions and client operations to ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.tech/"},"ClickHouse")," thus providing an integration with a real-time (with seconds delay) analytics storage. ClickHouse is super fast and simple to operate with, and it allows effective data keeping for a window of time.  "),(0,o.kt)("p",null,"This unlocks a great observability and possibility to perform various analytics queries for better user behavior understanding, check application correctness, building trends, reports and so on."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"To enable integration with ClickHouse add the following section to a configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "clickhouse_analytics": {\n        "enabled": true,\n        "clickhouse_dsn": [\n            "tcp://127.0.0.1:9000",\n            "tcp://127.0.0.1:9001",\n            "tcp://127.0.0.1:9002",\n            "tcp://127.0.0.1:9003"\n        ],\n        "clickhouse_database": "centrifugo",\n        "clickhouse_cluster": "centrifugo_cluster",\n        "export_connections": true,\n        "export_operations": true,\n        "export_http_headers": [\n            "User-Agent",\n            "Origin",\n            "X-Real-Ip",\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"All ClickHouse analytics options scoped to ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse_analytics")," section of configuration."),(0,o.kt)("p",null,"Toggle this feature using ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," boolean option."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"While we have a nested configuration here it's still possible to use environment variables to set options. For example, use ",(0,o.kt)("inlineCode",{parentName:"p"},"CENTRIFUGO_CLICKHOUSE_ANALYTICS_ENABLED")," env var name for configure ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," option mentioned above. I.e. nesting expressed as ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," in Centrifugo.")),(0,o.kt)("p",null,"Centrifugo can export data to different ClickHouse instances, addresses of ClickHouse can be set over ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse_dsn")," option."),(0,o.kt)("p",null,"You also need to set a ClickHouse cluster name (",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse_cluster"),") and database name ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse_database"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"export_connections")," tells Centrifugo to export connection information snapshots. Information about connection will be exported once a connection established and then periodically while connection alive. See below on table structure to see which fields are available."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"export_operations")," tells Centrifugo to export individual client operation information. See below on table structure to see which fields are available."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"export_http_headers")," is a list of HTTP headers to export for connection information."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"export_grpc_metadata")," is a list of metadata keys to export for connection information for GRPC unidirectional transport."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"skip_schema_initialization")," (new in Centrifugo PRO v3.1.1) - boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". By default Centrifugo tries to initialize table schema on start (if not exists). This flag allows skipping initialization process."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"skip_ping_on_start")," (new in Centrifugo PRO v3.1.1) - boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". Centrifugo pings Clickhouse servers by default on start, if any of servers is unavailable \u2013 Centrifugo fails to start. This option allow skipping this check thus Centrifugo is able to start even if Clickhouse cluster not working correctly."),(0,o.kt)("h2",{id:"connections-table"},"Connections table"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE centrifugo.connections;\n\n\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE centrifugo.connections\n(\n    `client` FixedString(36),\n    `user` String,\n    `name` String,\n    `version` String,\n    `transport` String,\n    `channels` Array(String),\n    `headers.key` Array(String),\n    `headers.value` Array(String),\n    `metadata.key` Array(String),\n    `metadata.value` Array(String),\n    `time` DateTime\n)\nENGINE = ReplicatedMergeTree('/clickhouse/tables/{cluster}/{shard}/connections', '{replica}')\nPARTITION BY toYYYYMMDD(time)\nORDER BY time\nTTL time + toIntervalDay(1)\nSETTINGS index_granularity = 8192 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"And distributed one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE centrifugo.connections_distributed;\n\n\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE centrifugo.connections_distributed\n(\n    `client` FixedString(36),\n    `user` String,\n    `name` String,\n    `version` String,\n    `transport` String,\n    `channels` Array(String),\n    `headers.key` Array(String),\n    `headers.value` Array(String),\n    `metadata.key` Array(String),\n    `metadata.value` Array(String),\n    `time` DateTime\n)\nENGINE = Distributed('centrifugo_cluster', 'centrifugo', 'connections', murmurHash3_64(client)) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"operations-table"},"Operations table"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE centrifugo.operations;\n\n\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE centrifugo.operations\n(\n    `client` FixedString(36),\n    `user` String,\n    `op` String,\n    `channel` String,\n    `method` String,\n    `error` UInt32,\n    `disconnect` UInt32,\n    `duration` UInt64,\n    `time` DateTime\n)\nENGINE = ReplicatedMergeTree('/clickhouse/tables/{cluster}/{shard}/operations', '{replica}')\nPARTITION BY toYYYYMMDD(time)\nORDER BY time\nTTL time + toIntervalDay(1)\nSETTINGS index_granularity = 8192 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"And distributed one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE centrifugo.operations_distributed;\n\n\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE centrifugo.operations_distributed\n(\n    `client` FixedString(36),\n    `user` String,\n    `op` String,\n    `channel` String,\n    `method` String,\n    `error` UInt32,\n    `disconnect` UInt32,\n    `duration` UInt64,\n    `time` DateTime\n)\nENGINE = Distributed('centrifugo_cluster', 'centrifugo', 'operations', murmurHash3_64(client)) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"query-examples"},"Query examples"),(0,o.kt)("p",null,"Show unique users which were connected:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT user\nFROM centrifugo.connections_distributed;\n\n\u250c\u2500user\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 user_1   \u2502\n\u2502 user_2   \u2502\n\u2502 user_3   \u2502\n\u2502 user_4   \u2502\n\u2502 user_5   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Show total number of publication attempts which were throttled by Centrifugo (received ",(0,o.kt)("inlineCode",{parentName:"p"},"Too many requests")," error with code ",(0,o.kt)("inlineCode",{parentName:"p"},"111"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*)\nFROM centrifugo.operations_distributed\nWHERE (error = 111) AND (op = 'publish');\n\n\u250c\u2500count()\u2500\u2510\n\u2502    4502 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"The same for a specific user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*)\nFROM centrifugo.operations_distributed\nWHERE (error = 111) AND (op = 'publish') AND (user = 'user_200');\n\n\u250c\u2500count()\u2500\u2510\n\u2502    1214 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Show number of unique users subscribed to a specific channel in last 5 minutes (this is approximate since connections table contain periodic snapshot entries, clients could subscribe/unsubscribe in between snapshots \u2013 this is reflected in operations table):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(Distinct(user))\nFROM centrifugo.connections_distributed\nWHERE arrayExists(x -> (x = 'chat:index'), channels) AND (time >= (now() - toIntervalMinute(5)));\n\n\u250c\u2500uniqExact(user)\u2500\u2510\n\u2502             101 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Show top 10 users which called ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," operation during last one minute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    COUNT(op) AS num_ops,\n    user\nFROM centrifugo.operations_distributed\nWHERE (op = 'publish') AND (time >= (now() - toIntervalMinute(1)))\nGROUP BY user\nORDER BY num_ops DESC\nLIMIT 10;\n\n\u250c\u2500num_ops\u2500\u252c\u2500user\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      56 \u2502 user_200 \u2502\n\u2502      11 \u2502 user_75  \u2502\n\u2502       6 \u2502 user_87  \u2502\n\u2502       6 \u2502 user_65  \u2502\n\u2502       6 \u2502 user_39  \u2502\n\u2502       5 \u2502 user_28  \u2502\n\u2502       5 \u2502 user_63  \u2502\n\u2502       5 \u2502 user_89  \u2502\n\u2502       3 \u2502 user_32  \u2502\n\u2502       3 \u2502 user_52  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"The recommended way to run ClickHouse in production is with cluster. But during development you may want to run Centrifugo with single instance ClickHouse."),(0,o.kt)("p",null,"To do this set only one ClickHouse dsn and do not set cluster name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "clickhouse_analytics": {\n        "enabled": true,\n        "clickhouse_dsn": [\n            "tcp://127.0.0.1:9000"\n        ],\n        "clickhouse_database": "centrifugo",\n        "clickhouse_cluster": "",\n        "export_connections": true,\n        "export_operations": true,\n        "export_http_headers": [\n            "Origin",\n            "User-Agent"\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"Run ClickHouse locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm -v /tmp/clickhouse:/var/lib/clickhouse -p 9000:9000 --name click yandex/clickhouse-server\n")),(0,o.kt)("p",null,"Run ClickHouse client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm --link click:clickhouse-server yandex/clickhouse-client --host clickhouse-server\n")),(0,o.kt)("p",null,"Issue queries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":) SELECT * FROM centrifugo.operations\n\n\u250c\u2500client\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500user\u2500\u252c\u2500op\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500channel\u2500\u2500\u2500\u2500\u2500\u252c\u2500method\u2500\u252c\u2500error\u2500\u252c\u2500disconnect\u2500\u252c\u2500duration\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500time\u2500\u2510\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 connecting  \u2502             \u2502        \u2502     0 \u2502          0 \u2502   217894 \u2502 2021-07-31 08:15:09 \u2502\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 connect     \u2502             \u2502        \u2502     0 \u2502          0 \u2502        0 \u2502 2021-07-31 08:15:09 \u2502\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 subscribe   \u2502 $chat:index \u2502        \u2502     0 \u2502          0 \u2502    92714 \u2502 2021-07-31 08:15:09 \u2502\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 presence    \u2502 $chat:index \u2502        \u2502     0 \u2502          0 \u2502     3539 \u2502 2021-07-31 08:15:09 \u2502\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 subscribe   \u2502 test1       \u2502        \u2502     0 \u2502          0 \u2502     2402 \u2502 2021-07-31 08:15:12 \u2502\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 subscribe   \u2502 test2       \u2502        \u2502     0 \u2502          0 \u2502      634 \u2502 2021-07-31 08:15:12 \u2502\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 subscribe   \u2502 test3       \u2502        \u2502     0 \u2502          0 \u2502      412 \u2502 2021-07-31 08:15:12 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"how-export-works"},"How export works"),(0,o.kt)("p",null,"When ClickHouse analytics enabled Centrifugo nodes start exporting events to ClickHouse. Each node  issues insert with events once in 5 seconds (flushing collected events in batches thus making insertion in ClickHouse efficient). Maximum batch size is 100k for each table at the momemt. If insert to ClickHouse failed Centrifugo retries it once and then buffers events in memory (up to 1 million entries). If ClickHouse still unavailable after collecting 1 million events then new events will be dropped until buffer has space. These limits are not configurable at the moment but just reach us out if you need to tune these values."),(0,o.kt)("p",null,"Several metrics are exposed to monitor export process health:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"centrifugo_clickhouse_analytics_flush_duration_seconds summary"),(0,o.kt)("li",{parentName:"ul"},"centrifugo_clickhouse_analytics_batch_size summary"),(0,o.kt)("li",{parentName:"ul"},"centrifugo_clickhouse_analytics_drop_count counter")))}m.isMDXComponent=!0}}]);