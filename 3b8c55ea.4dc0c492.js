(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(95)),l={id:"installation",title:"Installation",sidebar_label:"Installation"},c={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"See the steps below to get started and install the Serverless Nextjs component in your NextJS project and then deploy",source:"@site/docs/installation.md",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/serverless-nextjs/serverless-next.js/documentation/docs/docs/installation.md",version:"current",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"Contributing",permalink:"/docs/contributing"},next:{title:"Custom domain name",permalink:"/docs/customdomain"}},s=[],i={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"See the steps below to get started and install the Serverless Nextjs component in your NextJS project and then deploy"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a NextJS project: ",Object(o.b)("inlineCode",{parentName:"li"},"npx create-next-app my-nextjs-app")),Object(o.b)("li",{parentName:"ol"},"(Optional) Once it is created, you can run the app locally: ",Object(o.b)("inlineCode",{parentName:"li"},"npm run dev")),Object(o.b)("li",{parentName:"ol"},"(Optional) Open ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://localhost:3000"}),"http://localhost:3000")," with your browser to see the application"),Object(o.b)("li",{parentName:"ol"},"Create a ",Object(o.b)("inlineCode",{parentName:"li"},"serverless.yml")," file at the root of your project and add your NextJS application as shown below:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'# serverless.yml\n\nmyNextApplication:\n  component: "@sls-next/serverless-component@1.19.0" # or specify latest stable or alpha version found in https://www.npmjs.com/package/@sls-next/serverless-component\n')),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"It is recommended you pin the latest stable version of serverless-next.js component. Check out the versions ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/serverless-nextjs/serverless-next.js/releases"}),"here")),Object(o.b)("li",{parentName:"ol"},"Create a ",Object(o.b)("inlineCode",{parentName:"li"},".env")," file at the root of your project to spcify AWS credentials:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"#.env\n\nAWS_ACCESS_KEY_ID=accesskey\nAWS_SECRET_ACCESS_KEY=accesskeysecret\n")),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"And simply deploy by running the command below from your project root:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ serverless\n")),Object(o.b)("p",null,"If you get an error during the deployment process, checkout the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/faq"}),"FAQ"),"."))}p.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},i),{},{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);