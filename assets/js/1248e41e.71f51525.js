"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3672],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8829:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),o=["components"],s={id:"analytics",title:"Analytics with ClickHouse"},l=void 0,c={unversionedId:"pro/analytics",id:"pro/analytics",title:"Analytics with ClickHouse",description:"This feature allows exporting information about connections, subscriptions and client operations to ClickHouse thus providing an integration with a real-time (with seconds delay) analytics storage. ClickHouse is super fast and simple to operate with, and it allows effective data keeping for a window of time.",source:"@site/docs/pro/analytics.md",sourceDirName:"pro",slug:"/pro/analytics",permalink:"/docs/next/pro/analytics",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/analytics.md",tags:[],version:"current",frontMatter:{id:"analytics",title:"Analytics with ClickHouse"},sidebar:"Pro",previous:{title:"User and channel tracing",permalink:"/docs/next/pro/tracing"},next:{title:"User status",permalink:"/docs/next/pro/user_status"}},u={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Connections table",id:"connections-table",level:2},{value:"Operations table",id:"operations-table",level:2},{value:"Query examples",id:"query-examples",level:2},{value:"Development",id:"development",level:2},{value:"How export works",id:"how-export-works",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This feature allows exporting information about connections, subscriptions and client operations to ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.tech/"},"ClickHouse")," thus providing an integration with a real-time (with seconds delay) analytics storage. ClickHouse is super fast and simple to operate with, and it allows effective data keeping for a window of time.  "),(0,a.kt)("p",null,"This unlocks a great observability and possibility to perform various analytics queries for better user behavior understanding, check application correctness, building trends, reports and so on."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To enable integration with ClickHouse add the following section to a configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "clickhouse_analytics": {\n        "enabled": true,\n        "clickhouse_dsn": [\n            "tcp://127.0.0.1:9000",\n            "tcp://127.0.0.1:9001",\n            "tcp://127.0.0.1:9002",\n            "tcp://127.0.0.1:9003"\n        ],\n        "clickhouse_database": "centrifugo",\n        "clickhouse_cluster": "centrifugo_cluster",\n        "export_connections": true,\n        "export_operations": true,\n        "export_http_headers": [\n            "User-Agent",\n            "Origin",\n            "X-Real-Ip",\n        ]\n    }\n}\n')),(0,a.kt)("p",null,"All ClickHouse analytics options scoped to ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse_analytics")," section of configuration."),(0,a.kt)("p",null,"Toggle this feature using ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled")," boolean option."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"While we have a nested configuration here it's still possible to use environment variables to set options. For example, use ",(0,a.kt)("inlineCode",{parentName:"p"},"CENTRIFUGO_CLICKHOUSE_ANALYTICS_ENABLED")," env var name for configure ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled")," option mentioned above. I.e. nesting expressed as ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," in Centrifugo."))),(0,a.kt)("p",null,"Centrifugo can export data to different ClickHouse instances, addresses of ClickHouse can be set over ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse_dsn")," option."),(0,a.kt)("p",null,"You also need to set a ClickHouse cluster name (",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse_cluster"),") and database name ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse_database"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"export_connections")," tells Centrifugo to export connection information snapshots. Information about connection will be exported once a connection established and then periodically while connection alive. See below on table structure to see which fields are available."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"export_operations")," tells Centrifugo to export individual client operation information. See below on table structure to see which fields are available."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"export_http_headers")," is a list of HTTP headers to export for connection information."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"export_grpc_metadata")," is a list of metadata keys to export for connection information for GRPC unidirectional transport."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"skip_schema_initialization")," (new in Centrifugo PRO v3.1.1) - boolean, default ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". By default Centrifugo tries to initialize table schema on start (if not exists). This flag allows skipping initialization process."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"skip_ping_on_start")," (new in Centrifugo PRO v3.1.1) - boolean, default ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". Centrifugo pings Clickhouse servers by default on start, if any of servers is unavailable \u2013 Centrifugo fails to start. This option allow skipping this check thus Centrifugo is able to start even if Clickhouse cluster not working correctly."),(0,a.kt)("h2",{id:"connections-table"},"Connections table"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE centrifugo.connections;\n\n\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE centrifugo.connections\n(\n    `client` FixedString(36),\n    `user` String,\n    `name` String,\n    `version` String,\n    `transport` String,\n    `channels` Array(String),\n    `headers.key` Array(String),\n    `headers.value` Array(String),\n    `metadata.key` Array(String),\n    `metadata.value` Array(String),\n    `time` DateTime\n)\nENGINE = ReplicatedMergeTree('/clickhouse/tables/{cluster}/{shard}/connections', '{replica}')\nPARTITION BY toYYYYMMDD(time)\nORDER BY time\nTTL time + toIntervalDay(1)\nSETTINGS index_granularity = 8192 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"And distributed one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE centrifugo.connections_distributed;\n\n\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE centrifugo.connections_distributed\n(\n    `client` FixedString(36),\n    `user` String,\n    `name` String,\n    `version` String,\n    `transport` String,\n    `channels` Array(String),\n    `headers.key` Array(String),\n    `headers.value` Array(String),\n    `metadata.key` Array(String),\n    `metadata.value` Array(String),\n    `time` DateTime\n)\nENGINE = Distributed('centrifugo_cluster', 'centrifugo', 'connections', murmurHash3_64(client)) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"operations-table"},"Operations table"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE centrifugo.operations;\n\n\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE centrifugo.operations\n(\n    `client` FixedString(36),\n    `user` String,\n    `op` String,\n    `channel` String,\n    `method` String,\n    `error` UInt32,\n    `disconnect` UInt32,\n    `duration` UInt64,\n    `time` DateTime\n)\nENGINE = ReplicatedMergeTree('/clickhouse/tables/{cluster}/{shard}/operations', '{replica}')\nPARTITION BY toYYYYMMDD(time)\nORDER BY time\nTTL time + toIntervalDay(1)\nSETTINGS index_granularity = 8192 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"And distributed one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE centrifugo.operations_distributed;\n\n\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE centrifugo.operations_distributed\n(\n    `client` FixedString(36),\n    `user` String,\n    `op` String,\n    `channel` String,\n    `method` String,\n    `error` UInt32,\n    `disconnect` UInt32,\n    `duration` UInt64,\n    `time` DateTime\n)\nENGINE = Distributed('centrifugo_cluster', 'centrifugo', 'operations', murmurHash3_64(client)) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"query-examples"},"Query examples"),(0,a.kt)("p",null,"Show unique users which were connected:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT user\nFROM centrifugo.connections_distributed;\n\n\u250c\u2500user\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 user_1   \u2502\n\u2502 user_2   \u2502\n\u2502 user_3   \u2502\n\u2502 user_4   \u2502\n\u2502 user_5   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Show total number of publication attempts which were throttled by Centrifugo (received ",(0,a.kt)("inlineCode",{parentName:"p"},"Too many requests")," error with code ",(0,a.kt)("inlineCode",{parentName:"p"},"111"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*)\nFROM centrifugo.operations_distributed\nWHERE (error = 111) AND (op = 'publish');\n\n\u250c\u2500count()\u2500\u2510\n\u2502    4502 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"The same for a specific user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*)\nFROM centrifugo.operations_distributed\nWHERE (error = 111) AND (op = 'publish') AND (user = 'user_200');\n\n\u250c\u2500count()\u2500\u2510\n\u2502    1214 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Show number of unique users subscribed to a specific channel in last 5 minutes (this is approximate since connections table contain periodic snapshot entries, clients could subscribe/unsubscribe in between snapshots \u2013 this is reflected in operations table):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(Distinct(user))\nFROM centrifugo.connections_distributed\nWHERE arrayExists(x -> (x = 'chat:index'), channels) AND (time >= (now() - toIntervalMinute(5)));\n\n\u250c\u2500uniqExact(user)\u2500\u2510\n\u2502             101 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Show top 10 users which called ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," operation during last one minute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    COUNT(op) AS num_ops,\n    user\nFROM centrifugo.operations_distributed\nWHERE (op = 'publish') AND (time >= (now() - toIntervalMinute(1)))\nGROUP BY user\nORDER BY num_ops DESC\nLIMIT 10;\n\n\u250c\u2500num_ops\u2500\u252c\u2500user\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      56 \u2502 user_200 \u2502\n\u2502      11 \u2502 user_75  \u2502\n\u2502       6 \u2502 user_87  \u2502\n\u2502       6 \u2502 user_65  \u2502\n\u2502       6 \u2502 user_39  \u2502\n\u2502       5 \u2502 user_28  \u2502\n\u2502       5 \u2502 user_63  \u2502\n\u2502       5 \u2502 user_89  \u2502\n\u2502       3 \u2502 user_32  \u2502\n\u2502       3 \u2502 user_52  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"The recommended way to run ClickHouse in production is with cluster. But during development you may want to run Centrifugo with single instance ClickHouse."),(0,a.kt)("p",null,"To do this set only one ClickHouse dsn and do not set cluster name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "clickhouse_analytics": {\n        "enabled": true,\n        "clickhouse_dsn": [\n            "tcp://127.0.0.1:9000"\n        ],\n        "clickhouse_database": "centrifugo",\n        "clickhouse_cluster": "",\n        "export_connections": true,\n        "export_operations": true,\n        "export_http_headers": [\n            "Origin",\n            "User-Agent"\n        ]\n    }\n}\n')),(0,a.kt)("p",null,"Run ClickHouse locally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm -v /tmp/clickhouse:/var/lib/clickhouse -p 9000:9000 --name click yandex/clickhouse-server\n")),(0,a.kt)("p",null,"Run ClickHouse client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm --link click:clickhouse-server yandex/clickhouse-client --host clickhouse-server\n")),(0,a.kt)("p",null,"Issue queries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":) SELECT * FROM centrifugo.operations\n\n\u250c\u2500client\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500user\u2500\u252c\u2500op\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500channel\u2500\u2500\u2500\u2500\u2500\u252c\u2500method\u2500\u252c\u2500error\u2500\u252c\u2500disconnect\u2500\u252c\u2500duration\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500time\u2500\u2510\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 connecting  \u2502             \u2502        \u2502     0 \u2502          0 \u2502   217894 \u2502 2021-07-31 08:15:09 \u2502\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 connect     \u2502             \u2502        \u2502     0 \u2502          0 \u2502        0 \u2502 2021-07-31 08:15:09 \u2502\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 subscribe   \u2502 $chat:index \u2502        \u2502     0 \u2502          0 \u2502    92714 \u2502 2021-07-31 08:15:09 \u2502\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 presence    \u2502 $chat:index \u2502        \u2502     0 \u2502          0 \u2502     3539 \u2502 2021-07-31 08:15:09 \u2502\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 subscribe   \u2502 test1       \u2502        \u2502     0 \u2502          0 \u2502     2402 \u2502 2021-07-31 08:15:12 \u2502\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 subscribe   \u2502 test2       \u2502        \u2502     0 \u2502          0 \u2502      634 \u2502 2021-07-31 08:15:12 \u2502\n\u2502 bd55ae3a-dd44-47cb-a4cc-c41f8e33803b \u2502 2694 \u2502 subscribe   \u2502 test3       \u2502        \u2502     0 \u2502          0 \u2502      412 \u2502 2021-07-31 08:15:12 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"how-export-works"},"How export works"),(0,a.kt)("p",null,"When ClickHouse analytics enabled Centrifugo nodes start exporting events to ClickHouse. Each node  issues insert with events once in 5 seconds (flushing collected events in batches thus making insertion in ClickHouse efficient). Maximum batch size is 100k for each table at the momemt. If insert to ClickHouse failed Centrifugo retries it once and then buffers events in memory (up to 1 million entries). If ClickHouse still unavailable after collecting 1 million events then new events will be dropped until buffer has space. These limits are not configurable at the moment but just reach us out if you need to tune these values."),(0,a.kt)("p",null,"Several metrics are exposed to monitor export process health:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"centrifugo_clickhouse_analytics_flush_duration_seconds summary"),(0,a.kt)("li",{parentName:"ul"},"centrifugo_clickhouse_analytics_batch_size summary"),(0,a.kt)("li",{parentName:"ul"},"centrifugo_clickhouse_analytics_drop_count counter")))}m.isMDXComponent=!0}}]);