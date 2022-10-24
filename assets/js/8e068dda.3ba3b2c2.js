"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const i={id:"install_and_run",title:"Install and run PRO version"},o=void 0,l={unversionedId:"pro/install_and_run",id:"version-3/pro/install_and_run",title:"Install and run PRO version",description:"Centrifugo PRO is distributed under commercial license which is different from OSS version. By downloading Centrifugo PRO you automatically accept license terms.",source:"@site/versioned_docs/version-3/pro/install_and_run.md",sourceDirName:"pro",slug:"/pro/install_and_run",permalink:"/docs/3/pro/install_and_run",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/pro/install_and_run.md",tags:[],version:"3",frontMatter:{id:"install_and_run",title:"Install and run PRO version"},sidebar:"Pro",previous:{title:"Centrifugo PRO overview",permalink:"/docs/3/pro/overview"},next:{title:"User and channel tracing",permalink:"/docs/3/pro/tracing"}},s={},c=[{value:"Binary release",id:"binary-release",level:3},{value:"Docker image",id:"docker-image",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Debian and Ubuntu",id:"debian-and-ubuntu",level:3},{value:"Centos",id:"centos",level:3},{value:"Setting PRO license key",id:"setting-pro-license-key",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Centrifugo PRO is distributed under ",(0,a.kt)("a",{parentName:"p",href:"/pro_license"},"commercial license")," which is different from OSS version. By downloading Centrifugo PRO you automatically accept license terms.")),(0,a.kt)("h3",{id:"binary-release"},"Binary release"),(0,a.kt)("p",null,"Centrifugo PRO binary releases ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifugo-pro/releases"},"available on Github"),". Note that we use a separate repo for PRO releases. Download latest release for your operating system, unpack it and run (see how to set license key ",(0,a.kt)("a",{parentName:"p",href:"#setting-pro-license-key"},"below"),")."),(0,a.kt)("h3",{id:"docker-image"},"Docker image"),(0,a.kt)("p",null,"Centrifugo PRO uses a different image from OSS version \u2013 ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/centrifugo/centrifugo-pro"},"centrifugo/centrifugo-pro"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run --ulimit nofile=65536:65536 -v /host/dir/with/config/file:/centrifugo -p 8000:8000 centrifugo/centrifugo-pro:v3.2.2 centrifugo -c config.json\n")),(0,a.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"You can use our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/helm-charts"},"official Helm chart")," but make sure you changed Docker image to use PRO version and point to the correct image tag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="values.yaml"',title:'"values.yaml"'},"...\nimage:\n  registry: docker.io\n  repository: centrifugo/centrifugo-pro\n  tag: v3.2.2\n")),(0,a.kt)("h3",{id:"debian-and-ubuntu"},"Debian and Ubuntu"),(0,a.kt)("p",null,"DEB package ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifugo-pro/releases"},"available in release assets"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget https://github.com/centrifugal/centrifugo-pro/releases/download/v3.2.2/centrifugo-pro_3.2.2-0_amd64.deb\nsudo dpkg -i centrifugo-pro_3.2.2-0_amd64.deb\n")),(0,a.kt)("h3",{id:"centos"},"Centos"),(0,a.kt)("p",null,"RPM package ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifugo-pro/releases"},"available in release assets"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget https://github.com/centrifugal/centrifugo-pro/releases/download/v3.2.2/centrifugo-pro-3.2.2-0.x86_64.rpm\nsudo yum install centrifugo-pro-3.2.2-0.x86_64.rpm\n")),(0,a.kt)("h2",{id:"setting-pro-license-key"},"Setting PRO license key"),(0,a.kt)("p",null,"Centrifugo PRO inherits all features and configuration options from open-source version. The only difference is that it expects a valid license key on start to avoid sandbox mode limits."),(0,a.kt)("p",null,"Once you have installed a PRO version and have a license key you can set it in configuration over ",(0,a.kt)("inlineCode",{parentName:"p"},"license")," field, or pass over environment variables as ",(0,a.kt)("inlineCode",{parentName:"p"},"CENTRIFUGO_LICENSE"),". Like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "license": "<YOUR_LICENSE_KEY>"\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If license properly set then on Centrifugo PRO start you should see license information in logs: owner, license type and expiration date. All PRO features should be unlocked at this point. Warning about sandbox mode in logs on server start must disappear.")))}p.isMDXComponent=!0}}]);