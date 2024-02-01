"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(u,".").concat(d)]||h[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={title:"useGo"},u=void 0,l={unversionedId:"routing/hooks/use-go/index",id:"routing/hooks/use-go/index",title:"useGo",description:"useGo is a hook that leverages the go method of the routerProvider to perform navigation operations.",source:"@site/docs/routing/hooks/use-go/index.md",sourceDirName:"routing/hooks/use-go",slug:"/routing/hooks/use-go/",permalink:"/docs/routing/hooks/use-go/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/routing/hooks/use-go/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1706779193,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{title:"useGo"},sidebar:"mainSidebar",previous:{title:"useResource",permalink:"/docs/routing/hooks/use-resource/"},next:{title:"useBack",permalink:"/docs/routing/hooks/use-back/"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"With path",id:"with-path",level:3},{value:"With resource",id:"with-resource",level:3},{value:"Parameters",id:"parameters",level:2},{value:"to",id:"to",level:3},{value:"query",id:"query",level:3},{value:"type",id:"type",level:3},{value:"hash",id:"hash",level:3},{value:"options.keepQuery",id:"optionskeepquery",level:3},{value:"options.keepHash",id:"optionskeephash",level:3},{value:"Return Value",id:"return-value",level:2}],h={toc:c};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useGo")," is a hook that leverages the ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," method of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/routing/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider"))," to perform navigation operations."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"with-path"},"With path"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useGo } from "@refinedev/core";\n\nconst MyComponent = () => {\n  const go = useGo();\n\n  return (\n    <Button\n      onClick={() => {\n        go({\n          to: "/posts",\n          query: {\n            filters: [\n              {\n                field: "title",\n                operator: "contains",\n                value: "Refine",\n              },\n            ],\n          },\n          type: "push",\n        });\n      }}\n    >\n      Go Posts With Default Filters\n    </Button>\n  );\n};\n')),(0,r.kt)("h3",{id:"with-resource"},"With resource"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"to")," accepts an object with the following shape to navigate to a resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'type ToWithResource = {\n  resource: string; // resource name or identifier\n  id?: BaseKey; // required when `action` is `"edit"`, `"show"`, or `"clone"`.\n  action: "list" | "create" | "edit" | "show" | "clone"; // action name\n  meta?: Record<string, unknown>; // meta data to be used when composing the path (use if you have additional path parameters)\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useGo")," will convert the resource object into the path defined in the resources array within the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useGo } from "@refinedev/core";\n\nconst MyComponent = () => {\n    const go = useGo();\n\n    return (\n        <Button\n            onClick={() => {\n                go({\n                    to:  {\n                        resource: "posts", // resource name or identifier\n                        action: "edit",\n                        id: "1",\n                    }\n                    query: {\n                         foo: "bar",\n                    },\n                    type: "push",\n                });\n            }}\n        >\n            Go Posts With Default Filters\n        </Button>\n    );\n};\n')),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"to"},"to"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," parameter is the path you want to navigate to. If left empty, it will navigate to the current path, which is useful for updating the query parameters."),(0,r.kt)("p",null,"Also, you can pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," object to the ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," parameter. The ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," will convert the resource object to the path."),(0,r.kt)("h3",{id:"query"},"query"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," parameter is the query parameters you want to add to the path. It is an object which the ",(0,r.kt)("inlineCode",{parentName:"p"},"routerProvider")," will convert to the query string."),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," parameter is the type of navigation you want to perform. It can be one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"push"),": It adds a new entry to the history stack."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replace"),": It replaces the current entry on the history stack."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),": Returns the navigation path for the given config. Doesn't mutate the history stack.")),(0,r.kt)("h3",{id:"hash"},"hash"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," parameter is the hash you want to add to the path."),(0,r.kt)("h3",{id:"optionskeepquery"},"options.keepQuery"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"options.keepQuery")," parameter is a boolean that determines whether the current query parameters should be kept or not. If it is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the current query parameters will be merged with the new query parameters. If it is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the current query parameters will be ignored."),(0,r.kt)("h3",{id:"optionskeephash"},"options.keepHash"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"options.keepHash")," parameter is a boolean that determines whether the current hash should be kept or not. If it is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the current hash will be kept in the URL. If it is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the current hash will be ignored."),(0,r.kt)("h2",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useGo")," does not return any value except for the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," type, which returns the navigation path for the given config without mutating the history stack."))}d.isMDXComponent=!0}}]);