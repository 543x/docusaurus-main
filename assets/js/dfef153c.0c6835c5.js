"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15237],{61132:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(24246),n=(r(27378),r(40624));const o={tabItem:"tabItem_pnkT"};function s({children:e,hidden:t,className:r}){return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,r),hidden:t,children:e})}},97555:(e,t,r)=>{r.d(t,{Z:()=>I});var a=r(24246),n=r(27378),o=r(40624),s=r(75527),l=r(3620),i=r(44479),c=r(62821),u=r(52196),d=r(53589);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function m(e){var t,r;return null!==(r=null===(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function b(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return m(e).map((({props:{value:e,label:t,attributes:r,default:a}})=>({value:e,label:t,attributes:r,default:a})))}(r);return function(e){const t=(0,u.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f({value:e,tabValues:t}){return t.some((t=>t.value===e))}function g({queryString:e=!1,groupId:t}){const r=(0,l.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,c._X)(a),s=(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace(p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){h(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[a,r]);return[o,s]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=b(e),[s,l]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const a=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=g({queryString:r,groupId:a}),[h,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,d.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),m=(()=>{const e=null!=c?c:h;return f({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,o]),tabValues:o}}var y=r(29088);const j={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){w(e,t,r[t])}))}return e}function x(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function P({className:e,block:t,selectedValue:r,selectValue:n,tabValues:l}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,a=i.indexOf(t),o=l[a].value;o!==r&&(c(t),n(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;var r;t=null!==(r=i[a])&&void 0!==r?r:i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;var a;t=null!==(a=i[r])&&void 0!==a?a:i[i.length-1];break}}null==t||t.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},e),children:l.map((({value:e,label:t,attributes:n})=>(0,a.jsx)("li",x(O({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>i.push(e),onKeyDown:d,onClick:u},n),{className:(0,o.Z)("tabs__item",j.tabItem,null==n?void 0:n.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e)))})}function k({lazy:e,children:t,selectedValue:r}){const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function S(e){const t=v(e);return(0,a.jsxs)("div",{className:(0,o.Z)("tabs-container",j.tabList),children:[(0,a.jsx)(P,O({},t,e)),(0,a.jsx)(k,O({},t,e))]})}function I(e){const t=(0,y.Z)();return(0,a.jsx)(S,x(O({},e),{children:m(e.children)}),String(t))}},65050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=r(24246),n=r(71670),o=r(97555),s=r(61132);const l={sidebar_position:4,slug:"/api/themes/@docusaurus/theme-search-algolia"},i="\ud83d\udce6 theme-search-algolia",c={id:"api/themes/theme-search-algolia",title:"\ud83d\udce6 theme-search-algolia",description:"This theme provides a @theme/SearchBar component that integrates with Algolia DocSearch easily. Combined with @docusaurus/theme-classic, it provides a very easy search integration. You can read more on search documentation.",source:"@site/docs/api/themes/theme-search-algolia.mdx",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-search-algolia",permalink:"/docs/api/themes/@docusaurus/theme-search-algolia",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-search-algolia.mdx",tags:[],version:"current",lastUpdatedBy:"543x",lastUpdatedAt:17234562e5,sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/api/themes/@docusaurus/theme-search-algolia"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-live-codeblock",permalink:"/docs/api/themes/@docusaurus/theme-live-codeblock"},next:{title:"\ud83d\udce6 theme-mermaid",permalink:"/docs/api/themes/@docusaurus/theme-mermaid"}},u={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"-theme-search-algolia",children:"\ud83d\udce6 theme-search-algolia"})}),"\n",(0,a.jsxs)(t.p,{children:["This theme provides a ",(0,a.jsx)(t.code,{children:"@theme/SearchBar"})," component that integrates with Algolia DocSearch easily. Combined with ",(0,a.jsx)(t.code,{children:"@docusaurus/theme-classic"}),", it provides a very easy search integration. You can read more on ",(0,a.jsx)(t.a,{href:"/docs/search",children:"search"})," documentation."]}),"\n",(0,a.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(s.Z,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-search-algolia\n"})})}),(0,a.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/theme-search-algolia\n"})})}),(0,a.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-search-algolia\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["This theme also adds search page available at ",(0,a.jsx)(t.code,{children:"/search"})," (as swizzlable ",(0,a.jsx)(t.code,{children:"SearchPage"})," component) path with OpenSearch support. You can change this default path via ",(0,a.jsx)(t.code,{children:"themeConfig.algolia.searchPagePath"}),". Use ",(0,a.jsx)(t.code,{children:"false"})," to disable search page."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["If you have installed ",(0,a.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install it as a dependency."]})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},71670:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>s});var a=r(27378);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);