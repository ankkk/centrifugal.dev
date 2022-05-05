"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2413],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9703:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"installation",title:"Install Centrifugo"},u=void 0,c={unversionedId:"getting-started/installation",id:"version-3/getting-started/installation",title:"Install Centrifugo",description:"Centrifugo server is written in Go language. It's an open-source software, the source code is available on Github.",source:"@site/versioned_docs/version-3/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/getting-started/installation.md",tags:[],version:"3",frontMatter:{id:"installation",title:"Install Centrifugo"},sidebar:"Introduction",previous:{title:"Centrifugo introduction",permalink:"/docs/getting-started/introduction"},next:{title:"Quickstart tutorial",permalink:"/docs/getting-started/quickstart"}},s={},p=[{value:"Install from the binary release",id:"install-from-the-binary-release",level:2},{value:"Docker image",id:"docker-image",level:2},{value:"Docker-compose example",id:"docker-compose-example",level:2},{value:"Kubernetes Helm chart",id:"kubernetes-helm-chart",level:2},{value:"RPM and DEB packages for Linux",id:"rpm-and-deb-packages-for-linux",level:2},{value:"With brew on macOS",id:"with-brew-on-macos",level:2},{value:"Build from source",id:"build-from-source",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Centrifugo server is written in Go language. It's an open-source software, the source code is available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifugo"},"on Github"),"."),(0,i.kt)("h2",{id:"install-from-the-binary-release"},"Install from the binary release"),(0,i.kt)("p",null,"For a local development the simplest way to get Centrifugo is from binary release (i.e. single all-contained executable file)."),(0,i.kt)("p",null,"Binary releases available on Github. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifugo/releases"},"Download latest release")," for your operating system, unpack it and you are done. Centrifugo is pre-built for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux 64-bit (linux_amd64)"),(0,i.kt)("li",{parentName:"ul"},"Linux 32-bit (linux_386)"),(0,i.kt)("li",{parentName:"ul"},"Linux ARM 64-bit (linux_arm64)"),(0,i.kt)("li",{parentName:"ul"},"MacOS (darwin_amd64)"),(0,i.kt)("li",{parentName:"ul"},"MacOS on Apple Silicon (darwin_arm64)"),(0,i.kt)("li",{parentName:"ul"},"Windows (windows_amd64)"),(0,i.kt)("li",{parentName:"ul"},"FreeBSD (freebsd_amd64)"),(0,i.kt)("li",{parentName:"ul"},"ARM v6 (linux_armv6)")),(0,i.kt)("p",null,"Archives contain a single statically compiled binary ",(0,i.kt)("inlineCode",{parentName:"p"},"centrifugo")," file that is ready to run: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./centrifugo -h\n")),(0,i.kt)("p",null,"See the version of Centrifugo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./centrifugo version\n")),(0,i.kt)("p",null,"Centrifugo requires a configuration file with several secret keys. If you are new to Centrifugo then there is ",(0,i.kt)("inlineCode",{parentName:"p"},"genconfig")," command which generates a minimal configuration file to get started:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./centrifugo genconfig\n")),(0,i.kt)("p",null,"It creates a configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," with some auto-generated option values in a current directory (by default)."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It's possible to generate file in YAML or TOML format, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"./centrifugo genconfig -c config.toml")))),(0,i.kt)("p",null,"Having a configuration file you can finally run Centrifugo instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./centrifugo --config=config.json\n")),(0,i.kt)("p",null,"We will talk about a configuration in detail in the next sections."),(0,i.kt)("p",null,"You can also put or symlink ",(0,i.kt)("inlineCode",{parentName:"p"},"centrifugo")," into your ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," OS directory and run it from anywhere:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"centrifugo --config=config.json\n")),(0,i.kt)("h2",{id:"docker-image"},"Docker image"),(0,i.kt)("p",null,"Centrifugo server has a docker image ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/centrifugo/centrifugo/"},"available on Docker Hub"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker pull centrifugo/centrifugo\n")),(0,i.kt)("p",null,"Run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --ulimit nofile=65536:65536 -v /host/dir/with/config/file:/centrifugo -p 8000:8000 centrifugo/centrifugo centrifugo -c config.json\n")),(0,i.kt)("p",null,"Note that docker allows setting ",(0,i.kt)("inlineCode",{parentName:"p"},"nofile")," limits in command-line arguments which is pretty important to handle lots of simultaneous persistent connections and not run out of open file limit (each connection requires one file descriptor). See also ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/infra_tuning"},"infrastructure tuning chapter"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Pin to the exact Docker Image tag in production, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"centrifugo/centrifugo:v3.0.0"),", this will help to avoid unexpected problems during re-deploy process. "))),(0,i.kt)("h2",{id:"docker-compose-example"},"Docker-compose example"),(0,i.kt)("p",null,"Create configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token_hmac_secret_key": "my_secret",\n  "api_key": "my_api_key",\n  "admin_password": "password",\n  "admin_secret": "secret",\n  "admin": true\n}\n')),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"centrifugo:\n  container_name: centrifugo\n  image: centrifugo/centrifugo:v3\n  volumes:\n    - ./config.json:/centrifugo/config.json\n  command: centrifugo -c config.json\n  ports:\n    - 8000:8000\n  ulimits:\n    nofile:\n      soft: 65535\n      hard: 65535\n")),(0,i.kt)("p",null,"Run with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,i.kt)("h2",{id:"kubernetes-helm-chart"},"Kubernetes Helm chart"),(0,i.kt)("p",null,"See our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/helm-charts"},"official Kubernetes Helm chart"),". Follow instructions in a Centrifugo chart README to bootstrap Centrifugo inside your Kubernetes cluster."),(0,i.kt)("h2",{id:"rpm-and-deb-packages-for-linux"},"RPM and DEB packages for Linux"),(0,i.kt)("p",null,"Every time we make a new Centrifugo release we upload rpm and deb packages for popular Linux distributions on ",(0,i.kt)("a",{parentName:"p",href:"https://packagecloud.io/FZambia/centrifugo"},"packagecloud.io"),"."),(0,i.kt)("p",null,"At moment, we support versions of the following distributions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"64-bit Debian 8 Jessie"),(0,i.kt)("li",{parentName:"ul"},"64-bit Debian 9 Stretch"),(0,i.kt)("li",{parentName:"ul"},"64-bit Debian 10 Buster"),(0,i.kt)("li",{parentName:"ul"},"64-bit Ubuntu 16.04 Xenial"),(0,i.kt)("li",{parentName:"ul"},"64-bit Ubuntu 18.04 Bionic"),(0,i.kt)("li",{parentName:"ul"},"64-bit Ubuntu 20.04 Focal Fossa"),(0,i.kt)("li",{parentName:"ul"},"64-bit Centos 7"),(0,i.kt)("li",{parentName:"ul"},"64-bit Centos 8")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://packagecloud.io/FZambia/centrifugo"},"full list of available packages")," and ",(0,i.kt)("a",{parentName:"p",href:"https://packagecloud.io/FZambia/centrifugo/install"},"installation instructions"),"."),(0,i.kt)("p",null,"Centrifugo also works on 32-bit architecture, but we don't support packaging for it since 64-bit is more convenient for servers today."),(0,i.kt)("h2",{id:"with-brew-on-macos"},"With brew on macOS"),(0,i.kt)("p",null,"If you are developing on macOS then you can install Centrifugo over ",(0,i.kt)("inlineCode",{parentName:"p"},"brew"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brew tap centrifugal/centrifugo\nbrew install centrifugo\n")),(0,i.kt)("h2",{id:"build-from-source"},"Build from source"),(0,i.kt)("p",null,"You need Go language installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/centrifugal/centrifugo.git\ncd centrifugo\ngo build\n./centrifugo\n")))}d.isMDXComponent=!0}}]);